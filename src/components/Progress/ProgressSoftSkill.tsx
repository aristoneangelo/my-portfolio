import { useEffect, useState } from 'react';
import { LinearProgress, Box, Typography } from '@mui/material';

interface ProgressBarProps {
  target: number;
  speed?: number;
  name?: string,
}

const ProgressSoftSkill = ({ target, speed = 20 , name}: ProgressBarProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0); // reinicia sempre que componente monta

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;
        if (next >= target) {
          clearInterval(timer);
          return target;
        }
        return next;
      });
    }, speed);

    return () => clearInterval(timer); // limpa ao desmontar
  }, [target, speed]);

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="body1" color="primary.contrastText">{`${name}`}</Typography>
      <Typography variant="body2" color="secondary">{`${progress}%`}</Typography>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 10,
          borderRadius: 4,
          border: '2px solid white',
          transition: 'all 0.4s ease-in-out',
          backgroundColor: theme => theme.palette.primary.main, // cor da trilha
            '& .MuiLinearProgress-bar': {
            backgroundColor: theme => theme.palette.secondary.main, // cor da barra preenchida
        },
        }}
      />
    </Box>
  );
};

export default ProgressSoftSkill;