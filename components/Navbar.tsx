'use client';

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-slate-950/70 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Full name on the left */}
        <a
          href="#home"
          className="text-xl font-semibold tracking-tight text-slate-100"
        >
          Molka Azaiez
        </a>

        {/* Nav links on the right */}
        <nav className="hidden md:flex gap-6 text-sm text-slate-300">
          <a href="#about" className="hover:text-emerald-400 transition">About</a>
          <a href="#experience" className="hover:text-emerald-400 transition">Experience</a>
          <a href="#skills" className="hover:text-emerald-400 transition">Skills</a>
          <a href="#projects" className="hover:text-emerald-400 transition">Projects</a>
          <a href="#leadership" className="hover:text-emerald-400 transition">Leadership</a>
          <a href="#contact" className="hover:text-emerald-400 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}
