import { BookOpen } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { PageTitle } from '../components/PageTitle.jsx';
import { posts } from '../data/blogPosts.js';

export function BlogPage() {
  return (
    <section className="grid gap-[clamp(28px,5vw,58px)] animate-page-in">
      <PageTitle label="articles" title="Blog And Engineering Notes" />
      <div className="grid gap-4">
        {posts.map((post) => (
          <NavLink
            className="grid grid-cols-[minmax(220px,0.8fr)_1fr_auto] items-center gap-6 border-2 border-black bg-white p-[22px] transition hover:translate-x-2 hover:shadow-[-8px_8px_0_#000] max-[940px]:grid-cols-1"
            key={post.title}
            to={`/blog/${post.slug}`}
          >
            <div>
              <p className="mb-4 text-[13px] font-black uppercase">{post.tag} / {post.date} / {post.readTime}</p>
              <h2 className="m-0 mb-3 text-2xl font-black uppercase leading-[1.15]">{post.title}</h2>
            </div>
            <p className="leading-[1.65]">{post.excerpt}</p>
            <BookOpen size={22} aria-hidden="true" />
          </NavLink>
        ))}
      </div>
    </section>
  );
}
