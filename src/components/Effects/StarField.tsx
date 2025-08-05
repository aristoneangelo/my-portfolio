import { motion } from 'framer-motion';
import { Box } from '@mui/material';

const generateStars = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
  }));

const StarField = () => {
  const stars = generateStars(80);

  return (
    <>
      {stars.map(star => (
        <motion.div
          key={star.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          style={{
            position: 'absolute',
            top: star.y,
            left: star.x,
            width: 2,
            height: 2,
            borderRadius: '50%',
            backgroundColor: '#fff',
          }}
        />
      ))}
    </>
  );
};

export default StarField;