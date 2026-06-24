import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, Menu, X, Mail } from "lucide-react";

/* ─── Reveal ───────────────────────────────────────────────────────────────── */
function Reveal({
  children,
  className = "",
  delay = 0,
  y = 24,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Nav ──────────────────────────────────────────────────────────────────── */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F6F2EC]/96 backdrop-blur-sm border-b border-[rgba(30,30,30,0.07)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-8 md:px-14 py-6 flex items-center justify-between">
        <a
          href="#"
          className="font-['Cormorant_Garamond'] text-[1.05rem] tracking-[0.14em] uppercase text-[#1E1E1E] font-medium"
        >
          Samantha Beeny & Co
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-['Inter'] text-[0.73rem] tracking-[0.1em] uppercase text-[#1E1E1E]/60 hover:text-[#5C3B52] transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-['Inter'] text-[0.72rem] tracking-[0.1em] uppercase px-5 py-2.5 border border-[#5C3B52] text-[#5C3B52] hover:bg-[#5C3B52] hover:text-[#F6F2EC] transition-all duration-300"
          >
            Work With Me
          </a>
        </nav>

        <button
          className="md:hidden text-[#1E1E1E]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#F6F2EC] border-t border-[rgba(30,30,30,0.07)] px-8 py-8 flex flex-col gap-6"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-['Inter'] text-sm tracking-widest uppercase text-[#1E1E1E]/65"
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
}

/* ─── Hero ─────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 px-8 md:px-14 max-w-[1320px] mx-auto">
      <div className="grid md:grid-cols-[1fr_380px] gap-14 md:gap-20 items-center">
        {/* Text */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-['Inter'] text-[0.68rem] tracking-[0.22em] uppercase text-[#6B705C] mb-9 flex items-center gap-3"
          >
            <span className="w-7 h-px bg-[#6B705C]" />
            Marketing & Communications Consultant
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
            className="font-['Cormorant_Garamond'] font-light text-[clamp(3rem,7.5vw,6.8rem)] leading-[1.02] tracking-[-0.01em] text-[#1E1E1E]"
          >
            Marketing support
            <br />
            that helps good{" "}
            <em className="italic text-[#5C3B52]">businesses</em>
            <br />
            grow.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="font-['Inter'] font-light text-[1rem] text-[#1E1E1E]/58 mt-9 max-w-[500px] leading-[1.8]"
          >
            I&apos;m Samantha Beeny, a freelance marketing strategist helping businesses
            attract customers through thoughtful marketing, content, social media and
            communications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
            className="flex flex-wrap gap-4 mt-11"
          >
            <a
              href="#contact"
              className="font-['Inter'] text-[0.75rem] tracking-[0.12em] uppercase px-8 py-4 bg-[#5C3B52] text-[#F6F2EC] hover:bg-[#4a2f42] transition-colors duration-300"
            >
              Work With Me
            </a>
            <a
              href="#work"
              className="font-['Inter'] text-[0.75rem] tracking-[0.12em] uppercase px-8 py-4 border border-[rgba(30,30,30,0.22)] text-[#1E1E1E] hover:border-[#5C3B52] hover:text-[#5C3B52] transition-all duration-300 flex items-center gap-2"
            >
              View My Work <ArrowUpRight size={13} />
            </a>
          </motion.div>
        </div>

        {/* Headshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          className="relative"
        >
          <div className="relative aspect-[3/4] bg-[#E4DDD5] overflow-hidden">
            {/* Placeholder for professional headshot */}
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=760&h=1020&fit=crop&auto=format"
              alt="Samantha Beeny, freelance marketing strategist"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/20 via-transparent to-transparent" />
          </div>
          {/* Decorative offset frame */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#5C3B52]/25 -z-10" />
          {/* Small label */}
          <div className="absolute -bottom-10 left-0 font-['Inter'] text-[0.62rem] tracking-[0.15em] uppercase text-[#1E1E1E]/35">
            Samantha Beeny — Founder
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-10 left-8 md:left-14 flex items-center gap-3"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="block w-px h-8 bg-[#1E1E1E]/22"
        />
        <span className="font-['Inter'] text-[0.62rem] tracking-[0.18em] uppercase text-[#1E1E1E]/28">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}

/* ─── Featured Clients ─────────────────────────────────────────────────────── */
const CLIENTS = [
  "Bears Ice Cream",
  "Climb HQ",
  "Global Climbing Standard",
  "Figgis Family Vineyard",
  "Sharp Relations",
  "The Wedding Dolls",
  "CJE Events",
  "Suzi Staden Pilates",
];

function Clients() {
  return (
    <section id="work" className="py-16 border-y border-[rgba(30,30,30,0.09)] bg-[#EDE8E0]/50">
      <div className="max-w-[1320px] mx-auto px-8 md:px-14">
        <Reveal className="mb-10">
          <div className="font-['Inter'] text-[0.65rem] tracking-[0.22em] uppercase text-[#1E1E1E]/38 text-center">
            Trusted by
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {CLIENTS.map((name, i) => (
              <div
                key={name}
                className="flex items-center gap-3 group"
              >
                {i > 0 && (
                  <span className="hidden md:block w-1 h-1 rounded-full bg-[#B7AA9C]" />
                )}
                <span className="font-['Cormorant_Garamond'] text-[1.1rem] font-light tracking-wide text-[#1E1E1E]/55 group-hover:text-[#5C3B52] transition-colors duration-300 whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── About ─────────────────────────────────────────────────────────────────── */
function About() {
  return (
    <section id="about" className="py-28 px-8 md:px-14 bg-[#1E1E1E]">
      <div className="max-w-[1320px] mx-auto grid md:grid-cols-[1fr_1.55fr] gap-16 md:gap-24 items-start">
        {/* Left */}
        <Reveal>
          <div className="font-['Inter'] text-[0.68rem] tracking-[0.2em] uppercase text-[#B7AA9C]/60 mb-6 border-t border-[#F6F2EC]/10 pt-7">
            About
          </div>
          <div className="font-['Cormorant_Garamond'] text-[clamp(1.8rem,3vw,2.6rem)] font-light text-[#F6F2EC] leading-[1.15]">
            A strategic marketing partner —
            <br />
            <em className="italic text-[#B7AA9C]">not a social media manager.</em>
          </div>

          <div className="mt-10 space-y-3">
            {[
              "Food & drink",
              "Hospitality & visitor attractions",
              "Climbing industry",
              "Weddings & events",
              "Founder-led & startup brands",
            ].map((s) => (
              <div key={s} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5C3B52] flex-shrink-0" />
                <span className="font-['Inter'] text-[0.78rem] tracking-wide text-[#F6F2EC]/50">{s}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Right */}
        <div className="flex flex-col gap-8 pt-0 md:pt-14">
          <Reveal>
            <p className="font-['Inter'] text-[0.94rem] text-[#F6F2EC]/60 font-light leading-[1.9]">
              I sit in an interesting space. I&apos;m not purely a social media manager, a PR
              consultant or a marketing strategist — I&apos;m a blend of all three. Most clients
              come to me knowing they need more visibility, more customers or more growth, but
              not always sure where to focus. My job is to help them figure that out, then make
              it happen.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-['Inter'] text-[0.94rem] text-[#F6F2EC]/60 font-light leading-[1.9]">
              Before going freelance I built my own business — The Pretty Prep Studios — from
              concept to award-winning brand. That experience gives me a perspective most
              marketers don&apos;t have. I know what it actually feels like to be the person
              responsible for making a business work, which means I approach client work
              commercially, not just creatively.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-['Inter'] text-[0.94rem] text-[#F6F2EC]/60 font-light leading-[1.9]">
              I don&apos;t care about going viral. I care about reaching the right people and making
              them want to buy. Whether that&apos;s through social media, email, partnerships,
              content or PR — the question I always start with is: what are we actually trying
              to achieve?
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="border-t border-[#F6F2EC]/10 pt-7 mt-2">
              <div className="font-['Inter'] text-[0.6rem] tracking-[0.18em] uppercase text-[#B7AA9C]/50 mb-3">
                The Studio
              </div>
              <p className="font-['Inter'] text-[0.84rem] text-[#F6F2EC]/45 font-light leading-[1.8]">
                I lead the strategy and planning side of every project. Chelsea, my brilliant
                collaborator, helps bring it all to life — so you get the thinking{" "}
                <em className="italic text-[#B7AA9C]/60">and</em> the doing, without anything
                falling through the cracks.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <a
              href="#contact"
              className="font-['Inter'] text-[0.74rem] tracking-[0.12em] uppercase text-[#F6F2EC]/50 hover:text-[#F6F2EC] transition-colors duration-300 flex items-center gap-2 w-fit mt-2 border-b border-[#F6F2EC]/20 hover:border-[#F6F2EC]/50 pb-1"
            >
              Let&apos;s work together <ArrowUpRight size={13} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Services ─────────────────────────────────────────────────────────────── */
const SERVICES = [
  {
    num: "01",
    title: "Marketing Planning",
    body: "Not sure where to focus your marketing efforts? I can review what you're currently doing and create a practical plan that shows what's working, what's missing and where your time and budget will have the biggest impact. Whether that's social media, email marketing, advertising, partnerships, website improvements or content creation, you'll walk away with a clear roadmap of what to do next.",
    tag: "Strategy",
  },
  {
    num: "02",
    title: "Social Media",
    body: "I create social media content that helps businesses stay visible and build relationships with the people most likely to buy from them. I'm not interested in chasing viral videos for the sake of it. I'd rather help the right people discover your business and become customers.",
    tag: "Content",
  },
  {
    num: "03",
    title: "Growing Your Audience",
    body: "Having thousands of followers means very little if they're never going to buy from you. I use collaborations, partnerships and influencer marketing to help businesses reach new audiences and attract followers who are genuinely interested in what they offer.",
    tag: "Growth",
  },
  {
    num: "04",
    title: "Meta Advertising",
    body: "Facebook and Instagram ads can be incredibly powerful when they're set up correctly. I use tracking tools and performance data to understand what's working, what's not and where your money is generating the best return.",
    tag: "Paid Media",
  },
  {
    num: "05",
    title: "Website Updates",
    body: "Your website is often the first impression people have of your business. I can help keep it up to date, easy to navigate and focused on turning visitors into enquiries or sales. Whether it's WordPress, Wix or GoDaddy, I can usually jump in and help.",
    tag: "Digital",
  },
  {
    num: "06",
    title: "SEO Blog Writing",
    body: "When people search online for answers, you want your business to be one of the options they find. I write useful blog content that helps improve your visibility and brings more people to your website.",
    tag: "Content",
  },
  {
    num: "07",
    title: "Email Marketing",
    body: "Social media is great, but you don't own your followers. Your email list belongs to you. I create newsletters and campaigns that keep your business front of mind, share news and offers and encourage customers to come back.",
    tag: "Email",
  },
  {
    num: "08",
    title: "Email Automations",
    body: "Sometimes customers need a few touchpoints before they're ready to buy. Automated email journeys can welcome new customers, follow up on enquiries, nurture leads and generate sales while you focus on running your business.",
    tag: "Automation",
  },
];

function Services() {
  return (
    <section id="services" className="py-28 px-8 md:px-14 max-w-[1320px] mx-auto">
      <Reveal className="border-t border-[rgba(30,30,30,0.1)] pt-8 mb-16">
        <div className="font-['Inter'] text-[0.68rem] tracking-[0.22em] uppercase text-[#6B705C] mb-4">
          What I Do
        </div>
        <h2 className="font-['Cormorant_Garamond'] font-light text-[clamp(2.4rem,5vw,4rem)] leading-none text-[#1E1E1E]">
          Services
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-px bg-[rgba(30,30,30,0.09)]">
        {SERVICES.map((s, i) => (
          <Reveal key={s.num} delay={i * 0.05}>
            <div className="bg-[#F6F2EC] p-9 md:p-10 hover:bg-[#EDE8E0]/70 transition-colors duration-300 h-full">
              <div className="flex items-center gap-4 mb-5">
                <span className="font-['Cormorant_Garamond'] text-[0.88rem] text-[#5C3B52]/50">
                  {s.num}
                </span>
                <span className="font-['Inter'] text-[0.6rem] tracking-[0.14em] uppercase px-2.5 py-1 border border-[rgba(30,30,30,0.15)] text-[#1E1E1E]/45">
                  {s.tag}
                </span>
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-[1.7rem] md:text-[2rem] font-light leading-[1.1] text-[#1E1E1E] mb-4">
                {s.title}
              </h3>
              <p className="font-['Inter'] text-[0.84rem] font-light leading-[1.85] text-[#1E1E1E]/55">
                {s.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ─── Testimonials ──────────────────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    quote:
      "Samantha has a rare ability to understand a business on a deep level and translate that into marketing that actually works. She's become an essential partner for us.",
    name: "James Hartley",
    role: "Founder, Figgis Family Vineyard",
  },
  {
    quote:
      "Working with Samantha transformed how we communicate with our customers. She brought clarity, strategy and a creative confidence we hadn't been able to find anywhere else.",
    name: "Rachel Moore",
    role: "Director, Global Climbing Standard",
  },
  {
    quote:
      "More than a marketing consultant — a genuine strategic partner. Our social presence, campaigns and overall brand story are significantly stronger for it.",
    name: "Tom & Abi Barker",
    role: "Co-founders, Bears Ice Cream",
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-28 px-8 md:px-14 bg-[#5C3B52]">
      <div className="max-w-[1320px] mx-auto">
        <Reveal className="border-t border-[#F6F2EC]/12 pt-8 mb-16">
          <div className="font-['Inter'] text-[0.68rem] tracking-[0.22em] uppercase text-[#F6F2EC]/45 mb-4">
            Kind Words
          </div>
          <h2 className="font-['Cormorant_Garamond'] font-light text-[clamp(2rem,4vw,3.2rem)] text-[#F6F2EC] leading-none">
            What clients say
          </h2>
        </Reveal>

        <div className="relative" style={{ minHeight: 260 }}>
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{
                opacity: active === i ? 1 : 0,
                y: active === i ? 0 : 14,
                pointerEvents: active === i ? "auto" : "none",
              }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className={active === i ? "relative" : "absolute inset-0"}
            >
              <blockquote className="font-['Cormorant_Garamond'] font-light text-[clamp(1.5rem,3.2vw,2.5rem)] text-[#F6F2EC] leading-[1.35] max-w-[820px] mb-9">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div>
                <div className="font-['Cormorant_Garamond'] text-[1rem] italic text-[#F6F2EC]/75">
                  {t.name}
                </div>
                <div className="font-['Inter'] text-[0.67rem] tracking-[0.12em] uppercase text-[#F6F2EC]/40 mt-1">
                  {t.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-12">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`h-px transition-all duration-400 ${
                active === i
                  ? "w-10 bg-[#F6F2EC]"
                  : "w-4 bg-[#F6F2EC]/28 hover:bg-[#F6F2EC]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ────────────────────────────────────────────────────────────────── */
function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-28 px-8 md:px-14 max-w-[1320px] mx-auto">
      <div className="grid md:grid-cols-[1fr_1.3fr] gap-16 md:gap-28">
        {/* Left */}
        <Reveal>
          <div className="font-['Inter'] text-[0.68rem] tracking-[0.22em] uppercase text-[#6B705C] mb-6 border-t border-[rgba(30,30,30,0.1)] pt-8">
            Get In Touch
          </div>
          <h2 className="font-['Cormorant_Garamond'] font-light text-[clamp(2.6rem,5vw,4.4rem)] leading-[1.02] text-[#1E1E1E]">
            Let&apos;s talk about{" "}
            <em className="italic text-[#5C3B52]">growing</em>{" "}
            your business.
          </h2>
          <p className="font-['Inter'] text-[0.88rem] text-[#1E1E1E]/55 font-light leading-[1.85] mt-7 max-w-[360px]">
            Whether you have a specific project in mind or just want to explore what&apos;s
            possible, I&apos;d love to hear from you.
          </p>

          <div className="mt-12 space-y-6">
            <div>
              <div className="font-['Inter'] text-[0.6rem] tracking-[0.16em] uppercase text-[#1E1E1E]/32 mb-1.5">
                Email
              </div>
              <a
                href="mailto:info@samanthabeeny.co.uk"
                className="font-['Cormorant_Garamond'] text-[1.15rem] text-[#1E1E1E] hover:text-[#5C3B52] transition-colors duration-300 flex items-center gap-2"
              >
                <Mail size={15} className="text-[#5C3B52]" />
                info@samanthabeeny.co.uk
              </a>
            </div>
            <div>
              <div className="font-['Inter'] text-[0.6rem] tracking-[0.16em] uppercase text-[#1E1E1E]/32 mb-1.5">
                Based
              </div>
              <div className="font-['Cormorant_Garamond'] text-[1.15rem] text-[#1E1E1E]">
                UK — working with businesses everywhere
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right — Form */}
        <Reveal delay={0.15} className="md:pt-16">
          {sent ? (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col justify-center min-h-[360px]"
            >
              <div className="font-['Cormorant_Garamond'] text-[3.5rem] font-light text-[#5C3B52] mb-5 leading-none">
                Thank you.
              </div>
              <p className="font-['Inter'] text-[0.86rem] text-[#1E1E1E]/55 leading-relaxed max-w-[340px]">
                Your message has been received. I&apos;ll be in touch shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-7">
              {[
                { id: "name", label: "Your Name", type: "text", placeholder: "First and last name" },
                { id: "email", label: "Email Address", type: "email", placeholder: "Where can I reach you?" },
                { id: "business", label: "Business Name", type: "text", placeholder: "What's your business called?" },
              ].map((f) => (
                <div key={f.id}>
                  <label className="font-['Inter'] text-[0.62rem] tracking-[0.16em] uppercase text-[#1E1E1E]/42 block mb-2.5">
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    required={f.id !== "business"}
                    placeholder={f.placeholder}
                    value={form[f.id as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                    className="w-full bg-transparent border-b border-[rgba(30,30,30,0.18)] focus:border-[#5C3B52] outline-none py-3 font-['Inter'] text-[0.88rem] text-[#1E1E1E] placeholder:text-[#1E1E1E]/22 transition-colors duration-300"
                  />
                </div>
              ))}
              <div>
                <label className="font-['Inter'] text-[0.62rem] tracking-[0.16em] uppercase text-[#1E1E1E]/42 block mb-2.5">
                  How can I help?
                </label>
                <textarea
                  required
                  placeholder="Tell me a bit about your business and what you're looking for help with."
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-[rgba(30,30,30,0.18)] focus:border-[#5C3B52] outline-none py-3 font-['Inter'] text-[0.88rem] text-[#1E1E1E] placeholder:text-[#1E1E1E]/22 transition-colors duration-300 resize-none"
                />
              </div>
              <button
                type="submit"
                className="mt-1 font-['Inter'] text-[0.74rem] tracking-[0.12em] uppercase px-9 py-4 bg-[#1E1E1E] text-[#F6F2EC] hover:bg-[#5C3B52] transition-colors duration-400 w-fit"
              >
                Send Message
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="px-8 md:px-14 py-10 border-t border-[rgba(30,30,30,0.09)]">
      <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div className="font-['Cormorant_Garamond'] text-[0.9rem] tracking-[0.12em] uppercase text-[#1E1E1E]/45">
          Samantha Beeny & Co
        </div>
        <div className="flex items-center gap-8">
          {["Instagram", "LinkedIn"].map((s) => (
            <a
              key={s}
              href="#"
              className="font-['Inter'] text-[0.65rem] tracking-[0.12em] uppercase text-[#1E1E1E]/38 hover:text-[#5C3B52] transition-colors duration-300"
            >
              {s}
            </a>
          ))}
          <a
            href="mailto:info@samanthabeeny.co.uk"
            className="font-['Inter'] text-[0.65rem] tracking-[0.12em] uppercase text-[#1E1E1E]/38 hover:text-[#5C3B52] transition-colors duration-300"
          >
            info@samanthabeeny.co.uk
          </a>
        </div>
        <div className="font-['Inter'] text-[0.65rem] text-[#1E1E1E]/28 tracking-wide">
          © 2025 Samantha Beeny & Co
        </div>
      </div>
    </footer>
  );
}

/* ─── App ────────────────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <div className="bg-[#F6F2EC] min-h-screen overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Clients />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
