/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Heart, 
  MapPin, 
  Calendar, 
  Clock, 
  Music, 
  Camera, 
  Mail,
  ChevronDown,
  Gift
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

// --- Constants ---
const WEDDING_DATE = new Date("2026-07-24T10:00:00");
const BRIDE_NAME = "Fardous";
const GROOM_NAME = "Razin";

// --- Components ---

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = WEDDING_DATE.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 md:gap-8 justify-center mt-8">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds }
      ].map((item, i) => (
        <motion.div 
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + i * 0.1 }}
          className="flex flex-col items-center"
        >
          <div className="text-3xl md:text-5xl font-serif text-wedding-gold mb-1">
            {String(item.value).padStart(2, '0')}
          </div>
          <div className="text-[10px] md:text-xs uppercase tracking-widest text-wedding-ink/60">
            {item.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-16 px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-block"
    >
      <Heart className="w-5 h-5 text-wedding-gold mx-auto mb-4 fill-wedding-gold/20" />
      <h2 className="text-4xl md:text-6xl font-serif mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="serif-italic text-xl text-wedding-ink/70">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-[1px] bg-wedding-gold/30 mx-auto mt-8" />
    </motion.div>
  </div>
);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="relative selection:bg-wedding-gold/30" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col pt-8 md:pt-12 overflow-hidden bg-wedding-cream">
        {/* Background Decorative Number */}
        <div className="absolute -top-10 -left-10 text-[250px] md:text-[400px] font-serif font-bold text-wedding-rose z-0 opacity-20 select-none leading-none">
          24
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex justify-between items-center px-8 md:px-24 mb-8 md:mb-12">
          <div className="label-caps !opacity-100 text-wedding-gold">Nikkah Mubarak</div>
          <div className="hidden md:flex gap-12 label-caps !font-light tracking-[0.2em]">
            <span className="cursor-pointer hover:text-wedding-gold transition-colors">Our Nikkah</span>
            <span className="cursor-pointer hover:text-wedding-gold transition-colors">Event Details</span>
            <span className="cursor-pointer hover:text-wedding-gold transition-colors">Dua & Wisdom</span>
          </div>
        </nav>

        {/* Content */}
        <main className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-24">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Left Column: Names */}
            <div className="md:col-span-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <h2 className="label-caps mb-4 md:mb-8 font-light text-wedding-gold/60">A Blessed Nikkah</h2>
                <h1 className="editorial-heading text-6xl md:text-[110px] -ml-1 mb-4">
                  {BRIDE_NAME} <span className="text-[30px] md:text-[70px] not-italic font-sans opacity-20 mx-2 md:mx-4 font-extralight">&</span> <br className="hidden md:block" />
                  <span className="md:pl-32">{GROOM_NAME}</span>
                </h1>
              </motion.div>
            </div>

            {/* Right Column: Quote & Details */}
            <div className="md:col-span-4 md:border-l border-divider md:pl-12 py-4 md:py-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <p className="text-base md:text-xl italic text-wedding-ink/50 mb-8 md:mb-12 leading-relaxed font-accent">
                  "And We created you in pairs."
                </p>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-6 md:w-8 h-px bg-wedding-gold opacity-30"></div>
                    <div className="label-caps opacity-100 text-wedding-gold/80">Friday, 24 July</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-6 md:w-8 h-px bg-wedding-gold opacity-30"></div>
                    <div className="label-caps opacity-100 text-wedding-gold/80">Sacred Sunnah Ceremony</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </main>

        {/* Hero Footer */}
        <footer className="relative z-10 p-8 md:px-24 flex justify-between items-end">
          <div className="max-w-xs">
            <h3 className="label-caps !opacity-100 mb-2 text-wedding-gold">Maritime Museum</h3>
            <p className="text-xs md:text-sm italic opacity-40 font-serif leading-none">
              Naval Avenue Road, Kazir Dewri, Chittagong
            </p>
          </div>
          <div className="hidden md:block text-right">
            <div className="text-[40px] font-light leading-none mb-1 text-wedding-gold/80">2026</div>
            <div className="label-caps opacity-40">Save the Date</div>
          </div>
        </footer>

        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 opacity-20"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </section>

      {/* Countdown Section (Editorial Style) */}
      <section className="py-20 md:py-24 bg-wedding-rose border-y border-divider">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="label-caps mb-8 md:mb-12 text-wedding-gold/60">Counting down to our Nikkah</div>
          <Countdown />
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-24 md:py-32 bg-wedding-cream flex justify-center border-t border-divider">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionHeading title="A Shared Vision" subtitle="Our Roots & Aspirations" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center text-left"
          >
            <div className="space-y-6">
              <h3 className="editorial-heading text-3xl md:text-4xl text-wedding-ink/90">Divided by Dalu, United by Soul</h3>
              <p className="text-wedding-ink/60 leading-relaxed font-serif italic text-lg text-justify">
                Hailing from the Gatiadenga area of Satkania, our homes are separated by the flowing Dalu River. Although the Dalu River divides the soil of Gatiadenga into two, it could never divide our hearts. As students pursuing our dreams, we have chosen to unite in this sacred bond to preserve our faith and stay away from sins, InshaAllah.
              </p>
            </div>
            <div className="bg-wedding-rose/30 p-8 border border-wedding-gold/20 flex flex-col justify-center items-center space-y-4 rounded-sm">
              <div className="w-12 h-12 rounded-full bg-wedding-gold/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-wedding-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.586.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <p className="label-caps !text-[10px] tracking-widest text-center leading-loose">
                Two Banks of Dalu <br/> & <br/> One Sacred Soul
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Appeal Section */}
      <section className="py-24 md:py-32 bg-wedding-cream flex justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionHeading title="Our Appeal" subtitle="A Request for Your Support & Dua" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-16 border border-divider bg-wedding-rose/20 relative"
          >
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-wedding-gold/40" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b border-r border-wedding-gold/40" />
            
            <p className="editorial-heading text-2xl md:text-3xl mb-8 opacity-90">
              Assalamu alaykum Warahmatullah.
            </p>
            
            <div className="space-y-6 text-wedding-ink/70 leading-relaxed md:text-lg text-justify font-serif italic">
              <p>
                I'd like to share with you a few of our demands, Muhtaram/ Muhtarama. In order to escape sins and get started a journey of morality by achieving half of our beliefs and preserving the holy nature of our relationship, we have made the decision to begin our post-marital life by following the guidelines defined by Islam, going beyond traditional society and rules.
              </p>
              <p>
                I sincerely hope you will be supportive of our efforts for preserving our beliefs by stepping aside from society. Our permitted relationship will be established through your witness. we would be honored by your presence at our wedding (InshaAllah).
              </p>
              <p className="pt-4 text-center font-bold not-italic label-caps text-wedding-gold">
                Don't forget us in your prayers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events section updated for dark theme */}
      <section className="py-24 md:py-32 bg-wedding-rose">
        <SectionHeading title="Ijab Qabul" />
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-wedding-cream p-8 md:p-20 text-center border border-divider">
            <div className="label-caps mb-6 md:mb-8 text-wedding-gold">24 July, 2026</div>
            <h3 className="editorial-heading text-3xl md:text-5xl mb-6 md:mb-8">Nikkah Ceremony</h3>
            <p className="italic text-wedding-ink/40 mb-10 md:mb-12 text-sm md:text-base">
              A private and modest gathering with close companions to witness our Ijab Qabul.
            </p>
            <div className="space-y-4 mb-10 md:mb-12 text-[10px] md:text-xs tracking-widest uppercase opacity-60">
              <div className="flex items-center justify-center gap-3">
                <Clock className="w-4 h-4 opacity-30" />
                <span>All Day</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-4 h-4 opacity-30" />
                <span>Maritime Museum, Chittagong</span>
              </div>
            </div>
            <a 
              href="https://maps.app.goo.gl/yrY6k7kPxFyQJMJE9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="circular-btn mx-auto group border-wedding-gold/40 hover:scale-105 transition-transform"
            >
              <span className="label-caps text-[9px] group-hover:text-black transition-colors">Map</span>
            </a>
          </div>
        </div>
      </section>

      {/* Dua & Advice Section */}
      <section className="py-24 md:py-32 bg-wedding-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionHeading title="Dua & Wisdom" subtitle="Share your prayers & advice with us" />
          <div className="bg-wedding-rose p-8 md:p-24 shadow-2xl border border-divider">
            <form 
              className="max-w-lg mx-auto space-y-10 md:space-y-12" 
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name') as string;
                const message = formData.get('message') as string;
                const subject = encodeURIComponent(`Dua & Wisdom from ${name}`);
                const body = encodeURIComponent(message);
                window.location.href = `mailto:mahmudulhasanrazin@gmail.com?subject=${subject}&body=${body}`;
              }}
            >
              <div className="text-left space-y-2">
                <label className="label-caps text-[9px] md:text-[10px] text-wedding-gold/60">Your Name</label>
                <input 
                  name="name"
                  type="text" 
                  required
                  className="w-full bg-transparent border-b border-divider py-4 focus:border-wedding-gold transition-colors outline-none text-xl font-serif text-wedding-ink" 
                  placeholder="Enter your name..." 
                />
              </div>
              <div className="text-left space-y-2">
                <label className="label-caps text-[9px] md:text-[10px] text-wedding-gold/60">Your Dua or Advice</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-divider py-4 focus:border-wedding-gold transition-colors outline-none text-xl font-serif text-wedding-ink resize-none" 
                  placeholder="Share a prayer or a piece of wisdom..." 
                />
              </div>
              <div className="pt-8 md:pt-12 text-center">
                <button type="submit" className="circular-btn mx-auto group border-wedding-gold">
                   <span className="label-caps text-[9px] md:text-[10px] group-hover:text-black">Send Dua</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 bg-wedding-rose text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="label-caps text-wedding-gold mb-12 tracking-[1em]">Forever Together</div>
          <h2 className="editorial-heading text-5xl md:text-8xl mb-12 text-white">
            {BRIDE_NAME} <span className="opacity-20 italic">&</span> {GROOM_NAME}
          </h2>
          <div className="w-12 h-px bg-wedding-gold/40 mx-auto mb-12" />
          <p className="text-sm tracking-[0.3em] uppercase opacity-40">
            @ 2026 Razin's project
          </p>
        </div>
      </footer>
    </div>
  );
}
