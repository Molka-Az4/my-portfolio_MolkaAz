'use client';

import { useEffect, useState } from 'react';
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const ROLES = [
  'Advanced Technologies Engineer',
  'Intelligent Automation Builder',
  'Applied and Generative AI Enthusiast',
  'Data Analyst & AI Engineer',
];

const TYPING_SPEED = 80;
const DELETING_SPEED = 50;
const PAUSE_AFTER_FULL = 2500; // 2.5s

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && roleText === currentRole) {
      // finished typing -> wait then delete
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_FULL);
    } else if (isDeleting && roleText === '') {
      // finished deleting -> next role
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % ROLES.length);
      }, 300);
    } else {
      timeout = setTimeout(() => {
        const nextLength = roleText.length + (isDeleting ? -1 : 1);
        setRoleText(currentRole.slice(0, nextLength));
      }, isDeleting ? DELETING_SPEED : TYPING_SPEED);
    }

    return () => clearTimeout(timeout);
  }, [roleText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-5rem)] flex items-center pb-12 overflow-hidden"
      style={{
        background:
          'radial-gradient(circle at top, rgba(88,28,135,0.55), transparent 60%), #020617',
      }}
    >
      {/* === STAR BACKGROUND LAYERS === */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="stars" />
        <div className="stars2" />
        <div className="stars3" />
      </div>

      {/* SOFT COLOR BLOBS ABOVE STARS */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
      </div>

      {/* main row: text left, photo right */}
      <div className="w-full flex flex-col md:flex-row items-start gap-6 md:gap-10 relative z-10">
        {/* LEFT: text */}
        <div className="w-full md:w-[60%] text-center md:text-left">
          {/* big name */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-slate-100">
            Molka Azaiez
          </h1>

          {/* animated role */}
          <p className="mt-4 text-2xl md:text-3xl font-semibold text-violet-400 h-[2.5rem]">
            {roleText}
            <span className="inline-block w-[2px] h-[1.1em] bg-violet-400 align-middle animate-pulse ml-1" />
          </p>

          {/* quote */}
          <p className="mt-6 text-base md:text-lg text-slate-300 max-w-xl mx-auto md:mx-0">
            Bringing together data, AI and automation to build reliable, intelligent
            systems that create real-world impact.
          </p>

          {/* buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-7 py-2.5 rounded-full bg-gradient-to-r from-violet-500 to-emerald-400 text-slate-950 font-semibold shadow-md shadow-emerald-900/40 hover:from-violet-400 hover:to-emerald-300 transition"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="px-7 py-2.5 rounded-full border border-emerald-400 text-emerald-200 font-semibold hover:bg-emerald-400/5 transition"
            >
              Let&apos;s Connect
            </a>
          </div>

          {/* socials */}
          <div className="mt-10 flex items-center gap-4 justify-center md:justify-start text-2xl text-slate-300">
            <a
              href="https://www.linkedin.com/in/molka-azaiez/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/molka.azaiez.2025?locale=fr_FR"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/azaiez_molka/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/Molka-Az4"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition"
            >
              <FaGithub />
            </a>
          </div>

          {/* down arrow */}
          <div className="mt-10 flex justify-center">
            <a href="#about" className="text-violet-400 animate-bounce text-3xl">
              <FiChevronDown />
            </a>
          </div>
        </div>

        {/* RIGHT: photo */}
        <div className="w-full md:w-[30%] flex justify-center md:justify-start md:mt-4">
          <div className="relative">
            {/* halo glow */}
            <div className="absolute -inset-4 rounded-full bg-emerald-500/20 blur-2xl" />
            <div className="relative w-74 h-74 md:w-90 md:h-90 rounded-full overflow-hidden border-[3px] md:border-4 border-emerald-400/80 bg-slate-900 shadow-xl shadow-emerald-900/40">
              <img
                src="/molka-portrait.png"
                alt="Molka Azaiez"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
