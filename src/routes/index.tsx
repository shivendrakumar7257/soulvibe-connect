import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Counter } from "@/components/site/Counter";
import { ChatPreview } from "@/components/site/ChatPreview";
import heroImg from "@/assets/hero.jpg";
import girl1 from "@/assets/girl1.jpg";
import girl2 from "@/assets/girl2.jpg";
import girl3 from "@/assets/girl3.jpg";
import boy1 from "@/assets/boy1.jpg";
import boy2 from "@/assets/boy2.jpg";
import {
  MessageCircle, Phone, Video, Shield, IndianRupee, Heart,
  Sparkles, Star, Zap, Lock, HeadphonesIcon, Users, ChevronDown, ArrowRight
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Home,
});

const features = [
  { icon: MessageCircle, title: "1-to-1 Chatting", desc: "Real-time messages with people who actually listen." },
  { icon: Phone, title: "Crystal Voice Calls", desc: "HD voice calls with low latency, anywhere in India." },
  { icon: Video, title: "Live Video Calls", desc: "Face-to-face vibes with smart matching." },
  { icon: Zap, title: "Fast Matching", desc: "Get connected with someone in under 10 seconds." },
  { icon: Lock, title: "Privacy First", desc: "End-to-end privacy. Your number stays hidden." },
  { icon: HeadphonesIcon, title: "24/7 Support", desc: "Real humans on standby — every hour, every day." },
];

const reviews = [
  { name: "Aarav, Mumbai", img: boy1, stars: 5, text: "I made real friends here. The vibe is unmatched and the calls feel so personal." },
  { name: "Priya, Delhi", img: girl1, stars: 5, text: "SoulVibe helped me earn my pocket money while I genuinely enjoyed talking to people." },
  { name: "Rohan, Bangalore", img: boy2, stars: 5, text: "Late night talks hit different here. The matching is super fast and people are real." },
  { name: "Ananya, Pune", img: girl2, stars: 5, text: "Finally a platform that feels safe for girls. I recommend it to all my friends." },
  { name: "Sneha, Jaipur", img: girl3, stars: 5, text: "From a shy girl to confident host — SoulVibe gave me a community and income." },
];

const faqs = [
  { q: "Is SoulVibe free to use?", a: "Yes, signing up and basic chatting is free. Premium voice and video calls use coins." },
  { q: "How do I earn money on SoulVibe?", a: "Become a partner, accept chats and calls, and get paid for your time. Payouts every week." },
  { q: "Is my privacy protected?", a: "Absolutely. Your phone number is never shown. All chats are encrypted." },
  { q: "Who can join?", a: "Boys and girls aged 18+ from anywhere in India can join in minutes." },
];

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`mx-auto max-w-7xl px-4 ${className}`}>{children}</section>;
}

