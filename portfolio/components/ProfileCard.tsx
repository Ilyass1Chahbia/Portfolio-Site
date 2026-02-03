'use client';
import { motion } from 'framer-motion';
import { Flame, Instagram, Twitter, Youtube, Globe, Github, Linkedin, Mail } from 'lucide-react';

export default function ProfileCard() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md border border-white/10 rounded-[2.5rem] p-6 max-w-sm w-full mx-auto md:mx-0 shadow-2xl overflow-hidden relative"
        >
            {/* 1. Image Area (Orange Glow) */}
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-zinc-900 group">
                {/* Placeholder for Profile Image - Using a gradient for now matching the vibe */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-600 to-purple-900 opacity-80 group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    {/* User Icon Placeholder */}
                    <div className="w-32 h-32 rounded-full border-4 border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-white font-bold text-4xl">IC</span>
                    </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full border-2 border-white/20 border-dashed animate-[spin_10s_linear_infinite] will-change-transform"></div>
            </div>

            {/* 2. Content */}
            <div className="text-center relative z-10">
                <h2 className="text-3xl font-bold text-white tracking-tight mb-2">
                    Ilyass Chahbia
                </h2>

                {/* Fire Icon Separator */}
                <div className="flex justify-center my-4">
                    <div className="p-2 bg-orange-500 rounded-full shadow-lg shadow-orange-500/40 text-white">
                        <Flame size={20} fill="currentColor" />
                    </div>
                </div>

                <p className="text-zinc-500 text-sm font-medium leading-relaxed px-2 mb-8">
                    A Software Engineer who has developed countless innovative solutions.
                </p>

                {/* 3. Social Icons */}
                <div className="flex justify-center gap-6">
                    <SocialIcon icon={Github} href="https://github.com/Ilyass1Chahbia" />
                    <SocialIcon icon={Linkedin} href="https://linkedin.com/in/ilyass-chahbia/" />
                    <SocialIcon icon={Mail} href="mailto:ilyasschahbia@gmail.com" />
                    <SocialIcon icon={Globe} href="https://github.com/Ilyass1Chahbia" />
                </div>
            </div>

            {/* Dashed Path Decoration (Simplified) */}
            <svg className="absolute bottom-20 left-0 w-full h-24 -z-0 pointer-events-none opacity-20" viewBox="0 0 100 50">
                <path d="M-10 25 Q 50 50 110 25" fill="none" stroke="orange" strokeWidth="1" strokeDasharray="4 4" />
            </svg>

        </motion.div>
    );
}

function SocialIcon({ icon: Icon, href }: { icon: any, href: string }) {
    return (
        <a href={href} target="_blank" className="text-orange-500 hover:text-orange-600 transition-colors p-2 hover:bg-orange-50 rounded-full">
            <Icon size={20} />
        </a>
    )
}
