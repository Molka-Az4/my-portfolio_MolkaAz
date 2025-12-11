'use client';

import { FiZap, FiCode, FiUsers } from 'react-icons/fi';

const CATEGORIES = [
  {
    icon: FiZap,
    title: 'AI, Automation & Cloud',
    items: [
      'Applied & generative AI',
      'OpenAI integration',
      'n8n workflow automation',
      'REST APIs & Webhooks',
      'Meta & LinkedIn APIs',
      'AWS (fundamentals)',
      'IoT systems',
      'Google Sheets & Google Drive automation',
      'Google Colab',
    ],
  },
  {
    icon: FiCode,
    title: 'Software, Data & Web Development',
    items: [
      'Python',
      'JavaScript (ES6+)',
      'Google Apps Script',
      'React.js',
      'HTML & CSS', 
      'Front-end UI implementation',
      'API integration patterns',
      'SQL & Power BI',
      'Data analysis & visualization',
      'KPI dashboards & reporting',
    ],
  },
  {
    icon: FiUsers,
    title: 'Soft Skills & Ways of Working',
    items: [
      'Team coordination & collaboration',
      'Problem-solving & critical thinking',
      'Strong organization & time management',
      'Documentation & knowledge sharing',
      'Curious, detail-oriented & proactive',
      'Adaptable to emerging technologies',
      'Clear communication: Arabic · French · English',
    ],
  },
];

export function Skills() {
  return (
    <div className="py-16 md:py-20">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
        My Creative &amp; Technical Toolkit
      </h2>

      {/* Cards grid */}
      <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map(({ icon: Icon, title, items }) => (
          <div
            key={title}
            className="relative rounded-3xl border border-slate-800/80 bg-slate-900/60 px-6 py-6 md:px-7 md:py-7 shadow-[0_0_40px_rgba(0,0,0,0.35)]"
          >
            {/* Card header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800 text-emerald-300">
                <Icon className="text-xl" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-50">
                {title}
              </h3>
            </div>

            {/* Skills list */}
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
