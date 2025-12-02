import { FiMapPin, FiClock, FiBriefcase, FiLinkedin } from 'react-icons/fi';

type ExperienceItem = {
  company: string;
  role: string;
  type: string;
  period: string;
  duration: string;
  location: string;
  highlight: string;
  skills: string[];
  logoSrc: string;
  linkedinUrl: string;
};

const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'Maydena',
    role: 'Software Automation Engineer Intern',
    type: 'Internship',
    period: 'Jun 2025 – Aug 2025',
    duration: '3 months',
    location: 'Ben Arous, Tunisia · Hybrid',
    highlight:
      'Built an AI-powered automation system for multi-platform content creation and publishing using n8n workflows and API integrations.',
    skills: ['n8n', 'API Integrations', 'Automation', 'OpenAI', 'Git'],
    logoSrc: '/maydena.jpg', // à mettre dans /public/logos
    linkedinUrl: 'https://www.linkedin.com/company/maydena/', // remplace par le vrai lien
  },
  {
    company: 'DeepVolt',
    role: 'Data Analyst Intern',
    type: 'Part-time',
    period: 'Feb 2024 – Jul 2024',
    duration: '6 months',
    location: 'Tunis, Tunisia · Remote',
    highlight:
      'Designed a data-visualisation solution to optimise energy management using KPIs, dashboards and performance monitoring.',
    skills: ['Data Analysis', 'KPI Dashboards', 'Power BI', 'SQL'],
    logoSrc: '/DeepVolt.png',
    linkedinUrl: 'https://www.linkedin.com/company/deepvolt/', // remplace par le vrai lien
  },
  {
    company: 'Creative DMS',
    role: 'Software Developer Intern',
    type: 'Internship',
    period: 'Jul 2024',
    duration: '1 month',
    location: 'Monastir, Tunisia · On-site',
    highlight:
      'Developed front-end features and UI components with HTML5, CSS3 and JavaScript for a production web application.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'UI Implementation'],
    logoSrc: '/Creative.png',
    linkedinUrl: 'https://www.linkedin.com/company/creative-dms/', // remplace par le vrai lien
  },
];

export function Experience() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto">
        {/* Titre + intro */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
            Hands-on roles across automation, data and web development, combining AI workflows,
            analytics and front-end delivery.
          </p>
        </div>

        {/* Ligne de temps simple, sans “box” */}
        <div className="relative mt-10">
          {/* ligne verticale */}
          <div className="pointer-events-none absolute left-8 top-0 bottom-0 border-l border-slate-800/70 md:left-10" />

          <div className="space-y-10">
            {EXPERIENCES.map((exp, index) => (
              <article
                key={exp.company + index}
                className="relative flex gap-4 md:gap-6 pl-4"
              >
                {/* Colonne gauche : logo + “dot” */}
                <div className="relative flex flex-col items-center gap-2">
                  {/* point sur la ligne */}
                  <div className="absolute -left-[17px] md:-left-[19px] mt-2 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.6)] border-2 border-slate-950" />

                  {/* logo */}
                  <div className="mt-0 h-12 w-12 md:h-14 md:w-14 rounded-full bg-slate-950 border border-slate-700/80 overflow-hidden flex items-center justify-center">
                    <img
                      src={exp.logoSrc}
                      alt={exp.company}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* index en dessous */}
                  <div className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-500 mt-1">
                    {index + 1}
                  </div>
                </div>

                {/* Colonne droite : contenu */}
                <div className="flex-1 space-y-2">
                  {/* ligne rôle / entreprise / type */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-slate-50">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-sm font-medium text-emerald-300">
                          {exp.company}
                        </p>
                        {/* type rôle */}
                        <span className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400 inline-flex items-center gap-1">
                          <FiBriefcase className="text-emerald-300 text-xs" />
                          {exp.type}
                        </span>
                      </div>

                      {/* lien LinkedIn */}
                      <a
                        href={exp.linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 inline-flex items-center gap-1.5 text-xs text-sky-300 hover:text-emerald-300 transition"
                      >
                        <FiLinkedin className="text-sm" />
                        <span>View on LinkedIn</span>
                      </a>
                    </div>

                    {/* meta dates compact à droite sur desktop */}
                    <div className="hidden md:flex flex-col items-end text-xs text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <FiClock className="text-emerald-300" />
                        <span>{exp.period}</span>
                      </div>
                      <span className="mt-1 text-[0.7rem] text-slate-500">
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  {/* meta dates + location sur mobile */}
                  <div className="md:hidden text-xs text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <FiClock className="text-emerald-300" />
                      <span>{exp.period}</span>
                    </div>
                    <span className="mt-0.5 inline-block text-[0.7rem] text-slate-500">
                      {exp.duration}
                    </span>
                  </div>

                  {/* localisation */}
                  <div className="mt-1 flex items-center gap-2 text-xs md:text-sm text-slate-400">
                    <FiMapPin className="text-sky-300" />
                    <span>{exp.location}</span>
                  </div>

                  {/* highlight */}
                  <p className="mt-3 text-sm md:text-base text-slate-200 leading-relaxed">
                    {exp.highlight}
                  </p>

                  {/* skills sans gros “pills boxy”, juste sobres */}
                  <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[0.75rem] md:text-xs text-slate-300">
                    {exp.skills.map((skill, i) => (
                      <span key={skill}>
                        {skill}
                        {i < exp.skills.length - 1 && <span className="text-slate-600"> · </span>}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
