import { useState } from 'react';
import { ArrowDownToLine, GitBranch, Mail, Send } from 'lucide-react';
import { PageTitle } from '../components/PageTitle';
import { profile } from '../data/profile.js';

export function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section className="grid gap-[clamp(28px,5vw,58px)] animate-page-in">
      <PageTitle label="contact.sh" title="Let's Build Something Useful" />

      {/* Contact links */}
      <div className="grid grid-cols-3 gap-4 max-[940px]:grid-cols-1">
        <a href={`mailto:${profile.email}`} className="group inline-flex min-h-28 items-center justify-center gap-3 break-words border-2 border-black bg-white p-5 font-black transition hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#000] max-[620px]:w-full dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:shadow-[6px_6px_0_rgba(34,211,238,0.2)]">
          <Mail className="shrink-0 text-cyan-500" size={22} aria-hidden="true" /> {profile.email}
        </a>
        <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-28 items-center justify-center gap-3 break-words border-2 border-black bg-white p-5 font-black transition hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#000] max-[620px]:w-full dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:shadow-[6px_6px_0_rgba(34,211,238,0.2)]">
          <GitBranch className="shrink-0 text-lime-500" size={22} aria-hidden="true" /> {profile.githubLabel}
        </a>
        {profile.linkedinUrl ? (
          <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-28 items-center justify-center gap-3 break-words border-2 border-black bg-white p-5 font-black transition hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#000] max-[620px]:w-full dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:shadow-[6px_6px_0_rgba(34,211,238,0.2)]">
            <svg className="h-[22px] w-[22px] shrink-0 text-blue-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        ) : (
          <a href={profile.resumePath} download className="group inline-flex min-h-28 items-center justify-center gap-3 break-words border-2 border-black bg-white p-5 font-black transition hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[6px_6px_0_#000] max-[620px]:w-full dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:shadow-[6px_6px_0_rgba(34,211,238,0.2)]">
            <ArrowDownToLine className="shrink-0" size={22} aria-hidden="true" /> Download CV
          </a>
        )}
      </div>

      {/* Contact form */}
      <div className="grid gap-5">
        <div>
          <p className="mb-4 text-[13px] font-black uppercase dark:text-cyan-300">/send-message</p>
          <h2 className="max-w-[780px] text-[clamp(28px,4vw,44px)] font-black uppercase leading-[1.05]">
            Or drop me a direct message.
          </h2>
        </div>
        <form
          className="grid max-w-[680px] gap-4 border-2 border-black bg-white/95 p-[clamp(20px,3vw,32px)] shadow-[8px_8px_0_#000] backdrop-blur dark:border-neutral-600 dark:bg-neutral-900/95 dark:shadow-[8px_8px_0_rgba(34,211,238,0.15)]"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-2">
            <label className="text-[13px] font-black uppercase" htmlFor="contact-name">Name</label>
            <input
              className="min-h-[48px] border-2 border-black bg-white px-4 font-bold outline-none transition focus:shadow-[4px_4px_0_#22d3ee] dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100 dark:focus:shadow-[4px_4px_0_rgba(34,211,238,0.3)]"
              id="contact-name"
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <label className="text-[13px] font-black uppercase" htmlFor="contact-email">Email</label>
            <input
              className="min-h-[48px] border-2 border-black bg-white px-4 font-bold outline-none transition focus:shadow-[4px_4px_0_#22d3ee] dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100 dark:focus:shadow-[4px_4px_0_rgba(34,211,238,0.3)]"
              id="contact-email"
              name="email"
              type="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <label className="text-[13px] font-black uppercase" htmlFor="contact-message">Message</label>
            <textarea
              className="min-h-[140px] resize-y border-2 border-black bg-white p-4 font-bold outline-none transition focus:shadow-[4px_4px_0_#22d3ee] dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100 dark:focus:shadow-[4px_4px_0_rgba(34,211,238,0.3)]"
              id="contact-message"
              name="message"
              placeholder="Tell me about your project, timeline, and what you're looking for..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            className="inline-flex min-h-[50px] items-center justify-center gap-2.5 border-2 border-black bg-black px-[18px] font-black text-white shadow-[6px_6px_0_#84cc16] transition hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[8px_8px_0_#84cc16] dark:border-neutral-600 dark:shadow-[6px_6px_0_rgba(132,204,22,0.35)]"
            type="submit"
          >
            <Send size={18} aria-hidden="true" />
            {submitted ? 'Opening mail client...' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  );
}
