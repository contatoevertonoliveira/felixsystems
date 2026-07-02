import { siteContent } from '@/app/data/content';

export default function Values() {
  const { about } = siteContent;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/80 dark:bg-black/80 border-t border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Missão */}
          <div className="p-8 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500/50 transition-all">
            <h3 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4 uppercase tracking-wider">
              Missão
            </h3>
            <p className="text-gray-900 dark:text-white text-lg leading-relaxed">
              {about.mission}
            </p>
          </div>

          {/* Visão */}
          <div className="p-8 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-cyan-400 dark:hover:border-cyan-500/50 transition-all">
            <h3 className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-4 uppercase tracking-wider">
              Visão
            </h3>
            <p className="text-gray-900 dark:text-white text-lg leading-relaxed">
              {about.vision}
            </p>
          </div>

          {/* Valores */}
          <div className="p-8 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-emerald-400 dark:hover:border-emerald-500/50 transition-all">
            <h3 className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-4 uppercase tracking-wider">
              Valores
            </h3>
            <ul className="space-y-3">
              {about.values.slice(0, 4).map((value, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-emerald-600 dark:text-emerald-400 mt-0.5">✓</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{value.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