function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navbar />

      {/* HERO */}
      <Section className="pt-32 md:pt-40 pb-16 relative">
        <div className="absolute -z-10 top-20 -left-24 size-[420px] rounded-full bg-[var(--neon-purple)]/40 blur-3xl animate-blob" />
        <div className="absolute -z-10 top-40 right-0 size-[420px] rounded-full bg-[var(--neon-pink)]/30 blur-3xl animate-blob" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs">
              <Sparkles className="size-3.5 text-[var(--neon-pink)]" /> India's #1 vibe-first chat platform
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05]">
              Never Feel <br />
              <span className="text-gradient">Alone Again.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Real conversations. Real people. Real income. Connect with boys and girls across India through chats, voice and video calls — and earn while you talk.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/jobs" className="btn-neon">
                Start Chatting <ArrowRight className="size-4" />
              </Link>
              <Link to="/jobs" className="btn-ghost-neon hover:bg-white/10">
                Become a Partner
              </Link>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[girl1, boy1, girl2, boy2].map((src, i) => (
                  <img key={i} src={src} alt="" loading="lazy" width={40} height={40}
                    className="size-10 rounded-full border-2 border-background object-cover" />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-[var(--neon-pink)]">
                  {Array.from({length:5}).map((_,i)=>(<Star key={i} className="size-3.5 fill-current" />))}
                </div>
                <div className="text-muted-foreground">Loved by 50k+ Indians</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_30px_80px_-20px_var(--neon-purple)]">
              <img src={heroImg} alt="Indian friends chatting on SoulVibe" width={1600} height={1024} className="w-full h-[480px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            </div>
            <div className="hidden md:block absolute -bottom-6 -left-6 animate-float">
              <div className="glass rounded-2xl px-4 py-3 flex items-center gap-3">
                <div className="size-10 grid place-items-center rounded-full bg-[image:var(--gradient-hero)]">
                  <Heart className="size-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">2.4M Matches</div>
                  <div className="text-xs text-muted-foreground">made this week</div>
                </div>
              </div>
            </div>
            <div className="hidden md:block absolute -top-4 -right-4 animate-float" style={{animationDelay:"-3s"}}>
              <div className="glass rounded-2xl px-4 py-3 flex items-center gap-3">
                <div className="size-10 grid place-items-center rounded-full bg-[image:var(--gradient-hero)]">
                  <IndianRupee className="size-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">₹1,200/day</div>
                  <div className="text-xs text-muted-foreground">avg partner earnings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* COUNTERS */}
      <Section className="py-12">
        <div className="glass rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { v: 250000, s: "+", l: "Active Users" },
            { v: 1800000, s: "+", l: "Daily Chats" },
            { v: 45000, s: "+", l: "Video Calls / day" },
            { v: 99, s: "%", l: "Happy Vibes" },
          ].map((c, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">
                <Counter to={c.v} suffix={c.s} />
              </div>
              <div className="text-sm text-muted-foreground mt-1">{c.l}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* LIVE CHAT INTRO */}
      <Section className="py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ChatPreview />
          <div className="space-y-5">
            <span className="inline-flex glass rounded-full px-3 py-1 text-xs">Live Chat</span>
            <h2 className="text-4xl md:text-5xl font-bold">Conversations that <span className="text-gradient">feel real.</span></h2>
            <p className="text-muted-foreground text-lg">
              Whether it's a 2 AM heart-to-heart or playful flirty banter — SoulVibe makes every message feel like it matters. Start a chat in seconds and slide into voice or video any time.
            </p>
            <ul className="space-y-3">
              {["Instant 1:1 messaging", "Voice notes & emojis", "Switch to call with one tap"].map((t)=>(
                <li key={t} className="flex items-center gap-3">
                  <span className="size-6 grid place-items-center rounded-full bg-[image:var(--gradient-hero)]">
                    <Heart className="size-3 text-white" />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* FEATURE CARDS */}
      <Section className="py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex glass rounded-full px-3 py-1 text-xs">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">Everything you need to <span className="text-gradient">vibe.</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="group glass rounded-3xl p-6 hover:-translate-y-1 transition relative overflow-hidden">
              <div className="absolute -top-10 -right-10 size-32 rounded-full bg-[image:var(--gradient-hero)] opacity-0 group-hover:opacity-30 blur-2xl transition" />
              <div className="size-12 grid place-items-center rounded-2xl bg-[image:var(--gradient-hero)] shadow-[0_0_30px_var(--neon-pink)]">
                <f.icon className="size-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mt-4">{f.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SAFE / EARN */}
      <Section className="py-20">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="glass rounded-3xl p-8 relative overflow-hidden">
            <Shield className="size-10 text-[var(--neon-pink)]" />
            <h3 className="text-2xl md:text-3xl font-bold mt-4">Safe & Secure Platform</h3>
            <p className="text-muted-foreground mt-3">Verified profiles, hidden numbers, AI moderation and a real human safety team. Vibe with peace of mind.</p>
            <ul className="mt-5 grid grid-cols-2 gap-3 text-sm">
              {["Verified IDs","Hidden numbers","AI moderation","Block & report"].map((x)=>(
                <li key={x} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-[var(--neon-pink)]"/>{x}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl p-8 relative overflow-hidden bg-[image:var(--gradient-hero)]">
            <IndianRupee className="size-10 text-white" />
            <h3 className="text-2xl md:text-3xl font-bold mt-4 text-white">Earn money by chatting</h3>
            <p className="text-white/90 mt-3">Become a SoulVibe partner and get paid for every minute you spend chatting, calling or video calling.</p>
            <div className="grid grid-cols-3 gap-3 mt-6">
              {[{l:"Per Chat",v:"₹2"},{l:"Per Call",v:"₹6"},{l:"Per Video",v:"₹12"}].map((x)=>(
                <div key={x.l} className="rounded-2xl bg-black/30 backdrop-blur p-4 text-center">
                  <div className="text-2xl font-bold text-white">{x.v}</div>
                  <div className="text-xs text-white/80">{x.l} / min</div>
                </div>
              ))}
            </div>
            <Link to="/jobs" className="mt-6 inline-flex items-center gap-2 bg-black text-white rounded-full px-5 py-2.5 text-sm font-semibold hover:scale-105 transition">
              Apply now <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* REVIEWS MARQUEE */}
      <Section className="py-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex glass rounded-full px-3 py-1 text-xs">Reviews</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">Loved across <span className="text-gradient">India.</span></h2>
        </div>
        <div className="overflow-hidden mask-fade">
          <div className="flex gap-5 animate-marquee w-max">
            {[...reviews, ...reviews].map((r, i) => (
              <div key={i} className="glass rounded-3xl p-6 w-[320px] shrink-0">
                <div className="flex items-center gap-3">
                  <img src={r.img} alt="" loading="lazy" width={48} height={48} className="size-12 rounded-full object-cover ring-2 ring-[var(--neon-pink)]/40" />
                  <div>
                    <div className="font-semibold">{r.name}</div>
                    <div className="flex text-[var(--neon-pink)]">
                      {Array.from({length:r.stars}).map((_,j)=>(<Star key={j} className="size-3.5 fill-current" />))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">"{r.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <span className="inline-flex glass rounded-full px-3 py-1 text-xs">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Got questions? <br /><span className="text-gradient">We've got vibes.</span></h2>
            <p className="text-muted-foreground mt-4">Everything you need to know about chatting, earning and staying safe on SoulVibe.</p>
            <div className="mt-6 flex items-center gap-3">
              <Users className="size-5 text-[var(--neon-pink)]" />
              <span className="text-sm">Join 250k+ vibing users</span>
            </div>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => <Faq key={i} {...f} />)}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20">
        <div className="relative rounded-[2.5rem] overflow-hidden p-10 md:p-16 text-center bg-[image:var(--gradient-hero)]">
          <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)]" />
          <h2 className="text-4xl md:text-6xl font-bold text-white">Your vibe is waiting.</h2>
          <p className="text-white/90 mt-4 max-w-xl mx-auto">Join SoulVibe today and turn lonely nights into electric conversations.</p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/jobs" className="bg-black text-white rounded-full px-6 py-3 font-semibold hover:scale-105 transition">Start Chatting</Link>
            <Link to="/about" className="bg-white text-black rounded-full px-6 py-3 font-semibold hover:scale-105 transition">Learn More</Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button onClick={() => setOpen(!open)} className="w-full text-left glass rounded-2xl p-5 hover:bg-white/5 transition">
      <div className="flex items-center justify-between gap-4">
        <span className="font-semibold">{q}</span>
        <ChevronDown className={`size-5 transition ${open ? "rotate-180 text-[var(--neon-pink)]" : ""}`} />
      </div>
      {open && <p className="text-sm text-muted-foreground mt-3 animate-fade-up">{a}</p>}
    </button>
  );
}
