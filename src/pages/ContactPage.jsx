import { ArrowDownToLine, GitBranch, Mail } from 'lucide-react';
import { PageTitle } from '../components/PageTitle.jsx';
import { profile } from '../data/profile.js';

export function ContactPage() {
  return (
    <section className="grid gap-[clamp(28px,5vw,58px)] animate-page-in">
      <PageTitle label="contact.sh" title="Let's Build Something Useful" />
      <div className="grid grid-cols-3 gap-4 max-[940px]:grid-cols-1">
        <a href={`mailto:${profile.email}`} className="inline-flex min-h-28 items-center justify-center gap-3 break-words border-2 border-black bg-white p-5 font-black transition hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#000] max-[620px]:w-full">
          <Mail size={22} aria-hidden="true" /> {profile.email}
        </a>
        <a href={profile.githubUrl} className="inline-flex min-h-28 items-center justify-center gap-3 break-words border-2 border-black bg-white p-5 font-black transition hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#000] max-[620px]:w-full">
          <GitBranch size={22} aria-hidden="true" /> {profile.githubLabel}
        </a>
        <a href={profile.resumePath} download className="inline-flex min-h-28 items-center justify-center gap-3 break-words border-2 border-black bg-white p-5 font-black transition hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#000] max-[620px]:w-full">
          <ArrowDownToLine size={22} aria-hidden="true" /> Download CV
        </a>
      </div>
    </section>
  );
}
