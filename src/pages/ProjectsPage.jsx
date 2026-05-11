import { ArrowUpRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { PageTitle } from '../components/PageTitle.jsx';
import { projects } from '../data/projects.js';

export function ProjectsPage() {
  return (
    <section className="grid gap-[clamp(28px,5vw,58px)] animate-page-in">
      <PageTitle label="projects.json" title="Selected Engineering Work" />
      <div className="grid grid-cols-3 gap-[18px] max-[940px]:grid-cols-1">
        {projects.map((project) => (
          <article className="min-h-80 border-2 border-black bg-white p-6 transition hover:-translate-y-2 hover:shadow-[8px_8px_0_#000]" key={project.name}>
            <div className="mb-4 flex items-start justify-between gap-4">
              <p className="text-[13px] font-black uppercase">{project.type}</p>
              <NavLink
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center border-2 border-black bg-white text-black shadow-[4px_4px_0_#22d3ee] transition hover:-translate-x-[2px] hover:-translate-y-[2px] hover:bg-black hover:text-white"
                to={project.url}
                aria-label={`Open ${project.name} case study`}
              >
                <ArrowUpRight size={20} aria-hidden="true" />
              </NavLink>
            </div>
            <h2 className="m-0 mb-3 text-2xl font-black uppercase leading-[1.15]">{project.name}</h2>
            <p className="leading-[1.65]">{project.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
              {project.stack.map((item) => (
                <span className="border-2 border-black px-2.5 py-[7px] text-xs font-black" key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
