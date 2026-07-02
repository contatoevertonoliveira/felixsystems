# Briefing — Site Portfólio FelixSystems

## Status: EM DESENVOLVIMENTO

**Criado em:** 2026-07-01  
**Stack:** Next.js 16 + React + Tailwind CSS + TypeScript  
**Deploy:** Pronto para Vercel  

---

## O que já temos

✅ **Estrutura inicial**
- Header com navegação e CTA
- Hero section com gradientes e animações
- Seção de Serviços (6 serviços base)
- Seção de Cases (placeholders estruturados)
- Seção Sobre (estrutura pronta)
- Seção de Contato com formulário
- Footer completo

✅ **Componentes reutilizáveis**
- TypeScript + strong typing
- Tailwind CSS com design system futurista
- Responsivo mobile-first
- Animações suaves

✅ **Setup técnico**
- Next.js 16 com App Router
- ESLint configurado
- TypeScript
- Suporte a hot reload

---

## O que está pendente (conteúdo)

Aguardando você enviar:

- [ ] **Identidade visual completa** (`identidade/design-guide.md`)
  - Cores primária, secundária, acentos
  - Tipografia (títulos, corpo)
  - Logo em SVG (versões claras/escuras)
  - Elementos visuais (border-radius, sombras, espaçamento)

- [ ] **Conteúdo textual**
  - Headline do hero (melhorar/personalizar)
  - Descrição e valores da empresa
  - Descrição de cada serviço (ou manter as 6 genéricas)
  - Pelo menos 3 cases reais com:
    - Título do projeto
    - Descrição do problema
    - Solução implementada
    - Resultado/impacto
    - Imagem do projeto

- [ ] **Informações de contato**
  - WhatsApp completo
  - Localização/endereço
  - Horário de atendimento

- [ ] **Imagens e assets**
  - Logo em `public/images/logo.svg` ou `.png`
  - Imagens dos cases em `public/images/cases/`
  - Fotos/ilustração da seção "Sobre" se quiser

- [ ] **Redes sociais** (links nos botões do footer)
  - LinkedIn
  - GitHub
  - Instagram

---

## Como rodar local

```bash
# A partir da pasta portfolio-felixsystems/
npm install  # (já feito, mas se precisar)
npm run dev
```

Acessa em `http://localhost:3000`

---

## Estrutura de pastas

```
portfolio-felixsystems/
├── app/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Cases.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/               # Conteúdo e configurações
│   │   └── content.ts      # [PREENCHER COM SEUS DADOS]
│   ├── globals.css         # Estilos globais
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── public/
│   └── images/             # [CRIAR E ADICIONAR]
│       ├── logo.svg
│       └── cases/
├── CLAUDE.md               # Documentação do projeto
├── BRIEFING.md             # Este arquivo
└── package.json
```

---

## Próximos passos

1. **Enviar identidade visual** → atualizo cores, tipografia, logo
2. **Enviar conteúdo** → integro textos, cases, imagens
3. **Adicionar imagens** → organizadas em `public/images/`
4. **Ajustar design** → refinamentos conforme feedback
5. **Deploy** → via Vercel

---

## Notas técnicas

- Componentes usam **Tailwind CSS** com classes utilitárias
- **Hero e Contact** usam `'use client'` (client components para interatividade)
- Formulário de contato está estruturado mas sem integração de email (será adicionado depois)
- Animações CSS suaves via Tailwind (hover, transitions, gradients)
- **Mobile-first:** tudo responsivo desde a base

---

## Checklist final (pré-deploy)

- [ ] Conteúdo completo integrado
- [ ] Logo e imagens upadas
- [ ] Formulário de contato funcionando
- [ ] Links de redes sociais corretos
- [ ] Teste visual em mobile, tablet, desktop
- [ ] Performance checado (Lighthouse)
- [ ] SEO base (meta tags, open graph)
- [ ] Deploy em Vercel

---

## Perguntas?

Quando enviar os dizeres, me manda também:
- Qual é a estrutura correta dos casos (quantos? como você quer que apareçam?)
- Se quer seção de blog ou outras páginas além da home
- Integrações especiais (email, CRM, analytics)?
- Modo escuro, ou só dark theme mesmo?
