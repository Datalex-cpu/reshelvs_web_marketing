'use client';

import { useEffect, useRef } from 'react';

const VERT = `#version 300 es
in vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

const FRAG = `#version 300 es
precision highp float;
out vec4 fragColor;
uniform float u_time;
uniform vec2 u_resolution;

// 2D hash + value noise
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y);
}
float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p *= 2.02;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 p = uv;
  p.x *= u_resolution.x / u_resolution.y;

  float t = u_time * 0.025;

  // Single drifting fbm — gentle gradient mesh feel, no colorful warping
  vec2 q = vec2(fbm(p + vec2(0.0, t)), fbm(p + vec2(5.2, -t)));
  float n = fbm(p + 0.7 * q);

  // Resend-style: near-pure black with the faintest cool/warm light
  vec3 black = vec3(0.008, 0.008, 0.010);
  vec3 cool  = vec3(0.025, 0.028, 0.040);  // barely-blue
  vec3 warm  = vec3(0.040, 0.030, 0.028);  // barely-warm
  vec3 hi    = vec3(0.085, 0.085, 0.095);  // soft highlight

  vec3 col = black;
  col = mix(col, cool, smoothstep(0.35, 0.85, n) * 0.85);
  col = mix(col, warm, smoothstep(0.55, 1.0, n) * 0.35);

  // Soft light from upper-right (where a product image would sit)
  vec2 lightPos = vec2(0.78, 0.30);
  float light = 1.0 - smoothstep(0.0, 0.55, length(uv - lightPos));
  col = mix(col, hi, light * 0.45);

  // Radial vignette toward center
  vec2 c = uv - vec2(0.5, 0.4);
  float vig = 1.0 - smoothstep(0.0, 1.0, length(c) * 1.1);
  col *= 0.55 + 0.55 * vig;

  // Very subtle film grain
  float grain = (hash(gl_FragCoord.xy + u_time) - 0.5) * 0.010;
  col += grain;

  fragColor = vec4(col, 1.0);
}`;

function compile(gl: WebGL2RenderingContext, type: number, src: string) {
  const sh = gl.createShader(type)!;
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(sh);
    gl.deleteShader(sh);
    throw new Error('shader compile failed: ' + info);
  }
  return sh;
}

export function ShaderHero({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl2', {
      antialias: false,
      premultipliedAlpha: false,
      alpha: false,
    });
    if (!gl) return;

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl, gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl, gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const quad = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');

    let raf = 0;
    let start = performance.now();
    let running = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = canvas.clientWidth * dpr;
      const h = canvas.clientHeight * dpr;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };

    const render = () => {
      if (!running) return;
      resize();
      gl.uniform1f(uTime, (performance.now() - start) / 1000);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      raf = requestAnimationFrame(render);
    };
    render();

    const onVis = () => {
      running = !document.hidden;
      if (running) {
        start = performance.now();
        render();
      } else {
        cancelAnimationFrame(raf);
      }
    };
    document.addEventListener('visibilitychange', onVis);
    window.addEventListener('resize', resize);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      document.removeEventListener('visibilitychange', onVis);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      <canvas ref={ref} className="h-full w-full" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-bg to-transparent" />
    </div>
  );
}
