// src/components/CustomCursor.tsx
import { useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 18,
        height: 18,
        borderRadius: '50%',
        backgroundColor: '#A8FFDC',
        boxShadow: '0 0 12px rgba(168, 255, 220, 0.6)',
        pointerEvents: 'none',
        zIndex: 9999,
        translateX: cursorX,
        translateY: cursorY,
      }}
      animate={{
        scale: [1, 1.5, 1],
        opacity: [0.9, 0.5, 0.9],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

export default CustomCursor;