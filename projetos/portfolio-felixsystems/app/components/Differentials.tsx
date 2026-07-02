import { siteContent } from '@/app/data/content';

export default function Differentials() {
  const { differentials } = siteContent;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/90 dark:bg-black/50 border-t border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Por que escolher a Felix Systems?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Porque tecnologia precisa gerar resultado. Nosso foco não é apenas desenvolver software. Criamos soluções que reduzem custos, aumentam produtividade, automatizam processos e ajudam empresas a crescer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {differentials.map((diff, idx) => (
            <div
              key={idx}
              className="flex gap-4 items-start p-6 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500/50 shadow-sm dark:shadow-none transition-all"
            >
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex-shrink-0 mt-1" />
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{diff}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
