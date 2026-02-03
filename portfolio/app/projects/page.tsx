'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Github, Clock, FileCode, Trophy, Activity, GitCommit, GitBranch } from 'lucide-react';
import Link from 'next/link';

// --- DATA ---
// --- DATA ---
const projects = [
    {
        title: "ft_transcendence",
        description: "A full-scale online 3D Pong tournament platform. The ultimate final project of the common core curriculum at 42. Features real-time multiplayer gaming, chat, friends system, 2FA, and extensive leaderboards.",
        tech: ["NestJS", "React", "PostgreSQL", "Socket.io", "Docker", "OAuth2"],
        stats: {
            timeSpent: 220, // Hours
            score: 125, // Bonus score
            loc: "15,000+",
            commits: 432
        },
        difficulty: 10, // Out of 10
        color: "orange",
        focus: "Full Stack Architecture",
        repo: "https://github.com/Ilyass1Chahbia/ft_transcendence"
    },
    {
        title: "Inception",
        description: "System Administration and DevOps deep dive. Setting up a complete web infrastructure using Docker Compose. Created a custom network of NGINX, WordPress, and MariaDB containers, all running on a strict Alpine Linux environment.",
        tech: ["Docker", "Nginx", "MariaDB", "WordPress", "Alpine Linux", "Bash"],
        stats: {
            timeSpent: 85, // Hours
            score: 100, // Perfect score
            loc: "Config",
            commits: 56
        },
        difficulty: 7,
        color: "blue",
        focus: "DevOps & Infrastructure",
        repo: "https://github.com/Ilyass1Chahbia/Inception"
    },
    {
        title: "ft_irc",
        description: "Recreating the Internet Relay Chat protocol from scratch in C++98. A strict networking challenge requiring non-blocking I/O, I/O multiplexing (poll), and robust client/channel management without any external libraries.",
        tech: ["C++98", "Sockets API", "Poll()", "Network Protocols"],
        stats: {
            timeSpent: 120,
            score: 125,
            loc: "3,500+",
            commits: 180
        },
        difficulty: 9,
        color: "emerald",
        focus: "Low-Level Networking",
        repo: "https://github.com/Ilyass1Chahbia/ft_irc"
    },
    {
        title: "Minishell",
        description: "As creating a shell. The rite of passage for every C programmer. Implemented a functional bash clone with parsing, pipes, redirections, signals, and environment variable management. A true test of process control.",
        tech: ["C", "Make", "Bash", "Unix Signals", "Processes"],
        stats: {
            timeSpent: 180,
            score: 101,
            loc: "4,200+",
            commits: 245
        },
        difficulty: 9,
        color: "purple",
        focus: "OS Internals",
        repo: "https://github.com/Ilyass1Chahbia/Minishell"
    },
    {
        title: "Philosophers",
        description: "Solving the Dining Philosophers problem. A classic synchronization challenge involving threads, mutexes, and avoiding deadlocks/race conditions. Demonstrates mastery of concurrent programming.",
        tech: ["C", "Pthreads", "Mutexes", "Unix Time"],
        stats: {
            timeSpent: 45,
            score: 100,
            loc: "800+",
            commits: 45
        },
        difficulty: 6,
        color: "pink",
        focus: "Concurrent Programming",
        repo: "https://github.com/Ilyass1Chahbia/Philosophers"
    },
    {
        title: "Cub3D",
        description: "My first Raycaster. Creating a 3D game engine using the simplistic Raycasting technique (Wolfenstein 3D style). Handles textures, sprites, and basic player movement in a C environment.",
        tech: ["C", "MiniLibX", "Raycasting", "Math"],
        stats: {
            timeSpent: 90,
            score: 120,
            loc: "2,100+",
            commits: 110
        },
        difficulty: 8,
        color: "red",
        focus: "Graphics Engine",
        repo: "https://github.com/Ilyass1Chahbia/Cub3D"
    }
];

export default function ProjectsPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">

            {/* Header */}
            <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-6">
                <div className="space-y-4">
                    <Link href="/" className="inline-flex items-center text-zinc-500 hover:text-white transition-colors gap-2 text-sm font-medium mb-4 group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-white"
                    >
                        Project <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px #555' }}>Archive</span>
                    </motion.h1>
                    <p className="text-zinc-400 max-w-xl text-lg">
                        A detailed breakdown of my engineering journey at 1337.
                        From low-level algorithms to scalable web architecture.
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="text-right hidden md:block">
                        <div className="text-3xl font-bold text-white">23</div>
                        <div className="text-xs uppercase tracking-widest text-zinc-500">Total Repos</div>
                    </div>
                    <div className="h-12 w-[1px] bg-zinc-800 hidden md:block"></div>
                    <div className="text-right hidden md:block">
                        <div className="text-3xl font-bold text-orange-500">Top 1%</div>
                        <div className="text-xs uppercase tracking-widest text-zinc-500">Rank</div>
                    </div>
                </div>
            </div>

            {/* Project List */}
            <div className="space-y-12">
                {projects.map((project, index) => (
                    <ProjectDetailCard key={project.title} project={project} index={index} />
                ))}
            </div>

        </div>
    )
}

