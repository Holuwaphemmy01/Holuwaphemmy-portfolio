import { ArrowLeft, Mail } from 'lucide-react';
import { NavLink, useParams } from 'react-router-dom';
import { PageTitle } from '../components/PageTitle';
import { TerminalWindow } from '../components/TerminalWindow';
import { getPostBySlug } from '../data/blogPosts.js';

export function BlogDetailPage() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <section className="grid gap-6 animate-page-in">
        <PageTitle label="404.article" title="Article Not Found" />
        <NavLink className="inline-flex w-fit items-center gap-2 border-2 border-black bg-black px-4 py-3 font-black text-white shadow-[5px_5px_0_#22d3ee] dark:border-neutral-600" to="/blog">
          <ArrowLeft size={18} aria-hidden="true" /> Back to blog
        </NavLink>
      </section>
    );
  }

  return (
    <article className="grid gap-[clamp(28px,5vw,58px)] animate-page-in">
      <NavLink className="inline-flex w-fit items-center gap-2 border-2 border-black bg-white px-4 py-3 font-black shadow-[5px_5px_0_#84cc16] transition hover:-translate-x-[2px] hover:-translate-y-[2px] dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100 dark:shadow-[5px_5px_0_rgba(132,204,22,0.3)]" to="/blog">
        <ArrowLeft size={18} aria-hidden="true" /> Back to blog
      </NavLink>

      <div className="grid grid-cols-[minmax(0,0.95fr)_minmax(320px,0.5fr)] gap-8 max-[940px]:grid-cols-1">
        <div>
          <p className="mb-5 inline-flex border-2 border-black bg-white px-3 py-2 text-[13px] font-black uppercase shadow-[4px_4px_0_#22d3ee] dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100 dark:shadow-[4px_4px_0_rgba(34,211,238,0.3)]">
            {post.tag} / {post.date} / {post.readTime}
          </p>
          <h1 className="max-w-[900px] text-[clamp(38px,6vw,76px)] font-black uppercase leading-[1]">{post.title}</h1>
          <p className="mt-6 max-w-[780px] bg-white/80 py-1 text-[clamp(18px,1.8vw,22px)] leading-[1.65] backdrop-blur dark:bg-transparent dark:text-neutral-300">{post.excerpt}</p>
        </div>

        <TerminalWindow title={`${post.slug}.md`}>
          <code className="block font-black">
            <span className="mr-2 inline-block text-cyan-400">$</span> cat takeaways
          </code>
          <ul className="mt-3 grid gap-3">
            {post.takeaways.map((takeaway) => (
              <li className="border-l-4 border-cyan-300 pl-3 font-black dark:border-cyan-500" key={takeaway}>
                {takeaway}
              </li>
            ))}
          </ul>
        </TerminalWindow>
      </div>

      <div className="grid gap-5">
        {post.sections.map((section, index) => (
          <section
            className={[
              'border-2 border-black bg-white/95 p-6 shadow-[7px_7px_0_#000] backdrop-blur dark:border-neutral-600 dark:bg-neutral-900/95 dark:shadow-[7px_7px_0_rgba(255,255,255,0.05)] animate-fade-in-up',
              `stagger-${index + 1}`
            ].join(' ')}
            key={section.heading}
          >
            <p className="mb-3 text-[13px] font-black uppercase dark:text-cyan-300">0{index + 1}</p>
            <h2 className="mb-4 text-2xl font-black uppercase leading-[1.15]">{section.heading}</h2>
            <p className="max-w-[880px] leading-[1.8] dark:text-neutral-300">{section.body}</p>
          </section>
        ))}
      </div>

      <NavLink className="inline-flex w-fit items-center gap-2 border-2 border-black bg-black px-5 py-4 font-black text-white shadow-[6px_6px_0_#22d3ee] transition hover:-translate-x-[2px] hover:-translate-y-[2px] dark:border-neutral-600 dark:shadow-[6px_6px_0_rgba(34,211,238,0.3)]" to="/contact">
        Discuss this topic <Mail size={18} aria-hidden="true" />
      </NavLink>
    </article>
  );
}
