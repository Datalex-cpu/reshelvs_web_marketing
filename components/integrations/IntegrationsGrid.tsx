/**
 * Small monochrome integrations grid. Each tile renders the partner wordmark
 * inline as SVG text — instantly more credible than text chips, swappable
 * to actual SVG logos when partner brand assets become available.
 */
interface Integration {
  name: string;
  /** Pixel width hint for the SVG wordmark so visual weight feels balanced. */
  width: number;
  /** Tracking expressed as font letter-spacing (-em units typed as numbers). */
  tracking?: number;
  /** Optional weight override. */
  weight?: number;
}

const integrations: Integration[] = [
  { name: 'SAP', width: 78, weight: 700, tracking: 0.02 },
  { name: 'NetSuite', width: 110 },
  { name: 'Odoo', width: 80 },
  { name: 'Power BI', width: 96 },
  { name: 'Tableau', width: 96 },
  { name: 'Slack', width: 80 },
];

export function IntegrationsGrid() {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {integrations.map((i) => (
        <li
          key={i.name}
          className="flex h-16 items-center justify-center rounded-lg border border-border bg-fg/[0.02] text-fg-muted transition-colors hover:border-border-strong hover:text-fg"
        >
          <svg
            viewBox={`0 0 ${i.width} 22`}
            height="20"
            role="img"
            aria-label={i.name}
            className="overflow-visible"
          >
            <text
              x="0"
              y="17"
              fill="currentColor"
              fontFamily="'Inter','Inter Display',system-ui,sans-serif"
              fontSize="18"
              fontWeight={i.weight ?? 500}
              letterSpacing={i.tracking ?? -0.02}
              style={{ letterSpacing: `${i.tracking ?? -0.02}em` }}
            >
              {i.name}
            </text>
          </svg>
        </li>
      ))}
    </ul>
  );
}
