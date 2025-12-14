import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, type: "spring", stiffness: 80 },
  }),
};

const staggerParent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// ✅ FIXED COUNT UP COMPONENT
function CountUp({ end, duration = 1800 }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref.current) return; // IMPORTANT FIX TO AVOID ERRORS

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          let start = 0;
          const increment = end / (duration / 16.6);

          const counter = () => {
            start += increment;

            if (start < end) {
              setValue(Math.round(start * 10) / 10);
              requestAnimationFrame(counter);
            } else {
              setValue(end);
            }
          };

          counter();
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{value}</span>;
}

export default function AboutPage() {
  return (
    
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-white text-slate-900">
      

      <Helmet>
        <title>About — Praxire</title>
        <meta
          name="description"
          content="Praxire — software-first product studio. Founders: Vishal & Mohamed. We build delightful web & mobile experiences."
        />
      </Helmet>
      <Navbar/>

      {/* Animated Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <svg
          className="absolute left-[-10%] top-0 w-[1200px] h-[700px] opacity-20"
          viewBox="0 0 800 600"
          fill="none"
        >
          <motion.circle
            cx="120"
            cy="120"
            r="220"
            fill="#6E42C1"
            initial={{ r: 160 }}
            animate={{ r: 240 }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.ellipse
            cx="680"
            cy="420"
            rx="220"
            ry="140"
            fill="#8A63E6"
            initial={{ rx: 160 }}
            animate={{ rx: 240 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </svg>
      </motion.div>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-20">
        {/* Hero */}
        <section className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerParent}>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-extrabold leading-tight"
            >
              We build software that moves people — and businesses.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg leading-relaxed text-slate-600"
            >
              Praxire is a product-first software studio founded by Vishal and
              Mohamed. We design, build and scale digital products using modern
              tools and a human-centered engineering process.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#6e42c1] hover:bg-[#5b34aa] text-white px-5 py-3 rounded-2xl shadow-lg"
              >
                Work with us
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-3 border border-slate-200 px-5 py-3 rounded-2xl text-slate-700"
              >
                Our Services
              </a>
            </motion.div>

            {/* Number Animation */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 grid grid-cols-3 gap-4 text-center"
            >
              <div>
                <div className="text-2xl font-bold">
                  <CountUp end={4} />+
                </div>
                <div className="text-sm text-slate-500">Projects delivered</div>
              </div>

              <div>
                <div className="text-2xl font-bold">
                  <CountUp end={5} />+
                </div>
                <div className="text-sm text-slate-500">Team members</div>
              </div>

              <div>
                <div className="text-2xl font-bold">
                  <CountUp end={4.8} />
                  /5
                </div>
                <div className="text-sm text-slate-500">Avg client rating</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl bg-white/70 backdrop-blur-md p-6 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6e42c1] to-[#8a63e6] flex items-center justify-center text-white font-bold text-xl">
                  P
                </div>
                <div>
                  <div className="font-semibold">Praxire</div>
                  <div className="text-sm text-slate-500">
                    Software Product Studio
                  </div>
                </div>
              </div>

              <div className="mt-6 text-sm text-slate-600">
                We ship clean code, delightful UI and real business outcomes.
              </div>
            </div>
          </motion.div>
        </section>

        {/* Mission */}
        <section className="mt-20 grid lg:grid-cols-3 gap-8 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerParent}
            className="lg:col-span-2"
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-semibold">
              Our mission
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-slate-600">
              Build modern digital products that solve real problems with
              engineering excellence and human-centered design.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-2xl shadow">
                <div className="text-lg font-semibold">User-first design</div>
                <div className="mt-2 text-sm text-slate-500">
                  Every feature is intentional and tested with users.
                </div>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow">
                <div className="text-lg font-semibold">Clean Engineering</div>
                <div className="mt-2 text-sm text-slate-500">
                  Scalable, secure & maintainable architecture.
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-md"
          >
            <div className="text-sm text-slate-500">What we value</div>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>Clarity over complexity</li>
              <li>Fast iteration</li>
              <li>Transparency & respect</li>
              <li>Long-term partnerships</li>
            </ul>
          </motion.div>
        </section>

        {/* Services */}
        <section id="services" className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xl font-semibold"
          >
            What we do
          </motion.h3>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerParent}
            className="mt-6 grid md:grid-cols-3 gap-6"
          >
            {[
              { title: "Product Design", desc: "UX, UI, Research & Prototyping" },
              { title: "Web Apps", desc: "React, Next.js, Node.js" },
              { title: "Mobile Apps", desc: "Flutter, React Native" },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeInUp}
                custom={i + 1}
                className="p-6 bg-white rounded-2xl shadow hover:scale-[1.02] transition-transform"
              >
                <div className="text-lg font-semibold">{s.title}</div>
                <div className="mt-2 text-sm text-slate-500">{s.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Founders */}
        <section className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xl font-semibold"
          >
            Founders
          </motion.h3>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerParent}
            className="mt-6 grid sm:grid-cols-2 gap-6"
          >
            {[
              { name: "Vishal", role: "Co-Founder", bio: "Product & Frontend Lead" },
              { name: "Mohamed", role: "Co-Founder", bio: "Engineering Lead & Strategist" },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeInUp}
                custom={i + 1}
                className="p-6 bg-white rounded-2xl shadow flex gap-4 items-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6e42c1] to-[#8a63e6] flex items-center justify-center text-white font-bold text-lg">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                  <div className="mt-2 text-sm text-slate-600">{t.bio}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
    </div>
  );
}
