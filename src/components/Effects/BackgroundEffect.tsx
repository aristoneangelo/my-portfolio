import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const BackgroundEffect: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const xOffset = ((mousePos.x / window.innerWidth) - 0.5) * 40;
  const yOffset = ((mousePos.y / window.innerHeight) - 0.5) * 40;

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          width: '120%',
          height: '120%',
          background: 'radial-gradient(circle at center, #A8FFDC, #1e1e2f, #0d47a1)',
          filter: 'blur(30px)',
        }}
        animate={{
          x: xOffset,
          y: yOffset,
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 40,
        }}
      />
    </Box>
  );
};

export default BackgroundEffect;