function ProjectDetailCard({ project, index }: { project: any, index: number }) {
    // Map color names to tailwind classes
    const colors: any = {
        orange: "text-orange-400 border-orange-500/20 shadow-orange-500/10 from-orange-500/20 bg-orange-500",
        blue: "text-blue-400 border-blue-500/20 shadow-blue-500/10 from-blue-500/20 bg-blue-500",
        emerald: "text-emerald-400 border-emerald-500/20 shadow-emerald-500/10 from-emerald-500/20 bg-emerald-500",
        purple: "text-purple-400 border-purple-500/20 shadow-purple-500/10 from-purple-500/20 bg-purple-500",
        pink: "text-pink-400 border-pink-500/20 shadow-pink-500/10 from-pink-500/20 bg-pink-500",
        red: "text-red-400 border-red-500/20 shadow-red-500/10 from-red-500/20 bg-red-500",
    };

    const theme = colors[project.color];
    const borderClass = theme.split(" ")[1];
    const shadowClass = theme.split(" ")[2];
    const gradientClass = theme.split(" ")[3];
    const bgClass = theme.split(" ")[4];
    const textClass = theme.split(" ")[0];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`group relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-opacity-50 transition-all duration-500 ${borderClass} hover:shadow-2xl ${shadowClass}`}
        >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-r ${gradientClass} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

            <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 p-8 lg:p-12">

                {/* LEFT: Info */}
                <div className="flex-1 space-y-8">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-4xl font-black text-white">{project.title}</h2>
                            <a href={project.repo} target="_blank" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white border border-white/10">
                                <Github size={20} />
                            </a>
                        </div>
                        <p className="text-zinc-400 text-lg leading-relaxed">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t: string) => (
                            <span key={t} className="px-3 py-1 bg-black/30 border border-white/5 rounded-lg text-xs font-bold text-zinc-300 uppercase tracking-wider backdrop-blur-md">
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* STATS GRID */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/5">
                        <div className="space-y-1">
                            <div className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-2">
                                <Activity size={14} /> Time Spent
                            </div>
                            <div className="text-2xl font-bold text-white">{project.stats.timeSpent}h</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-2">
                                <Trophy size={14} /> Score
                            </div>
                            <div className={`text-2xl font-bold ${textClass}`}>{project.stats.score}/100</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-2">
                                <FileCode size={14} /> LOC
                            </div>
                            <div className="text-2xl font-bold text-white">{project.stats.loc}</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-2">
                                <GitCommit size={14} /> Commits
                            </div>
                            <div className="text-2xl font-bold text-white">{project.stats.commits}</div>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Visual Graphs */}
                <div className="w-full lg:w-80 flex-shrink-0 flex flex-col justify-center space-y-8 bg-black/20 p-6 rounded-2xl border border-white/5">

                    {/* Time Graph */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm font-medium">
                            <span className="text-zinc-400">Est. Time</span>
                            <span className="text-white">{project.stats.timeSpent} Hours</span>
                        </div>
                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${Math.min(project.stats.timeSpent / 2.5, 100)}%` }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className={`h-full rounded-full ${bgClass}`}
                            />
                        </div>
                        <p className="text-xs text-zinc-600 pt-1">Based on rigorous 42 curriculum estimates</p>
                    </div>

                    {/* Complexity Graph */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm font-medium">
                            <span className="text-zinc-400">Complexity</span>
                            <span className={`${textClass}`}>{project.difficulty}/10</span>
                        </div>
                        <div className="flex gap-1 h-2">
                            {[...Array(10)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`flex-1 rounded-sm ${i < project.difficulty ? bgClass : 'bg-white/5'}`}
                                ></div>
                            ))}
                        </div>
                    </div>

                    {/* Fun Badge */}
                    <div className={`mt-auto p-4 rounded-xl border border-white/5 bg-white/5 text-center`}>
                        <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${textClass}`}>Primary Focus</div>
                        <div className="text-white font-bold">
                            {project.focus}
                        </div>
                    </div>

                </div>

            </div>
        </motion.div>
    )
}