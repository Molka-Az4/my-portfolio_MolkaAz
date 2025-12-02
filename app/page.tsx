import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Leadership } from '@/components/Leadership';
import { Contact } from '@/components/Contact';

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navbar fixe en haut */}
      <header className="fixed top-0 left-0 right-0 border-b border-slate-800 bg-slate-950/80 backdrop-blur z-20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Nom complet à gauche */}
          <a
            href="#home"
            className="font-semibold text-lg tracking-tight text-slate-100"
          >
            Molka Azaiez
          </a>

          {/* 6 boutons à droite */}
          <nav className="hidden md:flex gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-emerald-300 transition">
              About
            </a>
            <a href="#experience" className="hover:text-emerald-300 transition">
              Experience
            </a>
            <a href="#skills" className="hover:text-emerald-300 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-emerald-300 transition">
              Projects
            </a>
            <a href="#leadership" className="hover:text-emerald-300 transition">
              Leadership
            </a>
            <a href="#contact" className="hover:text-emerald-300 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Décalage pour ne pas passer sous le header fixe */}
      <div className="pt-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero avec ton nom + rôles animés + photo à droite */}
          <Hero />

          {/* Sections avec les bons id pour le menu */}
          <section id="about" className="mt-16 scroll-mt-24">
            <About />
          </section>

          <section id="experience" className="mt-16 scroll-mt-24">
            <Experience />
          </section>

          <section id="skills" className="mt-16 scroll-mt-24">
            <Skills />
          </section>

          <section id="projects" className="mt-16 scroll-mt-24">
            <Projects />
          </section>

          <section id="leadership" className="mt-16 scroll-mt-24">
            <Leadership />
          </section>


          <section id="contact" className="mt-16 scroll-mt-24">
            <Contact />
          </section>
        </div>
      </div>

      <footer className="border-t border-slate-800 mt-8">
        <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-slate-500">
          © {year} Molka Azaiez. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
