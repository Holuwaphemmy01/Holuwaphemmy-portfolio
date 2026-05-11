import { ArrowDownToLine } from 'lucide-react';
import { PageTitle } from '../components/PageTitle.jsx';
import { SkillMatrix } from '../components/SkillMatrix.jsx';
import { TerminalWindow } from '../components/TerminalWindow.jsx';
import { profile, skillGroups } from '../data/profile.js';

export function ResumePage() {
  return (
    <section className="grid gap-[clamp(28px,5vw,58px)] animate-page-in">
      <PageTitle label="resume.pdf" title="Resume" />
      <TerminalWindow title="cv.preview">
        <h2>{profile.name} - {profile.title}</h2>
        <p>React-focused engineer building full-stack products, backend systems, and blockchain application flows.</p>
        <div className="my-[18px] grid gap-1.5">
          <strong>Core:</strong>
          <span>{profile.primaryStack.join(', ')}, APIs, databases, smart-contract integrations, system design</span>
        </div>
        <div className="my-[18px] grid gap-1.5">
          <strong>Tools:</strong>
          <span>{skillGroups.find((group) => group.title === 'Tools & Workflow')?.items.join(', ')}</span>
        </div>
        <div className="my-[18px] grid gap-1.5">
          <strong>Work:</strong>
          <span>Full-stack product dashboards, backend services, and wallet-enabled blockchain experiences</span>
        </div>
        <a className="mt-[18px] inline-flex min-h-[50px] items-center justify-center gap-2.5 border-2 border-black bg-black px-[18px] font-black text-white hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#000] max-[620px]:w-full" href={profile.resumePath} download>
          <ArrowDownToLine size={18} aria-hidden="true" /> Download CV
        </a>
      </TerminalWindow>
      <SkillMatrix />
    </section>
  );
}
