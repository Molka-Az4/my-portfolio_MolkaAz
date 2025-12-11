'use client';

import { useEffect, useState } from 'react';

type ProjectVideo = {
  src: string;
  poster?: string;
};

type Project = {
  title: string;
  period: string;
  context: string;
  description: string;
  focus: string;
  skills: string[];
  imageSrc: string;
  imageAlt: string;
  videos?: ProjectVideo[]; // optional list of videos
};

const PROJECTS: Project[] = [
  {
    title: 'Agrilink Smart Greenhouse',
    period: 'Jan 2025 – May 2025',
    context:
      'Academic project · ENSTAB – Ecole Nationale des Sciences et Technologies Avancées à Borj Cédria',
    description:
      'Designed and programmed an ESP32-based system to monitor sensors and control actuators for automated environmental regulation inside a smart greenhouse.',
    focus:
      'Focused on real-time data acquisition, control logic, and integration with a cloud backend for monitoring.',
    skills: [
      'Internet of Things (IoT)',
      'Embedded Software Programming',
      'ESP32',
      'Firebase',
      'Databases',
    ],
    imageSrc: '/projects/agrilink-smart-greenhouse.png',
    imageAlt:
      'Dashboard and hardware view of the Agrilink Smart Greenhouse project',
    videos: [
      {
        src: '/projects/agrilink-smart-greenhouse.mp4',
        poster: '/projects/agrilink-smart-greenhouse.png',
      },
    ],
  },
  {
    title: 'Asset Tracking',
    period: 'Jan 2024 – May 2024',
    context:
      'Academic project · ENSTAB – Ecole Nationale des Sciences et Technologies Avancées à Borj Cédria',
    description:
      'Built a web application for managing and tracking a company’s assets, with a simple interface to record, view and update information about equipment and products.',
    focus:
      'Focused on clean UI, basic CRUD flows and data structures to support inventory management and search.',
    skills: ['Front-End Development', 'Web UI Design', 'State Management'],
    imageSrc: '/projects/asset-tracking.png',
    imageAlt:
      'Web interface of the Asset Tracking application showing asset list and details',
    videos: [
      {
        // Front-end walkthrough
        src: '/projects/asset-tracking-frontend.mp4',
        poster: '/projects/asset-tracking.png',
      },
      {
        // Login / auth flow
        src: '/projects/asset-tracking-login.mp4',
        poster: '/projects/asset-tracking.png',
      },
    ],
  },
  {
    title: 'Smart Learning Cube',
    period: 'Oct 2023 – Jan 2024',
    context: 'Team project · ETC Junior Entreprise',
    description:
      'Created an interactive educational cube for children with Down syndrome, designed to foster cognitive and social development through playful interactions.',
    focus:
      'Worked on the embedded logic, interaction design and collaboration with the team to align technical choices with pedagogical goals.',
    skills: [
      'Embedded Software Programming',
      'Electrical Engineering',
      'CATIA',
      'Project Management',
      'Teamwork',
    ],
    imageSrc: '/projects/smart-learning-cube.png',
    imageAlt:
      'Physical prototype of the Smart Learning Cube with interactive faces',
  },
];

export function Projects() {
  // Avoid hydration mismatch with <video>
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <div className="py-16 md:py-20">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
        Projects
      </h2>

      <div className="space-y-8">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className="relative rounded-3xl border border-slate-800/80 bg-slate-900/70 px-6 py-6 md:px-8 md:py-8 shadow-[0_0_50px_rgba(0,0,0,0.6)] overflow-hidden"
          >
            {/* Accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-400 to-emerald-400" />

            <div className="relative flex flex-col md:flex-row md:items-stretch md:gap-6 gap-4">
              {/* LEFT SIDE */}
              <div className="md:w-2/3">
                <h3 className="text-xl md:text-2xl font-semibold text-slate-50">
                  {project.title}
                </h3>

                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-emerald-300">
                  {project.period}
                </p>
                <p className="mt-1 text-xs text-slate-400">{project.context}</p>

                <ul className="mt-4 space-y-2 text-sm md:text-base text-slate-200">
                  <li className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span>{project.description}</span>
                  </li>

                  <li className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    <span className="text-slate-300">{project.focus}</span>
                  </li>
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full bg-slate-800/80 px-3 py-1 text-[0.7rem] md:text-xs text-slate-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT SIDE: MEDIA (VIDEOS OR IMAGE) */}
              <div className="md:w-1/3">
                <div className="rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-950/60 h-full flex items-center">
                  {hasMounted && project.videos && project.videos.length > 0 ? (
                    project.videos.length === 1 ? (
                      // Single video (Agrilink)
                      <video
                        className="w-full h-40 md:h-44 lg:h-48 object-cover"
                        controls
                        playsInline
                        preload="metadata"
                        poster={project.videos[0].poster ?? project.imageSrc}
                      >
                        <source
                          src={project.videos[0].src}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      // Multiple videos (Asset Tracking: front-end + login)
                      <div className="flex flex-col gap-3 w-full px-3 py-3">
                        {project.videos.map((video, idx) => (
                          <video
                            key={video.src + idx}
                            className="w-full h-24 md:h-28 lg:h-32 object-cover rounded-xl border border-slate-800/80"
                            controls
                            playsInline
                            preload="metadata"
                            poster={video.poster ?? project.imageSrc}
                          >
                            <source src={video.src} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ))}
                      </div>
                    )
                  ) : (
                    // Fallback: simple image
                    <img
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      className="w-full h-60 md:h-60 lg:h-60 object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
