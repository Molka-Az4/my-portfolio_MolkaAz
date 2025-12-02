'use client';

import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiClock,
  FiMapPin,
  FiSend,
} from 'react-icons/fi';

export function Contact() {
  return (
    <div className="py-16 md:py-20">
      {/* Titre principal */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <p className="mt-3 text-sm md:text-base text-slate-300 max-w-xl mx-auto">
          Whether it&apos;s a project, a collaboration, or just a question about data, AI,
          automation or modern web stacks, I&apos;d be happy to talk.
        </p>
      </div>

      {/* Layout 2 colonnes */}
      <div className="grid gap-8 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] items-start">
        {/* COLONNE GAUCHE : carte d'infos */}
        <div className="relative rounded-3xl border border-slate-800/80 bg-slate-950/70 px-6 py-6 md:px-7 md:py-7 shadow-[0_0_45px_rgba(0,0,0,0.65)] overflow-hidden">
          {/* halo deco */}
          <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />

          <h3 className="text-lg md:text-xl font-semibold text-slate-50 mb-4">
            Contact details
          </h3>

          <div className="space-y-4 text-sm md:text-base text-slate-200 relative z-10">
            {/* Email */}
            <a
              href="mailto:molkaazaiez4@gmail.com"
              className="flex items-center gap-3 rounded-2xl bg-slate-900/80 px-3.5 py-2.5 hover:bg-slate-800/90 hover:text-emerald-300 transition"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
                <FiMail className="text-lg" />
              </span>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  Email
                </span>
                <span className="text-sm md:text-[0.95rem]">
                  molkaazaiez4@gmail.com
                </span>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/molka-azaiez/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl bg-slate-900/80 px-3.5 py-2.5 hover:bg-slate-800/90 hover:text-emerald-300 transition"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300">
                <FiLinkedin className="text-lg" />
              </span>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  LinkedIn
                </span>
                <span className="text-sm md:text-[0.95rem]">
                  linkedin.com/in/molka-azaiez
                </span>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Molka-Az4"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl bg-slate-900/80 px-3.5 py-2.5 hover:bg-slate-800/90 hover:text-emerald-300 transition"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-fuchsia-500/15 text-fuchsia-300">
                <FiGithub className="text-lg" />
              </span>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  GitHub
                </span>
                <span className="text-sm md:text-[0.95rem]">
                  github.com/Molka-Az4
                </span>
              </div>
            </a>

            {/* Infos complémentaires */}
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs md:text-sm">
              <div className="flex items-start gap-2">
                <FiClock className="mt-[2px] text-emerald-300" />
                <div>
                  <p className="font-medium text-slate-100">Response time</p>
                  <p className="text-slate-400">Usually within 24–48 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <FiMapPin className="mt-[2px] text-sky-300" />
                <div>
                  <p className="font-medium text-slate-100">Based in</p>
                  <p className="text-slate-400">Tunisia · Hybrid / Remote</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COLONNE DROITE : formulaire dans une carte glassy */}
        <div className="relative rounded-3xl border border-slate-700/70 bg-slate-900/60 px-6 py-6 md:px-8 md:py-8 shadow-[0_0_55px_rgba(0,0,0,0.7)] backdrop-blur-sm">
          {/* bordure gradient subtile */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-slate-700/60" />

          <form
            className="space-y-5 relative z-10"
            onSubmit={(e) => {
              e.preventDefault();
              // hook futur vers API / Formspree / autre
            }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              {/* Name */}
              <div className="space-y-2">
                <label className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl bg-slate-950/70 border border-slate-700/80 px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/70 focus:border-emerald-400/70"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-xl bg-slate-950/70 border border-slate-700/80 px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/70 focus:border-emerald-400/70"
                />
              </div>
            </div>

            {/* Sujet */}
            <div className="space-y-2">
              <label className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                Topic
              </label>
              <input
                type="text"
                placeholder="Project, collaboration, question..."
                className="w-full rounded-xl bg-slate-950/70 border border-slate-700/80 px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/70 focus:border-emerald-400/70"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Share a bit of context so I can understand how to help..."
                className="w-full rounded-xl bg-slate-950/70 border border-slate-700/80 px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/70 focus:border-emerald-400/70 resize-none"
              />
            </div>

            {/* Bouton */}
            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 via-sky-500 to-fuchsia-500 px-6 py-3 text-sm md:text-base font-semibold text-white shadow-lg hover:brightness-110 transition"
            >
              Send message
              <FiSend className="text-sm" />
            </button>

            <p className="mt-2 text-[0.7rem] text-slate-500">
              This form is not wired to a backend yet – the best way to reach me right now is still
              by email or LinkedIn.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
