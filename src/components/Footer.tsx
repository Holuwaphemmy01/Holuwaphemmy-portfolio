import { ArrowUp, GitBranch, Mail, Terminal } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { profile } from '../data/profile.js';

export function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className="mt-[clamp(48px,10vw,120px)] border-t-2 border-black bg-white/90 backdrop-blur dark:border-neutral-700 dark:bg-neutral-950/90">
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] grid-cols-3 gap-8 py-[clamp(32px,5vw,56px)] max-[940px]:grid-cols-1 max-[620px]:w-[min(100%-24px,1180px)]">
        {/* Brand + tagline */}
        <div className="grid content-start gap-4">
          <NavLink className="inline-flex w-fit items-center gap-2.5 font-black lowercase text-neutral-950 dark:text-neutral-100" to="/">
            <Terminal size={20} aria-hidden="true" />
            <span>{profile.handle}</span>
          </NavLink>
          <p className="max-w-[280px] text-sm leading-[1.7] text-neutral-600 dark:text-neutral-400">
            {profile.title} focused on React interfaces, backend architecture, and blockchain products.
          </p>
        </div>

        {/* Quick links */}
        <div className="grid content-start gap-4">
          <p className="text-[13px] font-black uppercase text-neutral-950 dark:text-neutral-100">Navigation</p>
          <nav className="grid gap-2" aria-label="Footer navigation">
            {[
              { label: 'Home', path: '/' },
              { label: 'About', path: '/about' },
              { label: 'Projects', path: '/projects' },
              { label: 'Experience', path: '/experience' },
              // { label: 'Blog', path: '/blog' },
              { label: 'Contact', path: '/contact' }
            ].map((link) => (
              <NavLink
                className="w-fit text-sm font-bold text-neutral-600 transition hover:text-black dark:text-neutral-400 dark:hover:text-white"
                key={link.path}
                to={link.path}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Contact + Social */}
        <div className="grid content-start gap-4">
          <p className="text-[13px] font-black uppercase text-neutral-950 dark:text-neutral-100">Connect</p>
          <div className="grid gap-3">
            <a
              className="inline-flex w-fit items-center gap-2 text-sm font-bold text-neutral-600 transition hover:text-black dark:text-neutral-400 dark:hover:text-white"
              href={`mailto:${profile.email}`}
            >
              <Mail size={15} aria-hidden="true" />
              {profile.email}
            </a>
            <a
              className="inline-flex w-fit items-center gap-2 text-sm font-bold text-neutral-600 transition hover:text-black dark:text-neutral-400 dark:hover:text-white"
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitBranch size={15} aria-hidden="true" />
              {profile.githubLabel}
            </a>
            {profile.linkedinUrl && (
              <a
                className="inline-flex w-fit items-center gap-2 text-sm font-bold text-neutral-600 transition hover:text-black dark:text-neutral-400 dark:hover:text-white"
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-[15px] w-[15px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t-2 border-black dark:border-neutral-700">
        <div className="mx-auto flex w-[min(1180px,calc(100%-32px))] items-center justify-between py-5 max-[620px]:w-[min(100%-24px,1180px)] max-[620px]:flex-col max-[620px]:gap-4">
          <p className="text-xs font-bold text-neutral-500 dark:text-neutral-500">
            © {new Date().getFullYear()} {profile.name}. Built with React + Vite.
          </p>
          <button
            className="inline-flex items-center gap-2 border-2 border-black bg-white px-3 py-2 text-xs font-black transition hover:-translate-y-[2px] hover:shadow-[4px_4px_0_#22d3ee] dark:border-neutral-600 dark:bg-neutral-800 dark:text-white dark:hover:shadow-[4px_4px_0_#84cc16]"
            onClick={scrollToTop}
            type="button"
          >
            <ArrowUp size={14} aria-hidden="true" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
