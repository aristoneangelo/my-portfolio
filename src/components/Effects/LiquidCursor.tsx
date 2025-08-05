import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const LiquidCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 30,
        height: 30,
        borderRadius: '50%',
        background: '#00FFF0',
        filter: 'url(#goo)',
        pointerEvents: 'none',
        translateX: springX,
        translateY: springY,
        zIndex: 9999,
      }}
    />
  );
};

export default LiquidCursor;