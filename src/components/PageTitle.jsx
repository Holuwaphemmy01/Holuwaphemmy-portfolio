export function PageTitle({ label, title }) {
  return (
    <div>
      <p className="mb-4 text-[13px] font-black uppercase">/{label}</p>
      <h1 className="m-0 max-w-[920px] text-[clamp(42px,7vw,88px)] font-black uppercase leading-[0.95] tracking-normal max-[620px]:text-[clamp(36px,14vw,58px)]">{title}</h1>
    </div>
  );
}
