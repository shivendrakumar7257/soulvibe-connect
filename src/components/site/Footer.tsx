import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[var(--neon-pink)] to-transparent opacity-60" />
      <div className="mx-auto max-w-7xl px-4 py-16 grid gap-10 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="grid place-items-center size-9 rounded-full bg-[image:var(--gradient-hero)]">
              <Sparkles className="size-5 text-white" />
            </span>
            <span className="font-display text-xl font-bold">Soul<span className="text-gradient">Vibe</span></span>
          </div>
          <p className="text-sm text-muted-foreground">Never feel alone again. Connect, chat, and earn on India's most vibey conversation platform.</p>
          <div className="flex gap-3">
            {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="grid place-items-center size-10 rounded-full glass hover:shadow-[0_0_20px_var(--neon-pink)] transition">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/jobs" className="hover:text-foreground">Jobs</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Features</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Live Chat</li>
            <li>Voice Calls</li>
            <li>Video Calls</li>
            <li>Earn Money</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="size-4 text-[var(--neon-pink)] mt-0.5" /> 12-22A, Ahmedabad</li>
            <li className="flex gap-2"><Phone className="size-4 text-[var(--neon-pink)] mt-0.5" /> 7485077155</li>
            <li className="flex gap-2"><Mail className="size-4 text-[var(--neon-pink)] mt-0.5" /> soulvibesync@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} SoulVibe. All rights reserved.
      </div>
    </footer>
  );
}
