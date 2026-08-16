import { ArrowDownToLine } from 'lucide-react';
import { PageTitle } from '../components/PageTitle';
import { SkillMatrix } from '../components/SkillMatrix';
import { TerminalWindow } from '../components/TerminalWindow';
import { profile, skillGroups } from '../data/profile.js';

export function ResumePage() {
  return (
    <section className="grid gap-[clamp(28px,5vw,58px)] animate-page-in">
      <PageTitle label="resume.pdf" title="Resume" />
      <TerminalWindow title="cv.preview">
        <h2>{profile.name} - {profile.title}</h2>
        <p className="dark:text-neutral-300">React-focused engineer building full-stack products, backend systems, and blockchain application flows.</p>
        <div className="my-[18px] grid gap-1.5">
          <strong>Core:</strong>
          <span className="dark:text-neutral-300">{profile.primaryStack.join(', ')}, APIs, databases, smart-contract integrations, system design</span>
        </div>
        <div className="my-[18px] grid gap-1.5">
          <strong>Tools:</strong>
          <span className="dark:text-neutral-300">{skillGroups.find((group) => group.title === 'Tools & Workflow')?.items.join(', ')}</span>
        </div>
        <div className="my-[18px] grid gap-1.5">
          <strong>Work:</strong>
          <span className="dark:text-neutral-300">Full-stack product dashboards, backend services, and wallet-enabled blockchain experiences</span>
        </div>
        <a className="mt-[18px] inline-flex min-h-[50px] items-center justify-center gap-2.5 border-2 border-primary bg-primary px-[18px] font-black text-white shadow-[6px_6px_0_#22d3ee] transition hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[8px_8px_0_#22d3ee] max-[620px]:w-full dark:border-neutral-600 dark:shadow-[6px_6px_0_rgba(34,211,238,0.35)]" href={profile.resumePath} download>
          <ArrowDownToLine size={18} aria-hidden="true" /> Download CV
        </a>
      </TerminalWindow>
      <SkillMatrix />
    </section>
  );
}
