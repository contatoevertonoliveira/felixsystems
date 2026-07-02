import Link from 'next/link';
import Image from 'next/image';
import { siteContent } from '@/app/data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { brand } = siteContent;

  return (
    <footer className="bg-white/80 dark:bg-black/80 border-t border-gray-200 dark:border-white/10 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Efeito de fundo subtle */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Grid */}
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Logo & Brand Column */}
          <div className="md:col-span-1">
            <div className="mb-8">
              {/* Logo com efeito moderno */}
              <div className="mb-6">
                <Image
                  src="/images/logo.png"
                  alt="Felix Systems"
                  height={60}
                  width={420}
                  style={{ height: '60px', width: 'auto' }}
                  unoptimized
                />
              </div>

              {/* Brand Info */}
              <p className="text-cyan-600 dark:text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-3">
                {brand.tagline}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Transformando desafios em soluções inteligentes através da tecnologia.
              </p>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Navegação
            </h4>
            <div className="space-y-3">
              <Link href="#servicos" className="text-gray-600 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-400 text-sm transition-colors block group flex items-center gap-2">
                <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                Serviços
              </Link>
              <Link href="#cases" className="text-gray-600 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-400 text-sm transition-colors block group flex items-center gap-2">
                <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                Cases
              </Link>
              <Link href="#sobre" className="text-gray-600 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-400 text-sm transition-colors block group flex items-center gap-2">
                <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                Sobre
              </Link>
              <Link href="#contato" className="text-gray-600 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-400 text-sm transition-colors block group flex items-center gap-2">
                <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                Contato
              </Link>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Soluções
            </h4>
            <div className="space-y-3">
              <div className="text-gray-600 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-400 text-sm transition-colors group flex items-center gap-2 cursor-pointer">
                <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                IA & Automação
              </div>
              <div className="text-gray-600 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-400 text-sm transition-colors group flex items-center gap-2 cursor-pointer">
                <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                Sites Modernos
              </div>
              <div className="text-gray-600 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-400 text-sm transition-colors group flex items-center gap-2 cursor-pointer">
                <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                Chatbots IA
              </div>
              <div className="text-gray-600 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-400 text-sm transition-colors group flex items-center gap-2 cursor-pointer">
                <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                Desenvolvimento Custom
              </div>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Contato
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-1 text-xs uppercase tracking-wider opacity-75">Telefone</p>
                <p className="font-medium text-gray-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer">
                  {brand.phone}
                </p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-1 text-xs uppercase tracking-wider opacity-75">Email</p>
                <a href={`mailto:${brand.emails.contact}`} className="text-gray-600 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors block text-sm">
                  {brand.emails.contact}
                </a>
              </div>
            </div>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Redes
            </h4>
            <div className="space-y-3">
              <a href="#" className="text-gray-600 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors text-sm group flex items-center gap-2">
                <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                LinkedIn
              </a>
              <a href="#" className="text-gray-600 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors text-sm group flex items-center gap-2">
                <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                GitHub
              </a>
              <a href="#" className="text-gray-600 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors text-sm group flex items-center gap-2">
                <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Divider com gradiente */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent dark:via-cyan-400/30 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 dark:text-gray-400 text-xs uppercase tracking-wider">
            © {currentYear} FelixSystems. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-xs">
            Desenvolvido com tecnologia e inteligência artificial
          </p>
        </div>
      </div>
    </footer>
  );
}
