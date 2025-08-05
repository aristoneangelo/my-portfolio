import { Box } from '@mui/material';

const Moon = () => (
  <Box
    sx={{
      position: 'absolute',
      top: 40,
      right: 40,
      width: 80,
      height: 80,
      borderRadius: '50%',
      background: 'radial-gradient(circle at 30% 30%, #fff, #ccc)',
      boxShadow: '0 0 20px #fff',
      zIndex: 1,
    }}
  />
);

export default Moon;