export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="relative h-10 w-10">
        <div className="absolute inset-0 animate-ping rounded-full bg-accent-violet/40" />
        <div className="absolute inset-1 rounded-full bg-brand-gradient" />
      </div>
    </div>
  );
}
