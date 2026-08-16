import { ArrowUpRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { PageTitle } from '../components/PageTitle';
import { projects } from '../data/projects.js';

export function ProjectsPage() {
  return (
    <section className="grid gap-[clamp(28px,5vw,58px)] animate-page-in">
      <PageTitle label="projects.json" title="Selected Engineering Work" />
      <div className="grid grid-cols-3 gap-[18px] max-[940px]:grid-cols-1">
        {projects.map((project, index) => (
          <article
            className={[
              'group min-h-80 border-2 border-black bg-white p-0 overflow-hidden transition hover:-translate-y-2 hover:shadow-[8px_8px_0_#000] dark:border-neutral-600 dark:bg-neutral-900 dark:hover:shadow-[8px_8px_0_rgba(34,211,238,0.2)] animate-fade-in-up',
              `stagger-${index + 1}`
            ].join(' ')}
            key={project.name}
          >
            {/* Project image */}
            {project.image && (
              <div className="aspect-video w-full overflow-hidden border-b-2 border-black dark:border-neutral-600">
                <img
                  src={project.image}
                  alt={`${project.name} project screenshot`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-6">
              <div className="mb-4 flex items-start justify-between gap-4">
                <p className="text-[13px] font-black uppercase dark:text-cyan-300">{project.type}</p>
                <NavLink
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center border-2 border-black bg-white text-black shadow-[4px_4px_0_#22d3ee] transition hover:-translate-x-[2px] hover:-translate-y-[2px] hover:bg-black hover:text-white dark:border-neutral-600 dark:bg-neutral-800 dark:text-white dark:shadow-[4px_4px_0_rgba(34,211,238,0.3)] dark:hover:bg-white dark:hover:text-black"
                  to={project.url}
                  aria-label={`Open ${project.name} case study`}
                >
                  <ArrowUpRight size={20} aria-hidden="true" />
                </NavLink>
              </div>
              <h2 className="m-0 mb-3 text-2xl font-black uppercase leading-[1.15]">{project.name}</h2>
              <p className="leading-[1.65] dark:text-neutral-300">{project.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
                {project.stack.map((item) => (
                  <span className="border-2 border-black px-2.5 py-[7px] text-xs font-black dark:border-neutral-600 dark:text-neutral-200" key={item}>{item}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
