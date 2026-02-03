'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight, Layers, LayoutTemplate, Database, Terminal, Gamepad2, Cpu, Network } from 'lucide-react';
import ProfileCard from '@/components/ProfileCard';

export default function Home() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-[90rem] mx-auto flex flex-col md:flex-row gap-12 lg:gap-20 items-start">

      {/* LEFT COLUMN: Profile Card */}
      <div className="w-full md:w-auto md:flex-shrink-0 md:sticky md:top-32 mx-auto md:mx-0 z-20">
        <ProfileCard />
      </div>

      {/* RIGHT COLUMN: Content */}
      <div className="flex-1 w-full space-y-24">

        {/* 1. HERO */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="uppercase font-black text-6xl sm:text-7xl lg:text-9xl tracking-tighter leading-[0.8]">
            <h1 className="text-white block">Software</h1>
            <h1 className="text-transparent stroke-text block" style={{ WebkitTextStroke: '1px #555' }}>Engineer</h1>
          </div>

          <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl font-light leading-relaxed">
            I transform complex problems into efficient code.
            Currently a student at <span className="text-white font-medium">1337 (42 Network)</span>,
            building the bridge between low-level system programming and modern web architecture.
          </p>
        </motion.section>

        {/* 2. STATS ROW (Rotating) */}
        <div className="border-t border-zinc-900 pt-8 min-h-[120px]">
          <RotatingStats />
        </div>

        {/* 3. CAREER / EDUCATION SECTION */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <Cpu className="text-orange-500" />
            Career & Education
          </h2>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] overflow-hidden group transition-all duration-300 hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">1337 Coding School (UM6P)</h3>
                <p className="text-zinc-400 font-medium">Software Engineering Student</p>
              </div>
              <span className="text-zinc-500 font-mono text-sm mt-2 md:mt-0 border border-white/5 px-3 py-1 rounded-full bg-black/20 h-fit">2023 — Present</span>
            </div>
            <p className="relative z-10 text-zinc-300 leading-relaxed mb-6 max-w-2xl">
              Part of the prestigious <strong className="text-white">42 Network</strong>. A completely peer-to-peer, gamified learning environment.
              Deep diving into computer science fundamentals.
            </p>
            <div className="relative z-10 flex flex-wrap gap-3">
              <Badge>Unix/Linux</Badge>
              <Badge>C / C++</Badge>
              <Badge>Algorithms</Badge>
            </div>
          </motion.div>
        </section>

        {/* 4. SELECTED WORK GRID */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <LayoutTemplate className="text-lime-400" />
            Selected Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <ProjectCard
              title="ft_transcendence"
              subtitle="Real-time Pong MMO"
              tags={['NestJS', 'React', 'PostgreSQL']}
              color="text-orange-400"
              gradient="from-orange-500/10"
              border="group-hover:border-orange-500/50"
              hoverColor="group-hover:text-orange-400"
              repoUrl="https://github.com/Ilyass1Chahbia/ft_transcendence"
              icon={<Gamepad2 className="text-orange-400 w-8 h-8" />}
            />

            <ProjectCard
              title="Inception"
              subtitle="Docker Infrastructure"
              tags={['Docker', 'Nginx', 'MariaDB']}
              color="text-blue-400"
              gradient="from-blue-500/10"
              border="group-hover:border-blue-500/50"
              hoverColor="group-hover:text-blue-400"
              repoUrl="https://github.com/Ilyass1Chahbia/Inception"
              icon={<Database className="text-blue-400 w-8 h-8" />}
            />

            <ProjectCard
              title="ft_irc"
              subtitle="Custom IRC Server"
              tags={['C++98', 'Sockets', 'Poll()']}
              color="text-emerald-400"
              gradient="from-emerald-500/10"
              border="group-hover:border-emerald-500/50"
              hoverColor="group-hover:text-emerald-400"
              repoUrl="https://github.com/Ilyass1Chahbia/ft_irc"
              icon={<Network className="text-emerald-400 w-8 h-8" />}
            />

            <ProjectCard
              title="Minishell"
              subtitle="Bash Shell Replica"
              tags={['C', 'Processes', 'Signals']}
              color="text-purple-400"
              gradient="from-purple-500/10"
              border="group-hover:border-purple-500/50"
              hoverColor="group-hover:text-purple-400"
              repoUrl="https://github.com/Ilyass1Chahbia/Minishell"
              icon={<Terminal className="text-purple-400 w-8 h-8" />}
            />

          </div>

          <div className="flex justify-center pt-8">
            <a
              href="https://github.com/Ilyass1Chahbia?tab=repositories"
              target="_blank"
              className="group flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105 shadow-xl shadow-black/20"
            >
              <span className="font-bold text-white text-lg">View Full Portfolio on GitHub</span>
              <ArrowRight size={20} className="text-white group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}

// --- SUBCOMPONENTS ---



function RotatingStats() {
  const [index, setIndex] = useState(0);

  const stats = [
    [
      { value: "+3", label: "Years Coding" },
      { value: "+15", label: "Projects Worked On" },
      { value: "+1,200", label: "Commits Made" }
    ],
    [
      { value: "112", label: "Avg. Project Score" },
      { value: "6+", label: "Languages Used" },
      { value: "10+", label: "Teams Joined" }
    ]
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % stats.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const currentStats = stats[index];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          },
          exit: {
            opacity: 0,
            transition: { duration: 0.2 }
          }
        }}
        className="flex flex-wrap gap-12 sm:gap-24"
      >
        {currentStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } },
              exit: { y: -20, opacity: 0 }
            }}
          >
            <StatItem value={stat.value} label={stat.label} />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

function StatItem({ value, label }: { value: string, label: string }) {
  return (
    <div className="group cursor-default">
      <div className="text-5xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-500 transition-all duration-300">{value}</div>
      <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest max-w-[80px] leading-tight group-hover:text-zinc-400 transition-colors">{label}</div>
    </div>
  )
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 hover:bg-white/10 transition-colors cursor-default">
      {children}
    </span>
  )
}

function ProjectCard({ title, subtitle, tags, color, gradient, border, hoverColor, repoUrl, icon }: { title: string, subtitle: string, tags: string[], color: string, gradient: string, border: string, hoverColor: string, repoUrl: string, icon: any }) {
  return (
    <motion.a
      href={repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5 }}
      className={`relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md border border-white/10 rounded-[2rem] p-8 h-[280px] overflow-hidden flex flex-col justify-between group transition-all duration-300 ${border} hover:shadow-2xl cursor-pointer block`}
    >
      {/* Dynamic Glow Background (Education Style) */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="relative z-10 w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      <div className="relative z-10">
        <h3 className={`text-white font-bold text-3xl mb-1 ${hoverColor} transition-colors duration-300`}>{title}</h3>
        <p className={`font-medium text-lg mb-6 ${color} opacity-80 group-hover:opacity-100 transition-opacity`}>{subtitle}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="px-3 py-1 rounded-lg bg-black/40 border border-white/5 text-zinc-300 text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm group-hover:border-white/10 transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Arrow */}
      <div className="absolute top-8 right-8 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hover:bg-white/20">
        <ArrowRight className="w-4 h-4" />
      </div>
    </motion.a>
  )
}