'use client';
import Link from 'next/link';
import { Home, FolderGit2, Mail, Wrench, PenTool } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

const navItems = [
    { path: '/', name: 'Home', icon: Home },
    { path: '/projects', name: 'Work', icon: FolderGit2 },
    { path: '/contact', name: 'Contact', icon: Mail },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <nav className="flex items-center gap-1 px-2 py-2 rounded-full border border-white/5 bg-[#1a1a1a]/80 backdrop-blur-xl shadow-2xl">
                {navItems.map((item) => {
                    const isActive = pathname === item.path;
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={clsx(
                                'relative p-3 rounded-full transition-all duration-300 hover:bg-white/10 group',
                                isActive ? 'text-white bg-white/10' : 'text-zinc-500'
                            )}
                        >
                            <Icon size={18} strokeWidth={2} />
                            {/* Tooltip */}
                            <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-[10px] font-medium text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                {item.name}
                            </span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}