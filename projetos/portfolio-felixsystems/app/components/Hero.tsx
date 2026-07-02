'use client';

import { siteContent } from '@/app/data/content';
import FiberOpticsEffect from './FiberOpticsEffect';

export default function Hero() {
  const { hero, brand } = siteContent;

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/90 via-white/90 to-white/80 dark:from-slate-900 dark:via-black dark:to-black/90 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-15 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-400 dark:bg-cyan-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-15 dark:opacity-10 animate-pulse animation-delay-2000" />
      </div>

      {/* Fiber Optics Effect - animação de energia nas redes ópticas */}
      <FiberOpticsEffect />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="mb-8 inline-block">
          <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-600/20 dark:to-cyan-500/20 border border-blue-300 dark:border-blue-500/30 text-sm text-blue-700 dark:text-blue-300">
            ✨ {brand.tagline}
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          {hero.headline}
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          {hero.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/50">
            {hero.cta1}
          </button>
          <button className="px-8 py-4 bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 text-gray-900 dark:text-white rounded-lg font-semibold border border-gray-300 dark:border-white/20 transition-all">
            {hero.cta2}
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="p-6 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent mb-2">
              10+
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Anos de experiência</div>
          </div>
          <div className="p-6 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Projetos entregues</div>
          </div>
          <div className="p-6 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Clientes satisfeitos</div>
          </div>
        </div>
      </div>
    </section>
  );
}
