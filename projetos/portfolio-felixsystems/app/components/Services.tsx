import { siteContent } from '@/app/data/content';

export default function Services() {
  const { services } = siteContent;

  return (
    <section id="servicos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/80 dark:bg-black/80 border-t border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            O que fazemos
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Soluções completas em tecnologia e IA para transformar seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group p-6 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500/50 hover:bg-white dark:hover:bg-white/10 hover:shadow-md dark:hover:shadow-none transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Soluções/Features */}
              <div className="pt-4 border-t border-gray-200 dark:border-white/10">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Inclui:</p>
                <ul className="space-y-2">
                  {service.solutions.slice(0, 3).map((solution, idx) => (
                    <li key={idx} className="text-xs text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <span className="w-1 h-1 bg-cyan-500 rounded-full" />
                      {solution}
                    </li>
                  ))}
                  {service.solutions.length > 3 && (
                    <li className="text-xs text-cyan-600 dark:text-cyan-400 font-semibold">
                      +{service.solutions.length - 3} mais
                    </li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
