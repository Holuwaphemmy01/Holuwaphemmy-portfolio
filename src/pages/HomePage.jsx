import { NavLink } from 'react-router-dom';
import { ArrowDownToLine, ArrowRight } from 'lucide-react';
import { InteractiveTerminal } from '../components/InteractiveTerminal.jsx';
import { profile } from '../data/profile.js';

export function HomePage() {
  return (
    <div className="grid min-h-[calc(100vh-190px)] grid-cols-[minmax(0,0.9fr)_minmax(360px,0.72fr)] items-center gap-[clamp(32px,6vw,86px)] animate-page-in max-[940px]:min-h-0 max-[940px]:grid-cols-1">
      <section>
        <p className="mb-5 inline-flex border-2 border-black bg-white px-3 py-2 text-[13px] font-black uppercase shadow-[4px_4px_0_#84cc16]">Software Engineer / systems thinker / product builder</p>
        <h1 className="m-0 max-w-[780px] text-[clamp(38px,6.2vw,74px)] font-black uppercase leading-[1.02] tracking-normal max-[620px]:text-[clamp(34px,12vw,54px)]">{profile.name} builds sharp full-stack software with terminal-grade attention to detail.</h1>
        <p className="mt-6 max-w-[700px] bg-white/80 py-1 text-[clamp(18px,1.8vw,22px)] leading-[1.65] backdrop-blur">
          {profile.title} focused on React interfaces, backend architecture, and blockchain products that are clear, fast, and ready for real users.
        </p>
        <div className="mt-[30px] flex flex-wrap gap-3">
          <NavLink className="inline-flex min-h-[50px] items-center justify-center gap-2.5 border-2 border-black bg-black px-[18px] font-black text-white shadow-[6px_6px_0_#22d3ee] hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[8px_8px_0_#22d3ee] max-[620px]:w-full" to="/projects">
            View projects <ArrowRight size={18} aria-hidden="true" />
          </NavLink>
          <a className="inline-flex min-h-[50px] items-center justify-center gap-2.5 border-2 border-black bg-white px-[18px] font-black shadow-[6px_6px_0_#84cc16] hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[8px_8px_0_#84cc16] max-[620px]:w-full" href={profile.resumePath} download>
            <ArrowDownToLine size={18} aria-hidden="true" /> Download CV
          </a>
        </div>
      </section>
      <InteractiveTerminal />
    </div>
  );
}
