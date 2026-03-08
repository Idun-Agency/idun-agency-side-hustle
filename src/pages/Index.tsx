import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import IdunLogo from "@/components/IdunLogo";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const Hero = () => (
  <section className="min-h-[85vh] flex items-center">
    <div className="container max-w-5xl py-20">
      <motion.div
        initial="hidden"
        animate="visible"
        custom={0}
        variants={fadeUp}
        className="mb-10"
      >
        <IdunLogo variant="hero" />
      </motion.div>
      <motion.h1
        initial="hidden"
        animate="visible"
        custom={1}
        variants={fadeUp}
        className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-8"
      >
        Making complex
        <br />
        <span className="text-primary">industrial tech</span>
        <br />
        more relatable.
      </motion.h1>
      <motion.p
        initial="hidden"
        animate="visible"
        custom={2}
        variants={fadeUp}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10"
      >
        I'm Carin Lagerstedt — a branding and communications consultant 
        specializing in automotive and industrial B2B. I run Idun Agency on the side 
        of my full-time role because I genuinely enjoy it, and because every 
        engagement makes me sharper at what I do.
      </motion.p>
      <motion.a
        initial="hidden"
        animate="visible"
        custom={3}
        variants={fadeUp}
        href="#work"
        className="inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase border-b-2 border-primary pb-1 hover:gap-4 transition-all duration-300"
      >
        See what I do <ArrowRight className="w-4 h-4" />
      </motion.a>
    </div>
  </section>
);

const About = () => (
  <section className="py-24 bg-card" id="about">
    <div className="container max-w-5xl">
      <div className="grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4">
            Idun Agency AB
          </p>
          <h2 className="font-display text-3xl md:text-4xl mb-6">
            A side project
            <br />
            born from curiosity.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-5 text-muted-foreground leading-relaxed"
        >
          <p>
            Most of my days are spent as CMO at{" "}
            <a href="https://remotivelabs.com" target="_blank" rel="noreferrer" className="text-foreground underline underline-offset-4 decoration-accent hover:decoration-primary transition-colors">
              RemotiveLabs
            </a>
            , helping automotive teams shift left and adopt modern software practices. 
            It's a steep learning curve — and I love every bit of it.
          </p>
          <p>
            One day a week, I consult a few carefully selected brands and topics 
            through Idun Agency. It accelerates my learnings, keeps me sharp, 
            and honestly — I just enjoy the variety. Good things come to those who grit.
          </p>
          <p>
            I'm in the industrial B2B marketing and communications space. My things 
            are content strategies that create thought leadership positions, and 
            solution marketing that makes complicated topics more relatable.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

const services = [
  {
    title: "Positioning & Messaging",
    description:
      "Clarifying what you stand for and how to say it — tailored for technical and niche B2B contexts.",
  },
  {
    title: "Content Strategy",
    description:
      "Building thought leadership positions through content that resonates with engineers and decision-makers alike.",
  },
  {
    title: "Solution Marketing",
    description:
      "Translating complex technical products into clear, compelling narratives that drive engagement.",
  },
  {
    title: "Branding & Identity",
    description:
      "From visual identity to brand voice — creating cohesive brands for industrial tech companies.",
  },
];

const Services = () => (
  <section className="py-24" id="work">
    <div className="container max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display text-3xl md:text-4xl mb-16"
      >
        What I help with.
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-8 rounded-lg bg-card border border-border"
          >
            <h3 className="font-display text-xl mb-3">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {s.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const engagements = [
  {
    name: "Semicon Sweden",
    role: "Communications Lead",
    period: "March 2025 – Present",
    description:
      "Shaping external communication strategy and producing content to position Sweden as a key player in the global semiconductor ecosystem.",
    url: "https://semiconsweden.com",
    accentColor: "#1a3a5c",
    tagline: "Semiconductor Ecosystem",
  },
  {
    name: "Strainlabs",
    role: "Fractional CMO",
    period: "Sep 2022 – Jan 2025",
    description:
      "Led strategic marketing, branding and content production. Supported a smooth handover by coaching the incoming full-time marketing hire.",
    url: "https://strainlabs.com",
    accentColor: "#c0392b",
    tagline: "Smart Bolt Monitoring",
  },
  {
    name: "Ignite Sweden",
    role: "Business Coach",
    period: "Apr 2022 – Present",
    description:
      "Coaching & courses for startups on branding and content marketing to accelerate sales and build thought leadership positions.",
    url: "https://www.ignitesweden.org",
    accentColor: "#a3195b",
    tagline: "Startup Innovation",
  },
];

const Engagements = () => (
  <section className="py-24 bg-card" id="engagements">
    <div className="container max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display text-3xl md:text-4xl mb-16"
      >
        Selected engagements.
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {engagements.map((e, i) => (
          <motion.a
            key={e.name}
            href={e.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="group rounded-lg overflow-hidden border border-border bg-background hover:shadow-md transition-all duration-300"
          >
            <div
              className="h-2"
              style={{ backgroundColor: e.accentColor }}
            />
            <div className="p-6">
              <div className="mb-4">
                <h3 className="font-display text-xl mb-1 group-hover:text-primary transition-colors">
                  {e.name}
                </h3>
                <p
                  className="text-[10px] font-display font-medium tracking-[0.15em] uppercase"
                  style={{ color: e.accentColor }}
                >
                  {e.tagline}
                </p>
              </div>
              <span className="inline-block text-xs font-display font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-muted text-foreground mb-4">
                {e.role}
              </span>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                {e.description}
              </p>
              <p className="text-xs text-muted-foreground font-display tracking-wide">
                {e.period}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="py-24" id="contact">
    <div className="container max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <h2 className="font-display text-3xl md:text-4xl mb-6">
          Let's talk.
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          I take on a limited number of engagements alongside my full-time role. 
          If you think we could be a good fit, I'd love to hear from you.
        </p>
        <div className="space-y-3">
          <a
            href="https://www.linkedin.com/in/carinlagerstedt/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase border-b-2 border-primary pb-1 hover:gap-4 transition-all duration-300"
          >
            Connect on LinkedIn <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <p className="text-xs text-muted-foreground mt-12">
          Idun Agency AB · Malmö, Sweden
        </p>
      </motion.div>
    </div>
  </section>
);

const Nav = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
    <div className="container max-w-5xl flex items-center justify-between h-14">
      <a href="#">
        <IdunLogo />
      </a>
      <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        <a href="#about" className="hover:text-foreground transition-colors">About</a>
        <a href="#work" className="hover:text-foreground transition-colors">Services</a>
        <a href="#engagements" className="hover:text-foreground transition-colors">Engagements</a>
        <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
      </div>
    </div>
  </nav>
);

const Index = () => {
  return (
    <>
      <Nav />
      <main className="pt-14">
        <Hero />
        <About />
        <Services />
        <Engagements />
        <Contact />
      </main>
    </>
  );
};

export default Index;
