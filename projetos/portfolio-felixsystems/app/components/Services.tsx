import { siteContent } from '@/app/data/content';

export default function Services() {
  const { services } = siteContent;

  return (
    <section id="servicos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/80 dark:bg-black/80 border-t border-gray-200 dark:border-white/10 relative overflow-hidden">
      {/* Efeito de fundo futurista */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 dark:from-cyan-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent mb-4">
            O que fazemos
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Soluções completas em tecnologia e IA para transformar seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="group relative h-full cursor-pointer"
            >
              {/* Glow background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 dark:from-cyan-500/10 dark:to-blue-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card principal */}
              <div className="relative h-full p-8 rounded-xl bg-white/40 dark:bg-white/5 border border-gray-200/50 dark:border-cyan-500/20 dark:hover:border-cyan-400/50 backdrop-blur-md hover:bg-white/60 dark:hover:bg-white/10 hover:shadow-xl dark:hover:shadow-cyan-500/10 transition-all duration-300">

                {/* Ícone com destaque */}
                <div className="mb-6 inline-flex">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg blur opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                    <div className="relative bg-gradient-to-br from-cyan-50 dark:from-cyan-950/50 to-blue-50 dark:to-blue-950/50 p-3 rounded-lg">
                      <span className="text-5xl">{service.icon}</span>
                    </div>
                  </div>
                </div>

                {/* Conteúdo */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Divisor com gradiente */}
                <div className="mb-6 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent dark:via-cyan-400/30" />

                {/* Soluções */}
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold mb-3">Inclui:</p>
                  <ul className="space-y-2">
                    {service.solutions.slice(0, 3).map((solution, i) => (
                      <li
                        key={i}
                        className="text-xs text-gray-700 dark:text-gray-300 flex items-center gap-2 group/item"
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300" />
                        <span>{solution}</span>
                      </li>
                    ))}
                    {service.solutions.length > 3 && (
                      <li className="text-xs font-semibold text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text pt-1">
                        +{service.solutions.length - 3} mais
                      </li>
                    )}
                  </ul>
                </div>

                {/* Linha decorativa inferior */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent dark:via-cyan-400/50 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
