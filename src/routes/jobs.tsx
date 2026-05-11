import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { useState } from "react";
import { Briefcase, IndianRupee, Clock, Headphones, Upload, Sparkles, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/jobs")({
  head: () => ({
    meta: [
      { title: "Jobs at SoulVibe — Earn by Chatting" },
      { name: "description", content: "Become a SoulVibe partner. Earn money by chatting, voice and video calling from home. Apply in 2 minutes." },
      { property: "og:title", content: "Earn with SoulVibe" },
      { property: "og:description", content: "Apply to become a SoulVibe partner — earn while you connect." },
    ],
  }),
  component: Jobs,
});

const jobCards = [
  { icon: Headphones, title: "Chat Partner", earn: "₹15,000 – ₹40,000 / mo", desc: "Reply to chats, make people smile, earn per minute." },
  { icon: Briefcase, title: "Voice Call Host", earn: "₹25,000 – ₹70,000 / mo", desc: "Talk to users on voice calls. Soft, friendly tone preferred." },
  { icon: Sparkles, title: "Video Star", earn: "₹40,000 – ₹1,20,000 / mo", desc: "Be on video calls with verified users. Highest earning role." },
];

function Jobs() {
  const [submitted, setSubmitted] = useState(false);
  const [photoName, setPhotoName] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="mx-auto max-w-7xl px-4 pt-32 md:pt-40 pb-12 text-center relative">
        <div className="absolute -z-10 inset-x-0 top-0 h-80 bg-[var(--gradient-glow)]" />
        <span className="inline-flex glass rounded-full px-3 py-1 text-xs"><IndianRupee className="size-3 mr-1 text-[var(--neon-pink)]" /> Hiring across India</span>
        <h1 className="text-5xl md:text-7xl font-bold mt-5">Earn by <span className="text-gradient">chatting.</span></h1>
        <p className="text-lg text-muted-foreground mt-5 max-w-2xl mx-auto">
          Join 10,000+ partners earning ₹500–₹4,000 every day from home. Just chat, call and connect — we handle the rest.
        </p>
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-10">
          {[{l:"Avg / day",v:"₹1,200"},{l:"Payouts",v:"Weekly"},{l:"Work hours",v:"Flexible"}].map(s=>(
            <div key={s.l} className="glass rounded-2xl p-4">
              <div className="text-xl md:text-2xl font-bold text-gradient">{s.v}</div>
              <div className="text-xs text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Open <span className="text-gradient">Roles</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {jobCards.map((j) => (
            <div key={j.title} className="glass rounded-3xl p-6 hover:-translate-y-1 transition relative overflow-hidden">
              <div className="absolute -top-12 -right-12 size-40 rounded-full bg-[image:var(--gradient-hero)] opacity-20 blur-2xl" />
              <div className="size-12 grid place-items-center rounded-2xl bg-[image:var(--gradient-hero)]"><j.icon className="size-6 text-white" /></div>
              <h3 className="font-semibold text-xl mt-4">{j.title}</h3>
              <div className="text-[var(--neon-pink)] font-semibold mt-1">{j.earn}</div>
              <p className="text-sm text-muted-foreground mt-2">{j.desc}</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground"><Clock className="size-3.5" /> Flexible hours · Work from anywhere</div>
            </div>
          ))}
        </div>
      </section>

      <section id="apply" className="mx-auto max-w-3xl px-4 py-20">
        <div className="glass rounded-3xl p-8 md:p-10">
          <div className="text-center mb-8">
            <span className="inline-flex glass rounded-full px-3 py-1 text-xs">Apply</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">Quick Registration</h2>
            <p className="text-muted-foreground mt-2 text-sm">Takes less than 2 minutes. We'll get back within 24 hours.</p>
          </div>

          {submitted ? (
            <div className="text-center py-12">
              <div className="mx-auto size-16 grid place-items-center rounded-full bg-[image:var(--gradient-hero)]"><CheckCircle2 className="size-8 text-white" /></div>
              <h3 className="text-2xl font-bold mt-4">Application received!</h3>
              <p className="text-muted-foreground mt-2">Our team will reach out on your phone within 24 hours.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="grid sm:grid-cols-2 gap-4"
            >
              <Field label="Full Name" name="name" required />
              <Field label="Age" name="age" type="number" min={18} required />
              <div>
                <label className="text-sm text-muted-foreground">Gender</label>
                <select required className="mt-1 w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-[var(--neon-pink)]">
                  <option value="">Select</option>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Other</option>
                </select>
              </div>
              <Field label="Phone Number" name="phone" type="tel" required />
              <Field label="State" name="state" required />
              <Field label="Experience" name="experience" placeholder="e.g. Fresher / 1 year" />
              <div className="sm:col-span-2">
                <label className="text-sm text-muted-foreground">Upload Photo</label>
                <label className="mt-1 flex items-center gap-3 bg-white/5 border border-dashed border-white/15 rounded-2xl px-4 py-4 cursor-pointer hover:bg-white/10 transition">
                  <Upload className="size-5 text-[var(--neon-pink)]" />
                  <span className="text-sm">{photoName ?? "Click to upload a clear face photo"}</span>
                  <input type="file" accept="image/*" className="hidden" onChange={(e)=>setPhotoName(e.target.files?.[0]?.name ?? null)} />
                </label>
              </div>
              <button type="submit" className="sm:col-span-2 btn-neon hover:[&]:btn-neon-hover justify-center mt-2">
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({ label, name, type = "text", ...rest }: { label: string; name: string; type?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={name} className="text-sm text-muted-foreground">{label}</label>
      <input
        id={name} name={name} type={type} {...rest}
        className="mt-1 w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-[var(--neon-pink)] focus:shadow-[0_0_0_4px_color-mix(in_oklab,var(--neon-pink)_15%,transparent)] transition"
      />
    </div>
  );
}
