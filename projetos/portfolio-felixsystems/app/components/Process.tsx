import { siteContent } from '@/app/data/content';

export default function Process() {
  const { process } = siteContent;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/80 dark:bg-black/80 border-t border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Nosso Processo
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Do entendimento à evolução contínua, cada etapa é cuidadosamente planejada
          </p>
        </div>

        <div className="relative">
          {/* Linha conectora (apenas em desktop) */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500" />

          {/* Cards do processo */}
          <div className="grid md:grid-cols-5 gap-6 relative z-10">
            {process.map((step, idx) => (
              <div key={idx} className="text-center">
                {/* Número/indicador */}
                <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                  <span className="text-white font-bold">{step.number}</span>
                </div>

                {/* Card */}
                <div className="p-6 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500/50 transition-all h-full">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
            Pronto para começar? Vamos transformar seu desafio em solução.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/50">
            Agende uma conversa
          </button>
        </div>
      </div>
    </section>
  );
}
