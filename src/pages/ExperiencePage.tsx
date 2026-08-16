import { PageTitle } from '../components/PageTitle';
import { experience } from '../data/experience.js';

export function ExperiencePage() {
  return (
    <section className="grid gap-[clamp(28px,5vw,58px)] animate-page-in">
      <PageTitle label="experience.timeline" title="Experience" />
      <div className="relative grid gap-0">
        {/* Timeline connector line */}
        <div className="absolute left-[59px] top-0 bottom-0 w-[2px] bg-black/15 max-[620px]:hidden dark:bg-neutral-700" aria-hidden="true" />

        {experience.map((item, index) => (
          <article
            className={[
              'group relative grid grid-cols-[120px_1fr] gap-5 border-t-2 border-black py-8 max-[620px]:grid-cols-1 dark:border-neutral-700 animate-fade-in-up',
              `stagger-${index + 1}`
            ].join(' ')}
            key={`${item.year}-${item.role}`}
          >
            {/* Year with dot */}
            <div className="relative">
              <span className="text-[28px] font-black">{item.year}</span>
              {/* Timeline dot */}
              <span className="absolute -right-[17px] top-[14px] z-10 h-4 w-4 rounded-full border-[3px] border-black bg-cyan-300 max-[620px]:hidden dark:border-neutral-600 dark:bg-cyan-400" aria-hidden="true" />
            </div>

            <div className="grid gap-4">
              <div>
                <h2 className="m-0 mb-1 text-2xl font-black uppercase leading-[1.15]">{item.role}</h2>
                <p className="text-sm font-bold text-neutral-500 dark:text-neutral-400">{item.company}</p>
              </div>
              <p className="max-w-[680px] leading-[1.65] dark:text-neutral-300">{item.summary}</p>

              {/* Achievements */}
              {item.achievements && (
                <ul className="grid gap-2">
                  {item.achievements.map((achievement) => (
                    <li className="flex items-start gap-2 leading-[1.6] dark:text-neutral-300" key={achievement}>
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              )}

              {/* Tech stack */}
              {item.stack && (
                <div className="flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span
                      className="border-2 border-black bg-white px-2.5 py-1.5 text-xs font-black dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-200"
                      key={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
