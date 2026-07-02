import Link from 'next/link';
import Image from 'next/image';
import { siteContent } from '@/app/data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { brand } = siteContent;

  return (
    <footer className="bg-gradient-to-t from-gray-50/90 to-white/80 dark:from-black dark:to-black/50 border-t border-gray-200 dark:border-white/10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="mb-16 pb-12 border-b border-gray-200 dark:border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
            {/* Logo e descrição */}
            <div className="flex-1">
              {/* Logo PNG (transparente) sobre card claro para manter contraste */}
              <div className="mb-6">
                <div className="inline-block bg-white/95 rounded-lg px-4 py-3 shadow-sm mb-4">
                  <Image
                    src="/images/logo.png"
                    alt="Felix Systems"
                    width={400}
                    height={160}
                    style={{ height: '72px', width: 'auto' }}
                    unoptimized
                  />
                </div>
                <p className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-widest">{brand.tagline}</p>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-md">
                Criamos sistemas, automações e agentes de IA que ajudam empresas a vender mais, reduzir custos e escalar operações.
              </p>
            </div>

            {/* Slogan */}
            <div className="md:text-right">
              <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Soluções Inteligentes para Empresas Inteligentes.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Transformando desafios em oportunidades através da tecnologia.
              </p>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div></div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Navegação</h4>
            <div className="space-y-2">
              <Link href="#servicos" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm transition-colors block">
                Serviços
              </Link>
              <Link href="#cases" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm transition-colors block">
                Cases
              </Link>
              <Link href="#sobre" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm transition-colors block">
                Sobre
              </Link>
              <Link href="#contato" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm transition-colors block">
                Contato
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Serviços</h4>
            <div className="space-y-2">
              <p className="text-gray-600 dark:text-gray-400 text-sm">IA & Automação</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Sites Modernos</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Chatbots</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Desenvolvimento Custom</p>
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-sm">
              <div className="text-gray-600 dark:text-gray-400">
                <div className="font-medium text-gray-900 dark:text-white mb-2">{brand.phone}</div>
              </div>
              <a href={`mailto:${brand.emails.contact}`} className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors block">
                {brand.emails.contact}
              </a>
              <a href={`mailto:${brand.emails.sales}`} className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors block">
                {brand.emails.sales}
              </a>
              <a href={`mailto:${brand.emails.support}`} className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors block">
                {brand.emails.support}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} FelixSystems. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                GitHub
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
