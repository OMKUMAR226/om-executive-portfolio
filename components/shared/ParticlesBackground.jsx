'use client';

import { useEffect, useState } from 'react';

export default function ParticlesBackground() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let engine, container;

    async function initParticles() {
      try {
        const { tsParticles } = await import('@tsparticles/react');
        const { loadSlim } = await import('@tsparticles/slim');

        await loadSlim(tsParticles);

        container = await tsParticles.load({
          id: 'tsparticles',
          options: {
            fullScreen: { enable: false },
            background: { color: 'transparent' },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: 'grab' },
              },
              modes: {
                grab: { distance: 120, links: { opacity: 0.3 } },
              },
            },
            particles: {
              number: { value: 80, density: { enable: true, area: 1400 } },
              color: { value: ['#38BDF8', '#7DD3FC', '#CBD5E1'] },
              opacity: { value: { min: 0.05, max: 0.2 }, animation: { enable: true, speed: 0.4, minimumValue: 0.05 } },
              size: { value: { min: 1, max: 2.5 } },
              links: {
                enable: true,
                distance: 130,
                color: '#38BDF8',
                opacity: 0.08,
                width: 1,
              },
              move: {
                enable: true,
                speed: 0.4,
                direction: 'none',
                random: true,
                straight: false,
                outModes: { default: 'bounce' },
              },
            },
            detectRetina: true,
          },
        });

        setLoaded(true);
      } catch (err) {
        // Silently fail — particles are enhancement only
        console.warn('Particles failed to load:', err);
      }
    }

    initParticles();

    return () => {
      if (container) container.destroy();
    };
  }, []);

  return (
    <div
      id="tsparticles"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}
