'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Send, Mail, MapPin, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    // --- CONFIGURATION ---
    const SERVICE_ID = 'service_d0m4577';
    const TEMPLATE_ID = 'template_psg7yk8';
    const AUTO_REPLY_TEMPLATE_ID = 'template_0a7evqm';
    const PUBLIC_KEY = 'YrFznOiMfvGPWMNd1';

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setStatus('sending');

        // 1. Send Admin Notification
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(() => {
                console.log('Admin notification sent.');
                // 2. Send Auto-Reply
                return emailjs.sendForm(SERVICE_ID, AUTO_REPLY_TEMPLATE_ID, formRef.current!, PUBLIC_KEY);
            })
            .then(() => {
                console.log('Auto-reply sent.');
                setStatus('success');
                if (formRef.current) formRef.current.reset();
                setTimeout(() => setStatus('idle'), 5000);
            })
            .catch((error) => {
                console.error('Email sending failed. Details:', JSON.stringify(error));
                // Provide visual feedback even if detail is missing
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            });
    };

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24">

            {/* LEFT: Contact Info */}
            <div className="md:w-1/3 space-y-8">
                <div className="space-y-4">
                    <Link href="/" className="inline-flex items-center text-zinc-500 hover:text-white transition-colors gap-2 text-sm font-medium mb-4 group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-black text-white"
                    >
                        Let's <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px #555' }}>Talk</span>
                    </motion.h1>
                    <p className="text-zinc-400 text-lg leading-relaxed">
                        Have a project in mind or just want to discuss the latest tech?
                        I'm always open to new opportunities and collaborations.
                    </p>
                </div>

                <div className="space-y-6 pt-8 border-t border-white/5">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-full border border-white/10 text-orange-400">
                            <Mail size={20} />
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-lg">Email</h3>
                            <p className="text-zinc-400">ilyasschahbia@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-full border border-white/10 text-lime-400">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-lg">Location</h3>
                            <p className="text-zinc-400">Marrakech, Morocco</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT: Form */}
            <div className="flex-1">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden"
                >
                    {/* Background Blob */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

                    <form ref={formRef} onSubmit={sendEmail} className="space-y-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="user_name" className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    id="user_name"
                                    required
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all placeholder:text-zinc-600"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="user_email" className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    id="user_email"
                                    required
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all placeholder:text-zinc-600"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                required
                                rows={6}
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all placeholder:text-zinc-600 resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending' || status === 'success'}
                            className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${status === 'success' ? 'bg-green-500 text-white' :
                                status === 'error' ? 'bg-red-500 text-white' :
                                    'bg-white text-black hover:bg-zinc-200'
                                }`}
                        >
                            {status === 'idle' && (
                                <>Send Message <Send size={18} /></>
                            )}
                            {status === 'sending' && (
                                <><Loader2 size={18} className="animate-spin" /> Sending...</>
                            )}
                            {status === 'success' && (
                                <><CheckCircle2 size={18} /> Message Sent!</>
                            )}
                            {status === 'error' && (
                                <><AlertCircle size={18} /> Error. Try Again.</>
                            )}
                        </button>
                    </form>

                </motion.div>
            </div>

        </div>
    )
}
