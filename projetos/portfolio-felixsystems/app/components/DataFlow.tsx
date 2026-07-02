'use client';

import { useIsDark } from '@/app/hooks/useIsDark';

export default function DataFlow() {
  const isDark = useIsDark();

  // Pulsos de energia em diferentes posições
  const energyPulses = [
    { top: '15%', delay: 0, color: 'cyan', duration: 6 },
    { top: '35%', delay: 1.5, color: 'blue', duration: 7 },
    { top: '55%', delay: 0.7, color: 'emerald', duration: 8 },
    { top: '75%', delay: 2, color: 'cyan', duration: 6.5 },
  ];

  const verticalPulses = [
    { left: '15%', delay: 0, color: 'cyan', duration: 7 },
    { left: '35%', delay: 1, color: 'blue', duration: 8 },
    { left: '55%', delay: 0.5, color: 'emerald', duration: 7.5 },
    { left: '75%', delay: 1.5, color: 'cyan', duration: 8.5 },
    { left: '85%', delay: 0.3, color: 'blue', duration: 7 },
  ];

  // No dark, cores claras e translúcidas (brilham sobre o preto).
  // No light, cores mais saturadas/escuras (precisam de mais "corpo" para aparecer sobre branco).
  const colorMap = isDark
    ? {
        cyan: {
          gradient: 'from-cyan-300 via-cyan-400 to-transparent',
          glow: 'rgba(6, 182, 212, 0.5)',
          shadow: '0 0 8px rgba(6, 182, 212, 0.4), 0 0 16px rgba(6, 182, 212, 0.2)',
        },
        blue: {
          gradient: 'from-blue-300 via-blue-400 to-transparent',
          glow: 'rgba(37, 99, 235, 0.5)',
          shadow: '0 0 8px rgba(37, 99, 235, 0.4), 0 0 16px rgba(37, 99, 235, 0.2)',
        },
        emerald: {
          gradient: 'from-emerald-300 via-emerald-400 to-transparent',
          glow: 'rgba(16, 185, 129, 0.5)',
          shadow: '0 0 8px rgba(16, 185, 129, 0.4), 0 0 16px rgba(16, 185, 129, 0.2)',
        },
      }
    : {
        cyan: {
          gradient: 'from-cyan-600 via-cyan-500 to-transparent',
          glow: 'rgba(8, 145, 178, 0.6)',
          shadow: '0 0 8px rgba(8, 145, 178, 0.5), 0 0 16px rgba(8, 145, 178, 0.25)',
        },
        blue: {
          gradient: 'from-blue-700 via-blue-600 to-transparent',
          glow: 'rgba(29, 78, 216, 0.6)',
          shadow: '0 0 8px rgba(29, 78, 216, 0.5), 0 0 16px rgba(29, 78, 216, 0.25)',
        },
        emerald: {
          gradient: 'from-emerald-600 via-emerald-500 to-transparent',
          glow: 'rgba(5, 150, 105, 0.6)',
          shadow: '0 0 8px rgba(5, 150, 105, 0.5), 0 0 16px rgba(5, 150, 105, 0.25)',
        },
      };

  const svgColors = isDark
    ? { cyan: '6, 182, 212', blue: '37, 99, 235' }
    : { cyan: '8, 145, 178', blue: '29, 78, 216' };

  const containerOpacity = isDark ? 'opacity-40' : 'opacity-60';
  const trailOpacity = isDark ? 0.15 : 0.25;
  const verticalTrailOpacity = isDark ? 0.1 : 0.18;
  const lineOpacityMain = isDark ? 0.25 : 0.35;
  const lineOpacityDiagonal = isDark ? 0.15 : 0.22;

  return (
    <>
      {/* Container de efeitos de energia - atrás do conteúdo, discreto */}
      <div className={`fixed inset-0 pointer-events-none overflow-hidden ${containerOpacity}`} style={{ zIndex: -1 }}>

        {/* PULSOS HORIZONTAIS - Energia percorrendo as fibras */}
        {energyPulses.map((pulse, idx) => (
          <div key={`h-pulse-${idx}`} style={{ position: 'absolute', top: pulse.top }}>
            {/* Pulso principal de energia */}
            <div
              className={`absolute h-1 bg-gradient-to-r ${colorMap[pulse.color as keyof typeof colorMap].gradient} rounded-full`}
              style={{
                width: '150px',
                animation: `energyFlowRight ${pulse.duration}s linear infinite`,
                animationDelay: `${pulse.delay}s`,
                boxShadow: colorMap[pulse.color as keyof typeof colorMap].shadow,
                filter: 'drop-shadow(0 0 4px ' + colorMap[pulse.color as keyof typeof colorMap].glow + ')',
              }}
            />

            {/* Rastro de energia (trail) */}
            <div
              className={`absolute h-0.5 bg-gradient-to-r ${colorMap[pulse.color as keyof typeof colorMap].gradient}`}
              style={{
                width: '300px',
                animation: `energyFlowRight ${pulse.duration}s linear infinite`,
                animationDelay: `${pulse.delay}s`,
                opacity: trailOpacity,
              }}
            />
          </div>
        ))}

        {/* PULSOS VERTICAIS - Energia descendo */}
        {verticalPulses.map((pulse, idx) => (
          <div key={`v-pulse-${idx}`} style={{ position: 'absolute', left: pulse.left }}>
            {/* Pulso principal vertical */}
            <div
              className={`absolute w-1 bg-gradient-to-b ${colorMap[pulse.color as keyof typeof colorMap].gradient} rounded-full`}
              style={{
                height: '150px',
                animation: `energyFlowDown ${pulse.duration}s linear infinite`,
                animationDelay: `${pulse.delay}s`,
                boxShadow: colorMap[pulse.color as keyof typeof colorMap].shadow,
                filter: 'drop-shadow(0 0 4px ' + colorMap[pulse.color as keyof typeof colorMap].glow + ')',
              }}
            />

            {/* Rastro vertical */}
            <div
              className={`absolute w-0.5 bg-gradient-to-b ${colorMap[pulse.color as keyof typeof colorMap].gradient}`}
              style={{
                height: '300px',
                animation: `energyFlowDown ${pulse.duration}s linear infinite`,
                animationDelay: `${pulse.delay}s`,
                opacity: verticalTrailOpacity,
              }}
            />
          </div>
        ))}

        {/* PONTOS DE ENERGIA - Nós de circuito pulsantes */}
        {[
          { x: '15%', y: '20%', color: 'cyan' },
          { x: '35%', y: '40%', color: 'blue' },
          { x: '55%', y: '30%', color: 'emerald' },
          { x: '75%', y: '60%', color: 'cyan' },
          { x: '25%', y: '70%', color: 'blue' },
          { x: '85%', y: '50%', color: 'emerald' },
          { x: '45%', y: '80%', color: 'cyan' },
          { x: '65%', y: '65%', color: 'blue' },
        ].map((node, idx) => (
          <div
            key={`node-${idx}`}
            className="absolute rounded-full"
            style={{
              width: '6px',
              height: '6px',
              left: node.x,
              top: node.y,
              backgroundColor: colorMap[node.color as keyof typeof colorMap].glow,
              boxShadow: colorMap[node.color as keyof typeof colorMap].shadow,
              animation: 'electronicPulse 1.5s ease-in-out infinite',
              animationDelay: `${idx * 0.15}s`,
            }}
          />
        ))}

        {/* LINHAS DE CIRCUITO COM ENERGIA */}
        <svg
          className="absolute inset-0 w-full h-full"
          style={{ pointerEvents: 'none' }}
        >
          <defs>
            {/* Gradientes para as linhas */}
            <linearGradient id="energyGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={`rgba(${svgColors.cyan}, 0.8)`} />
              <stop offset="50%" stopColor={`rgba(${svgColors.cyan}, 0.4)`} />
              <stop offset="100%" stopColor={`rgba(${svgColors.cyan}, 0)`} />
            </linearGradient>

            <linearGradient id="energyGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={`rgba(${svgColors.blue}, 0.8)`} />
              <stop offset="50%" stopColor={`rgba(${svgColors.blue}, 0.4)`} />
              <stop offset="100%" stopColor={`rgba(${svgColors.blue}, 0)`} />
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Linhas principais com brilho */}
          <line x1="5%" y1="25%" x2="95%" y2="35%" stroke="url(#energyGrad1)" strokeWidth="1" opacity={lineOpacityMain} filter="url(#glow)" />
          <line x1="5%" y1="50%" x2="95%" y2="45%" stroke="url(#energyGrad2)" strokeWidth="1" opacity={lineOpacityMain} filter="url(#glow)" />
          <line x1="5%" y1="75%" x2="95%" y2="70%" stroke="url(#energyGrad1)" strokeWidth="1" opacity={lineOpacityMain} filter="url(#glow)" />

          {/* Linhas diagonais */}
          <line x1="10%" y1="15%" x2="90%" y2="85%" stroke="url(#energyGrad2)" strokeWidth="1" opacity={lineOpacityDiagonal} filter="url(#glow)" />
          <line x1="90%" y1="15%" x2="10%" y2="85%" stroke="url(#energyGrad1)" strokeWidth="1" opacity={lineOpacityDiagonal} filter="url(#glow)" />
        </svg>
      </div>

      {/* Animações CSS */}
      <style jsx>{`
        @keyframes energyFlowRight {
          0% {
            left: -200px;
            opacity: 0;
          }
          3% {
            opacity: 1;
          }
          97% {
            opacity: 1;
          }
          100% {
            left: 100vw;
            opacity: 0;
          }
        }

        @keyframes energyFlowDown {
          0% {
            top: -200px;
            opacity: 0;
          }
          3% {
            opacity: 1;
          }
          97% {
            opacity: 1;
          }
          100% {
            top: 100vh;
            opacity: 0;
          }
        }

        @keyframes electronicPulse {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.3);
          }
        }
      `}</style>
    </>
  );
}
