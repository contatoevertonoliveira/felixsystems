import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 dark:bg-slate-950/95 shadow-sm backdrop-blur-sm border-b border-gray-100 dark:border-white/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center group hover:opacity-90 transition-opacity">
          <Image
            src="/images/logo.png"
            alt="Felix Systems"
            height={60}
            width={420}
            style={{ height: '60px', width: 'auto' }}
            priority
            unoptimized
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#servicos" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
            Serviços
          </Link>
          <Link href="#cases" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
            Cases
          </Link>
          <Link href="#sobre" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
            Sobre
          </Link>
          <Link href="#contato" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
            Contato
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="#contato"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Falar conosco
          </Link>
        </div>
      </nav>
    </header>
  );
}
