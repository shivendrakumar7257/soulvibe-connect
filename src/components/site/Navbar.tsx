import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/jobs", label: "Jobs" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <nav className={`glass flex items-center justify-between rounded-full px-4 md:px-6 py-3 ${scrolled ? "shadow-[0_10px_40px_-20px_var(--neon-purple)]" : ""}`}>
          <Link to="/" className="flex items-center gap-2 group">
            <span className="grid place-items-center size-9 rounded-full bg-[image:var(--gradient-hero)] shadow-[0_0_20px_var(--neon-pink)]">
              <Sparkles className="size-5 text-white" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              Soul<span className="text-gradient">Vibe</span>
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground transition"
                  activeProps={{ className: "px-4 py-2 rounded-full text-sm text-foreground bg-white/5" }}
                  activeOptions={{ exact: true }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-2">
            <Link to="/jobs" className="btn-neon text-sm">Start Chatting</Link>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass rounded-3xl p-4 animate-fade-up">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} onClick={() => setOpen(false)} className="block px-4 py-3 rounded-2xl hover:bg-white/5">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link to="/jobs" onClick={() => setOpen(false)} className="btn-neon w-full justify-center">Start Chatting</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
