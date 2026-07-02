'use client';

import { useState } from 'react';
import { siteContent } from '@/app/data/content';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar envio de email depois
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50/90 to-white/80 dark:from-black dark:to-black/50 border-t border-gray-200 dark:border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Vamos conversar?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Conte-nos sobre seu projeto e vamos encontrar a melhor solução
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                Nome
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/5 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/5 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                Telefone
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/5 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="(11) 9xxxx-xxxx"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                Mensagem
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/5 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none h-32"
                placeholder="Conte-nos sobre seu projeto..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/50"
            >
              Enviar mensagem
            </button>
          </form>

          {/* Informações de contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Outros canais</h3>
              <div className="space-y-4">
                <a
                  href="mailto:contato@felixsystems.com.br"
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-500/30 transition-colors">
                    ✉️
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Email</div>
                    <div className="font-medium">contato@felixsystems.com.br</div>
                  </div>
                </a>

                <a
                  href={`https://wa.me/5511943347381`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-500/20 flex items-center justify-center group-hover:bg-green-200 dark:group-hover:bg-green-500/30 transition-colors">
                    💬
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">WhatsApp</div>
                    <div className="font-medium">{siteContent.contact.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${siteContent.contact.emailSales}`}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-100 dark:bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-200 dark:group-hover:bg-cyan-500/30 transition-colors">
                    💼
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Email (Vendas)</div>
                    <div className="font-medium text-sm">{siteContent.contact.emailSales}</div>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Tempo de resposta</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Respondemos em até 24 horas. Para casos urgentes, entre em contato via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
