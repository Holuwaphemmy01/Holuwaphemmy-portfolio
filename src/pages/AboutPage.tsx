import { PageTitle } from '../components/PageTitle';
import { SkillMatrix } from '../components/SkillMatrix';
import { TerminalWindow } from '../components/TerminalWindow';
import { collaborationNotes, principles, profile } from '../data/profile.js';

export function AboutPage() {
  return (
    <section className="grid gap-[clamp(28px,5vw,58px)] animate-page-in">
      <PageTitle label="about.md" title="Engineer With Product Taste And Systems Discipline" />
      <div className="grid grid-cols-[1fr_minmax(320px,0.8fr)] items-start gap-10 max-[940px]:grid-cols-1">
        <p className="max-w-[760px] text-[clamp(18px,2vw,24px)] leading-[1.55] dark:text-neutral-300">
          {profile.name} is a {profile.title} who works across React frontends, backend services, and blockchain workflows. The strongest work sits where user experience, API contracts, and operational reliability meet.
        </p>
        <TerminalWindow title="principles.log">
          <ul className="m-0 grid gap-3 pl-[18px]">
            {principles.map((principle) => (
              <li key={principle} className="dark:text-neutral-300">{principle}</li>
            ))}
          </ul>
        </TerminalWindow>
      </div>
      <section className="grid gap-5">
        <div>
          <p className="mb-4 text-[13px] font-black uppercase dark:text-cyan-300">/technical-toolkit</p>
          <h2 className="max-w-[780px] text-[clamp(28px,4vw,44px)] font-black uppercase leading-[1.05]">
            Languages, frameworks, tools, and engineering workflows.
          </h2>
        </div>
        <SkillMatrix />
      </section>
      <section className="grid gap-5">
        <div>
          <p className="mb-4 text-[13px] font-black uppercase dark:text-cyan-300">/collaboration-style</p>
          <h2 className="max-w-[780px] text-[clamp(28px,4vw,44px)] font-black uppercase leading-[1.05]">
            How I work with teams, product goals, and complex systems.
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-4 max-[940px]:grid-cols-1">
          {collaborationNotes.map((note, index) => (
            <article
              className={[
                'border-2 border-black bg-white/95 p-6 backdrop-blur dark:border-neutral-600 dark:bg-neutral-900/95 animate-fade-in-up',
                index === 1
                  ? 'shadow-[6px_6px_0_#84cc16] dark:shadow-[6px_6px_0_rgba(132,204,22,0.25)]'
                  : 'shadow-[6px_6px_0_#22d3ee] dark:shadow-[6px_6px_0_rgba(34,211,238,0.25)]',
                `stagger-${index + 1}`
              ].join(' ')}
              key={note.title}
            >
              <h3 className="mb-4 text-xl font-black uppercase leading-[1.15]">{note.title}</h3>
              <p className="leading-[1.7] dark:text-neutral-300">{note.body}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
