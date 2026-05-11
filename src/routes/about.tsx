import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Heart, Target, Eye, Sparkles } from "lucide-react";
import girl1 from "@/assets/girl1.jpg";
import girl2 from "@/assets/girl2.jpg";
import boy1 from "@/assets/boy1.jpg";
import boy2 from "@/assets/boy2.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SoulVibe — Our Story & Mission" },
      { name: "description", content: "Why SoulVibe exists, our mission and the team building India's most emotional connection platform." },
      { property: "og:title", content: "About SoulVibe" },
      { property: "og:description", content: "Why SoulVibe exists — our mission, vision, and the team behind the vibe." },
    ],
  }),
  component: About,
});

const team = [
  { name: "Rahul Mehta", role: "Founder & CEO", img: boy1 },
  { name: "Sneha Iyer", role: "Head of Community", img: girl1 },
  { name: "Arjun Sharma", role: "CTO", img: boy2 },
  { name: "Aisha Khan", role: "Head of Trust & Safety", img: girl2 },
];

function About() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="mx-auto max-w-7xl px-4 pt-32 md:pt-40 pb-16 text-center relative">
        <div className="absolute -z-10 inset-x-0 top-10 h-72 bg-[var(--gradient-glow)]" />
        <span className="inline-flex glass rounded-full px-3 py-1 text-xs"><Sparkles className="size-3 mr-1 text-[var(--neon-pink)]" /> Our Story</span>
        <h1 className="text-5xl md:text-7xl font-bold mt-5">Built for <span className="text-gradient">real connection.</span></h1>
        <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
          SoulVibe started as a simple idea — what if loneliness wasn't a thing anymore? Today, we're a movement of millions across India redefining what online friendship and emotional connection mean.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-3 gap-5">
        {[
          { icon: Heart, title: "Why We Exist", text: "In a world that scrolls, we wanted people to actually talk. SoulVibe makes meaningful conversation effortless." },
          { icon: Target, title: "Our Mission", text: "Empower every Indian to find a friend, a partner, or just a good chat — and earn from doing what they love." },
          { icon: Eye, title: "Our Vision", text: "To become India's most loved platform for emotional connection, friendship and vibe-based earning." },
        ].map((c) => (
          <div key={c.title} className="glass rounded-3xl p-7">
            <div className="size-12 grid place-items-center rounded-2xl bg-[image:var(--gradient-hero)]">
              <c.icon className="size-6 text-white" />
            </div>
            <h3 className="font-semibold text-xl mt-4">{c.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{c.text}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="glass rounded-3xl p-8 md:p-14 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">The emotional internet, <span className="text-gradient">reimagined.</span></h2>
          <p className="text-muted-foreground mt-5 max-w-3xl mx-auto">
            We believe every person deserves someone to talk to. Whether it's a late-night thought, a heartbreak, a celebration, or just boredom — SoulVibe connects you to a real human, instantly. And for the people who love listening and chatting, we turn that gift into income.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center mb-10">
          <span className="inline-flex glass rounded-full px-3 py-1 text-xs">Team</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">The vibe makers.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((t) => (
            <div key={t.name} className="glass rounded-3xl p-5 text-center hover:-translate-y-1 transition group">
              <div className="relative mx-auto size-32 rounded-full overflow-hidden ring-2 ring-[var(--neon-pink)]/40 group-hover:ring-[var(--neon-pink)] transition">
                <img src={t.img} alt={t.name} loading="lazy" width={256} height={256} className="size-full object-cover" />
              </div>
              <h3 className="mt-4 font-semibold">{t.name}</h3>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
