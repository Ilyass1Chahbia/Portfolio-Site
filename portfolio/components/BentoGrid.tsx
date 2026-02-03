'use client'; // Required for animations
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Container, Github } from 'lucide-react';

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
      
      {/* CARD 1: ft_transcendence (Large) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg hover:border-teal-500/50 transition duration-500"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent z-10" />
        {/* Replace with your actual Image/GIF component */}
        <div className="absolute inset-0 bg-gray-800 group-hover:scale-105 transition duration-700" /> 
        
        <div className="relative z-20 p-8 h-full flex flex-col justify-end">
           <div className="flex gap-2 mb-3">
              <span className="px-3 py-1 text-xs font-mono bg-teal-500/20 text-teal-300 rounded-full">TypeScript</span>
              <span className="px-3 py-1 text-xs font-mono bg-purple-500/20 text-purple-300 rounded-full">WebSockets</span>
           </div>
           <h3 className="text-3xl font-bold text-white mb-2">ft_transcendence</h3>
           <p className="text-gray-300 mb-4">Real-time multiplayer Pong platform.</p>
        </div>
      </motion.div>

      {/* CARD 2: Inception (Tall) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg hover:border-blue-500/50 transition duration-500 p-8 flex flex-col"
      >
        <Container className="w-12 h-12 text-blue-400 mb-auto" />
        <h3 className="text-2xl font-bold text-white mb-2">Inception</h3>
        <p className="text-sm text-gray-400">Docker Orchestration System.</p>
      </motion.div>

      {/* CARD 3: ft_irc (Wide) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="md:col-span-1 md:row-span-1 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 hover:border-orange-500/50 transition duration-500"
      >
         <Terminal className="w-8 h-8 text-orange-400 mb-4" />
         <h3 className="text-xl font-bold text-white">ft_irc</h3>
         <p className="text-xs text-gray-400">C++98 IRC Protocol</p>
      </motion.div>

       {/* CARD 4: GitHub Stats */}
       <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="md:col-span-1 md:row-span-1 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 flex flex-col justify-center items-center hover:border-green-500/50 transition duration-500"
      >
        <div className="text-4xl font-bold text-white">500+</div>
        <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">Commits</div>
      </motion.div>

    </div>
  );
}