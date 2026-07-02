# FelixSystems — Portfolio Site

> Projeto interno. Site de portfólio moderno e futurista da FelixSystems.
> Criado em 2026-07-01 com Next.js 16 + React + Tailwind CSS.

## Sobre

Site de portfólio que showcasa a FelixSystems, seus serviços (IA, sites, automações) e cases. Foco em UX, performance, design futurista e geração de leads.

## Tipo

Projeto interno — o site da própria FelixSystems.

## Entregas previstas

- Landing page com hero, serviços, cases, testimonials
- Seção "Sobre" (quem somos, expertise)
- Seção "Serviços" com detalhes de cada oferta
- Seção "Cases" / portfolio de trabalhos
- CTA e forms de contato
- Blog (futura)
- Performance otimizada e SEO

## Stack

- **Framework:** Next.js 16 (App Router)
- **UI/Styling:** React + Tailwind CSS
- **Language:** TypeScript
- **Deploy:** Vercel (pré-configurado)

## Onde salvar o que

- **Componentes reutilizáveis:** `app/components/`
- **Páginas:** `app/` (usa App Router)
- **Styles globais:** `app/globals.css`
- **Imagens/assets:** `public/` (depois organizar em `public/images/`, `public/icons/`, etc.)
- **Data / conteúdo:** `app/data/` (criar conforme precisar — coisas como lista de serviços, cases, etc.)

## Contexto que herda da raiz

Este projeto herda o tom de voz, marca e contexto do negócio definidos em:
- `_memoria/empresa.md` (FelixSystems é freelancer solo, resolve problemas com IA/tech)
- `_memoria/preferencias.md` (tom direto, sem jargão vazio)
- `_memoria/estrategia.md` (foco em estruturação e automação)
- `identidade/design-guide.md` (quando preenchido — cores, tipografia, logo)

Não duplicar essas informações aqui. Usar como base para design e copy.

## Específico desse projeto

### Conteúdo pendente

- [ ] Copy completa (headline hero, descrições de serviços, values)
- [ ] Identidade visual final (cores, tipografia, logo em SVG)
- [ ] Cases / exemplos de trabalho (imagens, descrições)
- [ ] Testimonials / social proof

### Design guidelines (temporal)

Enquanto `identidade/design-guide.md` não chegar completo:
- Use **cores futuristas:** azuis, purpuras, pretos com destaque em neon (ajustar depois)
- Use **tipografia moderna:** sans-serif limpa (Geist, Inter, Poppins são boas)
- **Animações:** smooth transitions, hover effects, parallax se fizer sentido
- **UX:** mobile-first, com seções claras e CTAs bem posicionadas

### Status do projeto

- [x] Setup inicial (Next.js + Tailwind)
- [ ] Layout base (header, footer, layout grid)
- [ ] Página home com seções estruturadas
- [ ] Componentes de cards, buttons, forms
- [ ] Integração de conteúdo
- [ ] Teste local e deploy

## Como trabalhar nesse projeto

1. Abra o terminal na pasta `portfolio-felixsystems/` (assim eu carrego este CLAUDE.md)
2. `npm run dev` pra rodar local em `http://localhost:3000`
3. Edite componentes em `app/` e veja live reload
4. Quando receber conteúdo/identidade visual, atualize `app/data/` e componentes

## Próximos passos (imediatos)

1. Aguardar briefing visual completo, textos e identidade de marca
2. Criar componentes base (Header, Hero, Services, Cases, Footer)
3. Integrar conteúdo
4. Teste visual e responsividade
5. Deploy em Vercel
