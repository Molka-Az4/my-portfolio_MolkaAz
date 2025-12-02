'use client';

import { FiCode, FiCpu, FiZap, FiBarChart2, FiUsers } from 'react-icons/fi';

const CATEGORIES = [
  {
    icon: FiCode,
    title: 'Development',
    items: [
      'TypeScript',
      'JavaScript (ES6+)',
      'React',
      'Next.js',
      'Node.js',
      'NestJS',
      'Express',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
    ],
  },
  {
    icon: FiCpu,
    title: 'AI & Data Science',
    items: [
      'Python',
      'Pandas & NumPy',
      'Scikit-learn',
      'Machine Learning',
      'NLP Concepts',
      'LLM-based Apps',
      'Jupyter / Colab',
      'Data Cleaning',
    ],
  },
  {
    icon: FiZap,
    title: 'Automation & Cloud',
    items: [
      'n8n Workflows',
      'REST APIs & Webhooks',
      'OpenAI API',
      'Integration Design',
      'Git & GitHub',
      'GitHub Actions (CI/CD)',
      'Docker (Basics)',
      'Cloud-oriented Apps',
    ],
  },
  {
    icon: FiBarChart2,
    title: 'Data Analytics & BI',
    items: [
      'Power BI',
      'SQL',
      'MongoDB',
      'Data Modeling',
      'KPI Dashboards',
      'Reporting & Monitoring',
      'Exploratory Analysis',
    ],
  },
  {
    icon: FiUsers,
    title: 'Methods & Leadership',
    items: [
      'Agile / Scrum',
      'Kanban',
      'Project Coordination',
      'Incident & QoS Culture',
      'Stakeholder Communication',
      'Documentation & Knowledge Sharing',
    ],
  },
];

export function Skills() {
  return (
    <div className="py-16 md:py-20">
      {/* Titre */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
        My Creative &amp; Technical Toolkit
      </h2>

      {/* Grid des cartes */}
      <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map(({ icon: Icon, title, items }) => (
          <div
            key={title}
            className="relative rounded-3xl border border-slate-800/80 bg-slate-900/60 px-6 py-6 md:px-7 md:py-7 shadow-[0_0_40px_rgba(0,0,0,0.35)]"
          >
            {/* header de la carte */}
            <div className="flex items-center gap-3 mb-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800 text-emerald-300">
                <Icon className="text-xl" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-50">
                {title}
              </h3>
            </div>

            {/* liste des skills */}
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-full bg-slate-800/80 px-3 py-1 text-xs md:text-sm text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
