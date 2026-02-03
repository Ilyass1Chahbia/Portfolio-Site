'use client';

import { useMotionValue, useSpring, motion } from 'framer-motion';
import { useEffect } from 'react';

export default function MouseBackground() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for the movement
    const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Center the blob on the mouse coordinates
            // Assuming blob size is roughly 800px
            mouseX.set(e.clientX - 400);
            mouseY.set(e.clientY - 400);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 -z-10 h-full w-full bg-[#050505] overflow-hidden">
            <motion.div
                style={{
                    x: smoothX,
                    y: smoothY,
                }}
                className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full blur-[100px] opacity-40 mix-blend-screen pointer-events-none bg-gradient-to-r from-purple-600/30 to-orange-600/30"
            />
        </div>
    );
}
