'use client';

export default function FiberOpticsEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="fiberGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
          </linearGradient>

          <filter id="tinyGlow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <style>{`
            /* Animação de pulso viajando pela linha horizontal 1 */
            @keyframes pulse-line1 {
              0% {
                cx: 0;
                r: 2.5;
                opacity: 0.8;
              }
              100% {
                cx: 1440;
                r: 2.5;
                opacity: 0.1;
              }
            }

            /* Animação de pulso viajando pela linha horizontal 2 */
            @keyframes pulse-line2 {
              0% {
                cx: 1440;
                r: 2.5;
                opacity: 0.8;
              }
              100% {
                cx: 0;
                r: 2.5;
                opacity: 0.1;
              }
            }

            /* Animação de pulso viajando pela linha horizontal 3 */
            @keyframes pulse-line3 {
              0% {
                cx: 0;
                r: 2.5;
                opacity: 0.8;
              }
              100% {
                cx: 1440;
                r: 2.5;
                opacity: 0.1;
              }
            }

            /* Animação de pulso viajando pela diagonal 1 */
            @keyframes pulse-diag1 {
              0% {
                cx: 100;
                cy: 100;
                opacity: 0.8;
              }
              100% {
                cx: 600;
                cy: 600;
                opacity: 0.1;
              }
            }

            /* Animação de pulso viajando pela diagonal 2 */
            @keyframes pulse-diag2 {
              0% {
                cx: 800;
                cy: 100;
                opacity: 0.8;
              }
              100% {
                cx: 1400;
                cy: 700;
                opacity: 0.1;
              }
            }

            /* Animação de pulso viajando pela diagonal 3 */
            @keyframes pulse-diag3 {
              0% {
                cx: 200;
                cy: 600;
                opacity: 0.8;
              }
              100% {
                cx: 1000;
                cy: 200;
                opacity: 0.1;
              }
            }

            /* Classes de animação */
            .pulse-1 {
              animation: pulse-line1 3.5s linear infinite;
            }

            .pulse-2 {
              animation: pulse-line2 4s linear infinite;
              animation-delay: 0.5s;
            }

            .pulse-3 {
              animation: pulse-line3 3.7s linear infinite;
              animation-delay: 0.7s;
            }

            .pulse-diag-1 {
              animation: pulse-diag1 4.5s linear infinite;
              animation-delay: 0.3s;
            }

            .pulse-diag-2 {
              animation: pulse-diag2 5s linear infinite;
              animation-delay: 1s;
            }

            .pulse-diag-3 {
              animation: pulse-diag3 4.3s linear infinite;
              animation-delay: 0.6s;
            }
          `}</style>
        </defs>

        {/* Linhas de fibra óptica bem sutis (fundo) */}
        <line x1="0" y1="200" x2="1440" y2="200" stroke="url(#fiberGradient)" strokeWidth="1.5" opacity="0.15" />
        <line x1="0" y1="350" x2="1440" y2="350" stroke="url(#fiberGradient)" strokeWidth="1.5" opacity="0.12" />
        <line x1="0" y1="500" x2="1440" y2="500" stroke="url(#fiberGradient)" strokeWidth="1.5" opacity="0.1" />

        {/* Linhas diagonais bem sutis */}
        <line x1="100" y1="100" x2="600" y2="600" stroke="url(#fiberGradient)" strokeWidth="1" opacity="0.1" />
        <line x1="800" y1="100" x2="1400" y2="700" stroke="url(#fiberGradient)" strokeWidth="1" opacity="0.1" />
        <line x1="200" y1="600" x2="1000" y2="200" stroke="url(#fiberGradient)" strokeWidth="1" opacity="0.08" />

        {/* PULSOS ELÉTRICOS - Bolinhas pequenas viajando nas redes */}
        {/* Pulsos nas linhas horizontais - bem pequenos e sutis */}
        <circle cy="200" r="2.5" fill="#0ea5e9" opacity="0.8" className="pulse-1" filter="url(#tinyGlow)" />
        <circle cy="350" r="2.5" fill="#06b6d4" opacity="0.8" className="pulse-2" filter="url(#tinyGlow)" />
        <circle cy="500" r="2.5" fill="#0284c7" opacity="0.8" className="pulse-3" filter="url(#tinyGlow)" />

        {/* Pulsos nas linhas diagonais - bem pequenos */}
        <circle r="2" fill="#0ea5e9" opacity="0.7" className="pulse-diag-1" filter="url(#tinyGlow)" />
        <circle r="2" fill="#06b6d4" opacity="0.7" className="pulse-diag-2" filter="url(#tinyGlow)" />
        <circle r="2" fill="#0284c7" opacity="0.7" className="pulse-diag-3" filter="url(#tinyGlow)" />
      </svg>
    </div>
  );
}
