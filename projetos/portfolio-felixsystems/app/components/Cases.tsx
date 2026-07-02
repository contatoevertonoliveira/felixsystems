export default function Cases() {
  const cases = [
    {
      id: 1,
      title: 'Caso 1',
      category: 'IA + Automação',
      description: '[Descrição do projeto virá aqui]',
      result: '[Resultado/impacto virá aqui]',
      image: null, // Imagem virá depois
    },
    {
      id: 2,
      title: 'Caso 2',
      category: 'Site Moderno',
      description: '[Descrição do projeto virá aqui]',
      result: '[Resultado/impacto virá aqui]',
      image: null,
    },
    {
      id: 3,
      title: 'Caso 3',
      category: 'Chatbot IA',
      description: '[Descrição do projeto virá aqui]',
      result: '[Resultado/impacto virá aqui]',
      image: null,
    },
  ];

  return (
    <section id="cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/90 dark:bg-black/50 border-t border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Cases & Projetos
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Veja alguns dos projetos que ajudamos a transformar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((caseItem) => (
            <div
              key={caseItem.id}
              className="group rounded-lg overflow-hidden bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-blue-500/50 shadow-sm dark:shadow-none transition-all duration-300"
            >
              {/* Placeholder para imagem */}
              <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-600/20 dark:to-purple-600/20 flex items-center justify-center border-b border-gray-200 dark:border-white/10">
                <div className="text-center">
                  <div className="text-4xl mb-2">📸</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">[Imagem do projeto]</p>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/20 border border-blue-300 dark:border-blue-500/30 text-xs text-blue-700 dark:text-blue-300">
                    {caseItem.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{caseItem.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{caseItem.description}</p>
                <div className="pt-4 border-t border-gray-200 dark:border-white/10">
                  <p className="text-sm text-green-600 dark:text-green-400">{caseItem.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 text-gray-900 dark:text-white rounded-lg border border-gray-300 dark:border-white/20 transition-all">
            Ver todos os cases
          </button>
        </div>
      </div>
    </section>
  );
}
