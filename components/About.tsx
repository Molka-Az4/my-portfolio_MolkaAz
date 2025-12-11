export function About() {
  return (
    <div className="py-16 md:py-20">
      <div className="relative max-w-4xl mx-auto">
        {/* halo flou derrière la "boîte" */}
        <div className="absolute -inset-4 rounded-3xl bg-emerald-500/10 blur-3xl -z-10" />

        {/* boîte principale */}
        <div className="relative rounded-3xl border border-slate-800/80 bg-slate-900/60 px-6 py-10 md:px-10 md:py-12 shadow-[0_0_80px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* arcs décoratifs comme sur le screen */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full border-2 border-emerald-400/50" />
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-44 w-44 rounded-full border-2 border-sky-400/40" />

          {/* titre */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
            About Me
          </h2>

          {/* texte */}
          <div className="space-y-5 text-slate-200 text-base md:text-lg leading-relaxed">
            <p>
              I am a final-year{' '}
              <span className="font-semibold text-violet-300">
                Advanced Technologies engineering student
              </span>{' '}
              with a strong focus on{' '}
              <span className="font-semibold text-emerald-300">
                data, applied AI and intelligent automation
              </span>
              . I enjoy turning messy, real-world problems into structured,
              data-driven solutions that actually deliver value.
            </p>

            <p>
              In my projects, I like to design{' '}
              <span className="font-semibold text-violet-300">
                end-to-end systems
              </span>
              : from collecting and cleaning data, to building analytics and
              IoT experiments, and then integrating them into modern
              web experiences using <span className="text-emerald-300">frontend frameworks</span>{' '}
              and automation tools like <span className="text-emerald-300">n8n</span> and REST
              APIs. I&apos;m especially interested in use cases where AI augments
              human decision-making instead of replacing it.
            </p>

            <p>
              Beyond the technical side, I care a lot about{' '}
              <span className="font-semibold text-emerald-300">
                clarity, reliability and impact
              </span>
              . I like working with multidisciplinary teams, structuring complex
              problems, and building solutions that are understandable,
              maintainable and aligned with real user needs. I am currently
              looking for opportunities in{' '}
              <span className="font-semibold text-violet-300">
                data, AI and intelligent automation
              </span>{' '}
              where I can grow, learn and contribute.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
