import { ArrowLeft, Terminal } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section className="grid min-h-[calc(100vh-300px)] place-content-center gap-8 text-center animate-page-in">
      <div className="mx-auto grid gap-4">
        <Terminal className="mx-auto text-neutral-300 dark:text-neutral-600" size={64} aria-hidden="true" />
        <p className="inline-flex mx-auto border-2 border-black bg-white px-3 py-2 text-[13px] font-black uppercase shadow-[4px_4px_0_#ef4444] dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100">
          Error 404
        </p>
        <h1 className="text-[clamp(48px,8vw,96px)] font-black uppercase leading-[0.95] text-neutral-950 dark:text-neutral-100">
          Page Not Found
        </h1>
        <p className="mx-auto max-w-[480px] text-lg leading-[1.65] text-neutral-600 dark:text-neutral-400">
          The route you requested does not exist. It may have been moved, deleted, or you may have mistyped the URL.
        </p>
        <div className="mx-auto mt-2 rounded border-2 border-black bg-black px-5 py-3 font-mono text-sm text-white shadow-[6px_6px_0_#22d3ee] dark:border-neutral-600">
          <code>
            <span className="mr-2 text-cyan-300">$</span> 404: command not found
          </code>
        </div>
      </div>
      <NavLink className="mx-auto inline-flex items-center gap-2 border-2 border-primary bg-primary px-5 py-4 font-black text-white shadow-[6px_6px_0_#84cc16] transition hover:-translate-x-[2px] hover:-translate-y-[2px] dark:border-neutral-600" to="/">
        <ArrowLeft size={18} aria-hidden="true" /> Back to home
      </NavLink>
    </section>
  );
}
