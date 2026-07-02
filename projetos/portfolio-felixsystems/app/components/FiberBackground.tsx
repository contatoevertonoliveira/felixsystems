'use client';

export default function FiberBackground() {
  return (
    <>
      {/* SVG Background com circuitos de fibra ótica */}
      <svg
        className="fixed inset-0 w-full h-full pointer-events-none opacity-15"
        style={{ zIndex: 0 }}
        viewBox="0 0 1400 900"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Gradiente para linhas */}
          <linearGradient id="fiberGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>

          {/* Filtro de brilho */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Padrão de grade */}
          <pattern
            id="fiberPattern"
            x="100"
            y="100"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* Linha horizontal */}
            <line x1="0" y1="100" x2="200" y2="100" stroke="url(#fiberGradient)" strokeWidth="1" />
            {/* Linha vertical */}
            <line x1="100" y1="0" x2="100" y2="200" stroke="url(#fiberGradient)" strokeWidth="1" />
            {/* Linha diagonal 1 */}
            <line x1="0" y1="0" x2="200" y2="200" stroke="url(#fiberGradient)" strokeWidth="0.5" opacity="0.5" />
            {/* Linha diagonal 2 */}
            <line x1="200" y1="0" x2="0" y2="200" stroke="url(#fiberGradient)" strokeWidth="0.5" opacity="0.5" />
          </pattern>
        </defs>

        {/* Fundo com padrão */}
        <rect width="1400" height="900" fill="url(#fiberPattern)" />

        {/* Nós/pontos de conexão (esquerda) */}
        {[150, 300, 450, 600, 750].map((y) => (
          <g key={`left-${y}`}>
            <circle cx="100" cy={y} r="4" fill="#06B6D4" opacity="0.6" filter="url(#glow)" />
            <circle cx="100" cy={y} r="8" fill="none" stroke="#06B6D4" strokeWidth="1" opacity="0.3" />
          </g>
        ))}

        {/* Nós/pontos de conexão (direita) */}
        {[200, 350, 500, 700, 850].map((y) => (
          <g key={`right-${y}`}>
            <circle cx="1300" cy={y} r="4" fill="#10B981" opacity="0.6" filter="url(#glow)" />
            <circle cx="1300" cy={y} r="8" fill="none" stroke="#10B981" strokeWidth="1" opacity="0.3" />
          </g>
        ))}

        {/* Nós/pontos de conexão (centro-superior) */}
        {[200, 400, 600, 800, 1000, 1200].map((x) => (
          <g key={`top-${x}`}>
            <circle cx={x} cy="50" r="3" fill="#2563EB" opacity="0.5" filter="url(#glow)" />
            <circle cx={x} cy="50" r="7" fill="none" stroke="#2563EB" strokeWidth="1" opacity="0.2" />
          </g>
        ))}

        {/* Nós/pontos de conexão (centro-inferior) */}
        {[250, 450, 700, 950, 1100, 1350].map((x) => (
          <g key={`bottom-${x}`}>
            <circle cx={x} cy="850" r="3" fill="#06B6D4" opacity="0.5" filter="url(#glow)" />
            <circle cx={x} cy="850" r="7" fill="none" stroke="#06B6D4" strokeWidth="1" opacity="0.2" />
          </g>
        ))}

        {/* Linhas conectoras principais com animação */}
        <g opacity="0.4">
          {/* Linha esquerda-direita superior */}
          <line x1="100" y1="150" x2="1300" y2="200" stroke="url(#fiberGradient)" strokeWidth="2" />
          {/* Linha esquerda-direita meio */}
          <line x1="100" y1="450" x2="1300" y2="500" stroke="url(#fiberGradient)" strokeWidth="2" />
          {/* Linha esquerda-direita inferior */}
          <line x1="100" y1="750" x2="1300" y2="700" stroke="url(#fiberGradient)" strokeWidth="2" />
          {/* Linha topo-centro */}
          <line x1="700" y1="50" x2="700" y2="450" stroke="url(#fiberGradient)" strokeWidth="2" />
          {/* Linha centro-fundo */}
          <line x1="700" y1="450" x2="700" y2="850" stroke="url(#fiberGradient)" strokeWidth="2" />
        </g>
      </svg>

      {/* Efeito de dados em movimento (pontos animados) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        {/* Dados movendo-se da esquerda pra direita (superior) */}
        <div
          className="absolute h-1 bg-gradient-to-r from-cyan-500 to-transparent rounded-full opacity-50"
          style={{
            width: '100px',
            top: '150px',
            left: '-100px',
            animation: 'moveRight 8s linear infinite',
          }}
        />

        {/* Dados movendo-se da esquerda pra direita (meio) */}
        <div
          className="absolute h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full opacity-50"
          style={{
            width: '100px',
            top: '450px',
            left: '-100px',
            animation: 'moveRight 10s linear infinite 2s',
          }}
        />

        {/* Dados movendo-se da esquerda pra direita (inferior) */}
        <div
          className="absolute h-1 bg-gradient-to-r from-emerald-500 to-transparent rounded-full opacity-50"
          style={{
            width: '100px',
            top: '750px',
            left: '-100px',
            animation: 'moveRight 9s linear infinite 1s',
          }}
        />

        {/* Dados movendo-se de cima pra baixo */}
        <div
          className="absolute w-1 bg-gradient-to-b from-cyan-500 to-transparent rounded-full opacity-50"
          style={{
            height: '80px',
            left: '700px',
            top: '-80px',
            animation: 'moveDown 7s linear infinite 1.5s',
          }}
        />

        {/* Dados movendo-se de cima pra baixo (outro) */}
        <div
          className="absolute w-1 bg-gradient-to-b from-emerald-500 to-transparent rounded-full opacity-50"
          style={{
            height: '80px',
            left: '450px',
            top: '-80px',
            animation: 'moveDown 8s linear infinite',
          }}
        />

        {/* Pulsos nos nós */}
        {[100, 300, 500].map((idx) => (
          <div
            key={`pulse-${idx}`}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            style={{
              left: `${idx}px`,
              top: '450px',
              opacity: 0.6,
              animation: `pulse 2s ease-in-out infinite`,
              animationDelay: `${idx * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* Estilos de animação */}
      <style jsx>{`
        @keyframes moveRight {
          0% {
            left: -100px;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            left: 100vw;
            opacity: 0;
          }
        }

        @keyframes moveDown {
          0% {
            top: -80px;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: 100vh;
            opacity: 0;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.5);
          }
        }
      `}</style>
    </>
  );
}
