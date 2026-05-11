import { Heart, Phone, Video, Mic } from "lucide-react";

export function ChatPreview() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-[image:var(--gradient-hero)] opacity-30 blur-3xl rounded-[3rem] animate-glow" />
      <div className="relative glass rounded-[2.5rem] p-4 sm:p-5 w-full max-w-sm mx-auto shadow-[0_30px_80px_-30px_var(--neon-purple)]">
        <div className="flex items-center gap-3 pb-3 border-b border-white/10">
          <div className="size-11 rounded-full bg-[image:var(--gradient-hero)] grid place-items-center font-semibold">P</div>
          <div className="flex-1">
            <div className="font-semibold text-sm">Priya · 22</div>
            <div className="text-xs text-emerald-400 flex items-center gap-1">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" /> Online now
            </div>
          </div>
          <button className="size-9 grid place-items-center rounded-full glass"><Phone className="size-4" /></button>
          <button className="size-9 grid place-items-center rounded-full bg-[image:var(--gradient-hero)]"><Video className="size-4" /></button>
        </div>

        <div className="space-y-3 py-4 text-sm">
          <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white/5 px-4 py-2.5">Hey! How was your day? 💜</div>
          <div className="max-w-[80%] ml-auto rounded-2xl rounded-tr-sm bg-[image:var(--gradient-hero)] text-white px-4 py-2.5">Crazy good. You always make it better ✨</div>
          <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white/5 px-4 py-2.5">Voice note for you 🎙️</div>
          <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white/5 px-4 py-2 flex items-center gap-2">
            <Mic className="size-4 text-[var(--neon-pink)]" />
            <div className="flex items-end gap-0.5 h-5">
              {[3,7,4,9,6,8,5,10,4,6,3,8,5].map((h,i)=>(
                <span key={i} className="w-0.5 rounded bg-[var(--neon-pink)]" style={{height: h*2}} />
              ))}
            </div>
            <span className="ml-auto text-xs text-muted-foreground">0:18</span>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-3 border-t border-white/10">
          <input className="flex-1 bg-white/5 rounded-full px-4 py-2 text-sm outline-none" placeholder="Type a message..." />
          <button className="size-10 grid place-items-center rounded-full bg-[image:var(--gradient-hero)]"><Heart className="size-4" /></button>
        </div>
      </div>
    </div>
  );
}
