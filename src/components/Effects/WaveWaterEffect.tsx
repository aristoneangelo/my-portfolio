// src/components/WaveWaterEffect.tsx
import { useEffect, useRef } from 'react';

const WaveWaterEffect = () => {
  const filterRef = useRef<SVGFilterElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      if (filterRef.current) {
        const turbulence = filterRef.current.querySelector('feTurbulence');
        const displace = filterRef.current.querySelector('feDisplacementMap');
        if (turbulence) {
          const freqX = 0.015 + y * 0.02;
          turbulence.setAttribute('baseFrequency', `${freqX}`);
        }
        if (displace) {
          const scale = 40 + x * 60;
          displace.setAttribute('scale', `${scale}`);
        }
      }
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <>
      <svg style={{ width: 0, height: 0 }}>
        <filter id="waveWater" ref={filterRef}>
          <feTurbulence
            type="turbulence"
            baseFrequency="0.03"
            numOctaves="2"
            result="turbulence"
          />
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="60" />
        </filter>
      </svg>

      <div
        style={{
          width: '100vw',
          height: '100vh',
          backgroundImage: 'url("../images/aristone.jpg")',
          backgroundSize: 'cover',
          filter: 'url(#waveWater)',
        }}
      />
    </>
  );
};

export default WaveWaterEffect;
