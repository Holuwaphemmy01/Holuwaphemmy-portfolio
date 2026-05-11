import { PageTitle } from '../components/PageTitle.jsx';
import { experience } from '../data/experience.js';

export function ExperiencePage() {
  return (
    <section className="grid gap-[clamp(28px,5vw,58px)] animate-page-in">
      <PageTitle label="experience.timeline" title="Experience" />
      <div className="grid gap-4">
        {experience.map((item) => (
          <article className="grid grid-cols-[120px_1fr] gap-5 border-t-2 border-black py-6 max-[620px]:grid-cols-1" key={`${item.year}-${item.role}`}>
            <span className="text-[28px] font-black">{item.year}</span>
            <div>
              <h2 className="m-0 mb-3 text-2xl font-black uppercase leading-[1.15]">{item.role}</h2>
              <p className="leading-[1.65]">{item.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
