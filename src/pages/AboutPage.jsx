import { PageTitle } from '../components/PageTitle.jsx';
import { SkillMatrix } from '../components/SkillMatrix.jsx';
import { TerminalWindow } from '../components/TerminalWindow.jsx';
import { collaborationNotes, principles, profile } from '../data/profile.js';

export function AboutPage() {
  return (
    <section className="grid gap-[clamp(28px,5vw,58px)] animate-page-in">
      <PageTitle label="about.md" title="Engineer With Product Taste And Systems Discipline" />
      <div className="grid grid-cols-[1fr_minmax(320px,0.8fr)] items-start gap-10 max-[940px]:grid-cols-1">
        <p className="max-w-[760px] text-[clamp(18px,2vw,24px)] leading-[1.55]">
          {profile.name} is a {profile.title} who works across React frontends, backend services, and blockchain workflows. The strongest work sits where user experience, API contracts, and operational reliability meet.
        </p>
        <TerminalWindow title="principles.log">
          <ul className="m-0 grid gap-3 pl-[18px]">
            {principles.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </TerminalWindow>
      </div>
      <section className="grid gap-5">
        <div>
          <p className="mb-4 text-[13px] font-black uppercase">/technical-toolkit</p>
          <h2 className="max-w-[780px] text-[clamp(28px,4vw,44px)] font-black uppercase leading-[1.05]">
            Languages, frameworks, tools, and engineering workflows.
          </h2>
        </div>
        <SkillMatrix />
      </section>
      <section className="grid gap-5">
        <div>
          <p className="mb-4 text-[13px] font-black uppercase">/collaboration-style</p>
          <h2 className="max-w-[780px] text-[clamp(28px,4vw,44px)] font-black uppercase leading-[1.05]">
            How I work with teams, product goals, and complex systems.
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-4 max-[940px]:grid-cols-1">
          {collaborationNotes.map((note, index) => (
            <article
              className={[
                'border-2 border-black bg-white/95 p-6 backdrop-blur',
                index === 1 ? 'shadow-[6px_6px_0_#84cc16]' : 'shadow-[6px_6px_0_#22d3ee]'
              ].join(' ')}
              key={note.title}
            >
              <h3 className="mb-4 text-xl font-black uppercase leading-[1.15]">{note.title}</h3>
              <p className="leading-[1.7]">{note.body}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
