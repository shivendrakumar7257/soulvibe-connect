import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SoulVibe — We'd Love to Hear From You" },
      { name: "description", content: "Get in touch with SoulVibe. Visit us in Ahmedabad, call 7485077155 or email soulvibesync@gmail.com." },
      { property: "og:title", content: "Contact SoulVibe" },
      { property: "og:description", content: "Reach out to SoulVibe — we're here to help." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="mx-auto max-w-7xl px-4 pt-32 md:pt-40 pb-12 text-center relative">
        <div className="absolute -z-10 inset-x-0 top-0 h-80 bg-[var(--gradient-glow)]" />
        <span className="inline-flex glass rounded-full px-3 py-1 text-xs">Contact</span>
        <h1 className="text-5xl md:text-7xl font-bold mt-5">Let's <span className="text-gradient">talk.</span></h1>
        <p className="text-lg text-muted-foreground mt-5 max-w-xl mx-auto">Questions, partnerships, press — drop us a line and we'll vibe back fast.</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 grid md:grid-cols-3 gap-5">
        {[
          { icon: MapPin, title: "Address", text: "12-22A, Ahmedabad, Gujarat, India" },
          { icon: Phone, title: "Phone", text: "+91 74850 77155" },
          { icon: Mail, title: "Email", text: "soulvibesync@gmail.com" },
        ].map((c) => (
          <div key={c.title} className="glass rounded-3xl p-6 text-center">
            <div className="mx-auto size-12 grid place-items-center rounded-2xl bg-[image:var(--gradient-hero)]">
              <c.icon className="size-6 text-white" />
            </div>
            <h3 className="mt-4 font-semibold">{c.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{c.text}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 grid lg:grid-cols-2 gap-6">
        <div className="glass rounded-3xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold">Send a message</h2>
          <p className="text-muted-foreground text-sm mt-1">We usually reply within a few hours.</p>
          {sent ? (
            <div className="text-center py-12">
              <div className="mx-auto size-14 grid place-items-center rounded-full bg-[image:var(--gradient-hero)]"><CheckCircle2 className="size-7 text-white" /></div>
              <h3 className="font-bold text-xl mt-4">Message sent!</h3>
              <p className="text-muted-foreground text-sm mt-2">Thanks for reaching out — we'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={(e)=>{e.preventDefault(); setSent(true);}} className="mt-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input name="name" label="Name" required />
                <Input name="email" label="Email" type="email" required />
              </div>
              <Input name="subject" label="Subject" required />
              <div>
                <label className="text-sm text-muted-foreground">Message</label>
                <textarea required rows={5} className="mt-1 w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-[var(--neon-pink)] transition resize-none" />
              </div>
              <button type="submit" className="btn-neon w-full justify-center">
                Send Message <Send className="size-4" />
              </button>
            </form>
          )}
        </div>

        <div className="glass rounded-3xl overflow-hidden min-h-[420px] relative">
          <iframe
            title="SoulVibe Ahmedabad location"
            src="https://www.google.com/maps?q=Ahmedabad,Gujarat&output=embed"
            className="absolute inset-0 w-full h-full grayscale-[40%] contrast-110"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute inset-0 pointer-events-none mix-blend-overlay bg-[var(--gradient-glow)]" />
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Input({ label, name, type = "text", ...rest }: { label: string; name: string; type?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={name} className="text-sm text-muted-foreground">{label}</label>
      <input id={name} name={name} type={type} {...rest}
        className="mt-1 w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none focus:border-[var(--neon-pink)] transition" />
    </div>
  );
}
