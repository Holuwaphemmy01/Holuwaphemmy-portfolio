export function TerminalWindow({ children, title = '~/portfolio' }) {
  return (
    <section className="overflow-hidden border-2 border-black bg-white/95 shadow-[12px_12px_0_#000] backdrop-blur max-[620px]:shadow-[7px_7px_0_#000]" aria-label={title}>
      <div className="flex min-h-[42px] items-center gap-2 border-b-2 border-black bg-black px-3.5 text-white">
        <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-lime-300" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-white" aria-hidden="true" />
        <p className="m-0 ml-2 text-xs font-extrabold">{title}</p>
      </div>
      <div className="p-[clamp(18px,3vw,30px)] text-[15px] leading-[1.7]">{children}</div>
    </section>
  );
}
