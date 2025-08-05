import { motion } from 'framer-motion';

const ShootingStar = () => (
  <motion.div
    initial={{ x: -200, y: -100, opacity: 0 }}
    animate={{ x: window.innerWidth + 200, y: window.innerHeight / 2, opacity: [0, 1, 0] }}
    transition={{ duration: 2, repeat: Infinity, repeatDelay: 10 }}
    style={{
      position: 'absolute',
      width: 100,
      height: 2,
      background: 'linear-gradient(to right, #fff, transparent)',
      top: 100,
      left: 0,
      zIndex: 2,
    }}
  />
);

export default ShootingStar;