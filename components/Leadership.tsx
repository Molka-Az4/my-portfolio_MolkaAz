'use client';

import { FiUsers, FiStar } from 'react-icons/fi';

type LeadershipRole = {
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  imageSrc: string;
  imageAlt: string;
};

const ROLES: LeadershipRole[] = [
  {
    role: 'General Secretary',
    organization: 'ETC Junior Entreprise',
    period: 'Sep 2024 – Jun 2025',
    location: 'ENSTAB, Ben Arous · On-site',
    description:
      'Coordinated the operations and internal organisation of ETC Junior Entreprise while supporting both technical and non-technical teams.',
    highlights: [
      'Structured meetings, agendas and follow-ups for the board and project teams.',
      'Helped align projects with quality and delivery expectations (process, documentation, deadlines).',
      'Supported students on projects mixing embedded systems, data and AI.',
    ],
    imageSrc: '/clubs/etc-je-banner.jpeg', // ⚠️ mets ici ton image ETC JE
    imageAlt: 'ETC Junior Entreprise banner',
  },
  {
    role: 'General Secretary',
    organization: 'ACM Student Chapter',
    period: '2024 – Present',
    location: 'ENSTAB · Community & Events',
    description:
      'Actively contributed to the ACM student community by coordinating events around programming, algorithms and tech culture.',
    highlights: [
      'Managed communication, logistics and schedules for workshops and events.',
      'Participating in coding challenges and technical activities.',
      'Helped create a structured and welcoming environment for students interested in CP and advanced technologies.',
    ],
    imageSrc: '/clubs/image.png', // ⚠️ mets ici ton image ACM
    imageAlt: 'ACM Student Chapter ENSTAB banner',
  },
];

export function Leadership() {
  return (
    <div className="py-16 md:py-20">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-fuchsia-400 to-emerald-400 bg-clip-text text-transparent">
        Leadership &amp; Community
      </h2>

      {/* 2 cartes avec bannière */}
      <div className="grid gap-8 md:grid-cols-2">
        {ROLES.map((item) => (
          <article
            key={item.organization}
            className="group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/80 shadow-[0_0_45px_rgba(0,0,0,0.55)]"
          >
            {/* BANNIÈRE AVEC IMAGE */}
            <div className="relative h-60 md:h-80 overflow-hidden">
              <img
                src={item.imageSrc}
                alt={item.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent" />

              {/* badge + nom du club par-dessus l’image */}
              <div className="absolute bottom-3 left-4 right-4 flex flex-col gap-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 text-[0.7rem] text-emerald-300 border border-slate-700/80">
                  <FiUsers className="text-sm" />
                  <span className="uppercase tracking-[0.18em]">
                    Student Leadership
                  </span>
                </div>
                <p className="text-sm font-semibold text-slate-50">
                  {item.organization}
                </p>
              </div>
            </div>

            {/* CONTENU TEXTE */}
            <div className="px-6 py-6 md:px-7 md:py-7">
              <h3 className="text-lg md:text-xl font-semibold text-slate-50">
                {item.role}
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                {item.period} · {item.location}
              </p>

              <p className="mt-4 text-sm md:text-base text-slate-200 leading-relaxed">
                {item.description}
              </p>

              <ul className="mt-4 space-y-2 text-xs md:text-sm text-slate-200">
                {item.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <FiStar className="mt-[3px] text-emerald-300 flex-shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
