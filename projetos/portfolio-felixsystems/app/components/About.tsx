import { siteContent } from '@/app/data/content';

export default function About() {
  const { about } = siteContent;

  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/80 dark:bg-black/80 border-t border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {about.title}
            </h2>
            <p className="text-lg text-cyan-600 dark:text-cyan-400 font-semibold mb-4">
              {about.intro}
            </p>
            <div className="prose dark:prose-invert max-w-none">
              {about.description.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-gray-700 dark:text-gray-300 text-lg mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-600/20 dark:to-cyan-500/20 rounded-lg p-12 flex items-center justify-center min-h-96 border border-gray-200 dark:border-white/20 hover:border-cyan-400 dark:hover:border-cyan-500/50 transition-all">
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">Transformando desafios em oportunidades</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">10+ anos de experiência em arquitetura e sistemas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
