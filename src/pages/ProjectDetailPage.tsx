import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react';
import { NavLink, useParams } from 'react-router-dom';
import { PageTitle } from '../components/PageTitle';
import { TerminalWindow } from '../components/TerminalWindow';
import { getProjectBySlug } from '../data/projects.js';

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <section className="grid gap-6 animate-page-in">
        <PageTitle label="404.project" title="Project Not Found" />
        <NavLink className="inline-flex w-fit items-center gap-2 border-2 border-black bg-black px-4 py-3 font-black text-white shadow-[5px_5px_0_#22d3ee] dark:border-neutral-600" to="/projects">
          <ArrowLeft size={18} aria-hidden="true" /> Back to projects
        </NavLink>
      </section>
    );
  }

  return (
    <section className="grid gap-[clamp(28px,5vw,58px)] animate-page-in">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <NavLink className="inline-flex items-center gap-2 border-2 border-black bg-white px-4 py-3 font-black shadow-[5px_5px_0_#84cc16] transition hover:-translate-x-[2px] hover:-translate-y-[2px] dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100 dark:shadow-[5px_5px_0_rgba(132,204,22,0.3)]" to="/projects">
          <ArrowLeft size={18} aria-hidden="true" /> Back
        </NavLink>
        <a
          className="inline-flex items-center gap-2 border-2 border-black bg-black px-4 py-3 font-black text-white shadow-[5px_5px_0_#22d3ee] transition hover:-translate-x-[2px] hover:-translate-y-[2px] dark:border-neutral-600 dark:shadow-[5px_5px_0_rgba(34,211,238,0.3)]"
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live project <ExternalLink size={18} aria-hidden="true" />
        </a>
      </div>

      {/* Hero image */}
      {project.image && (
        <div className="aspect-video w-full overflow-hidden border-2 border-black shadow-[8px_8px_0_#000] dark:border-neutral-600 dark:shadow-[8px_8px_0_rgba(34,211,238,0.15)]">
          <img
            src={project.image}
            alt={`${project.name} project screenshot`}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div className="grid grid-cols-[minmax(0,0.95fr)_minmax(320px,0.55fr)] gap-8 max-[940px]:grid-cols-1">
        <div>
          <p className="mb-5 inline-flex border-2 border-black bg-white px-3 py-2 text-[13px] font-black uppercase shadow-[4px_4px_0_#22d3ee] dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100 dark:shadow-[4px_4px_0_rgba(34,211,238,0.3)]">{project.type} case study</p>
          <h1 className="max-w-[850px] text-[clamp(40px,6vw,78px)] font-black uppercase leading-[1]">{project.name}</h1>
          <p className="mt-6 max-w-[780px] bg-white/80 py-1 text-[clamp(18px,1.8vw,22px)] leading-[1.65] backdrop-blur dark:bg-transparent dark:text-neutral-300">{project.summary}</p>
        </div>

        <TerminalWindow title={`${project.slug}.case-study`}>
          <code className="block font-black">
            <span className="mr-2 inline-block text-cyan-400">$</span> inspect --project
          </code>
          <p className="dark:text-neutral-300">{project.name}</p>
          <code className="mt-3 block font-black">
            <span className="mr-2 inline-block text-cyan-400">$</span> outcome
          </code>
          <p className="dark:text-neutral-300">{project.outcome}</p>
        </TerminalWindow>
      </div>

      <div className="grid grid-cols-3 gap-4 max-[940px]:grid-cols-1">
        {project.metrics.map((metric, index) => (
          <div
            className={[
              'border-2 border-black bg-white p-5 font-black shadow-[5px_5px_0_#84cc16] dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-100 dark:shadow-[5px_5px_0_rgba(132,204,22,0.25)] animate-fade-in-up',
              `stagger-${index + 1}`
            ].join(' ')}
            key={metric}
          >
            {metric}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-5 max-[940px]:grid-cols-1">
        <CaseStudyBlock title="Problem" body={project.problem} />
        <CaseStudyBlock title="Role" body={project.role} />
        <CaseStudyList title="Highlights" items={project.highlights} accent="cyan" />
        <CaseStudyList title="Architecture" items={project.architecture} accent="lime" />
      </div>

      <div className="flex flex-wrap gap-3" aria-label={`${project.name} technologies`}>
        {project.stack.map((item) => (
          <span className="border-2 border-black bg-white px-3 py-2 text-sm font-black dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-200" key={item}>
            {item}
          </span>
        ))}
      </div>

      <NavLink className="inline-flex w-fit items-center gap-2 border-2 border-black bg-black px-5 py-4 font-black text-white shadow-[6px_6px_0_#22d3ee] transition hover:-translate-x-[2px] hover:-translate-y-[2px] dark:border-neutral-600 dark:shadow-[6px_6px_0_rgba(34,211,238,0.3)]" to="/contact">
        Discuss a similar project <ArrowUpRight size={18} aria-hidden="true" />
      </NavLink>
    </section>
  );
}

interface CaseStudyBlockProps {
  title: string;
  body: string;
}

function CaseStudyBlock({ title, body }: CaseStudyBlockProps) {
  return (
    <article className="border-2 border-black bg-white/95 p-6 shadow-[7px_7px_0_#000] backdrop-blur dark:border-neutral-600 dark:bg-neutral-900/95 dark:shadow-[7px_7px_0_rgba(255,255,255,0.05)]">
      <h2 className="mb-4 text-2xl font-black uppercase">{title}</h2>
      <p className="leading-[1.75] dark:text-neutral-300">{body}</p>
    </article>
  );
}

interface CaseStudyListProps {
  title: string;
  items: string[];
  accent: 'cyan' | 'lime';
}

function CaseStudyList({ title, items, accent }: CaseStudyListProps) {
  const itemClassName = accent === 'cyan'
    ? 'border-l-4 border-cyan-300 pl-3 font-black dark:border-cyan-500'
    : 'border-l-4 border-lime-300 pl-3 font-black dark:border-lime-500';

  return (
    <article className="border-2 border-black bg-white/95 p-6 shadow-[7px_7px_0_#000] backdrop-blur dark:border-neutral-600 dark:bg-neutral-900/95 dark:shadow-[7px_7px_0_rgba(255,255,255,0.05)]">
      <h2 className="mb-4 text-2xl font-black uppercase">{title}</h2>
      <ul className="grid gap-3">
        {items.map((item) => (
          <li className={itemClassName} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
