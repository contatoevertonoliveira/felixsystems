# FelixSystems — MazyOS

> Operação de desenvolvimento e IA. Aqui ficam todos os clientes, projetos, briefings, entregas, brand e automações.

**Workspace:** FelixSystems é uma operação freelancer solo de resolução de problemas através de tecnologia — sites, sistemas, chats, automações, IA. Estruturação em andamento via MazyOS.

---

## Estrutura de pastas

- `_memoria/` — quem somos (FelixSystems), tom de voz, foco atual (estruturação)
- `identidade/` — brand visual, logo, design guide (em desenvolvimento)
- `clientes/` — um cliente por pasta, cada um autossuficiente com briefing e entregas
- `projetos/` — projetos internos (ex: site de portfólio próprio)
- `propostas/` — propostas em rascunho ou enviadas
- `marketing/` — conteúdo próprio de marketing (LinkedIn, Insta, etc.)
- `saidas/` — documentos pontuais (emails, PDFs)
- `dados/` — arquivos a analisar
- `templates/` — templates de skills e CLAUDE.md para diferentes perfis

---

## Quem somos

**FelixSystems** — operação solo (Everton) de desenvolvimento especializado em resolução de problemas através de tecnologia. Focamos em pessoas reais com problemas reais.

---

## O que entregamos

- **Sites modernos e futuristas** — Next.js/React, com foco em UX e interfaces que vendem
- **Sistemas de IA** — chatbots, automações inteligentes, integração Claude/APIs
- **Automações** — processos, workflows, integração de ferramentas
- **Soluções customizadas** — qualquer coisa que resolver a "dor" do cliente

Ticket típico: varia muito. Capacidade: 1-2 projetos simultâneos no máximo (foco em qualidade).

---

## Como operamos

1. **Briefing:** cliente explica a dor, expectativa, timeline. Registra em `clientes/<Nome>/briefing.md`.
2. **Proposta:** entrega `clientes/<Nome>/proposta.html` com escopo, timeline, valor.
3. **Desenvolvimento:** toda coisa aqui dentro de `clientes/<Nome>/` (estrutura por projeto).
4. **Entrega:** entrega de código, docs ou site rodando. Suporte inicial incluído.
5. **Cobrança:** email com NF quando fechar ou por milestone.

---

## Contexto geral

Leia no início de cada conversa (quando preenchido):

1. `_memoria/empresa.md` — quem é FelixSystems, clientes, foco
2. `_memoria/preferencias.md` — tom de voz, o que evitar
3. `_memoria/estrategia.md` — gargalo (estruturação), tarefa repetitiva (dev prático)

Pra qualquer tarefa visual, consultar `identidade/design-guide.md`.

---

## Fluxo de trabalho

**Skills:** verificar se existe skill relevante em `.claude/skills/` antes de executar. Se tiver, usar. Se não, executar normal.

**Cliente novo:** usar `/novo-projeto` pra criar pasta estruturada com CLAUDE.md, briefing.md e subpastas.

**Proposta:** criar em `clientes/<Nome>/proposta.html` usando padrão (header com logo, escopo claro, pricing, timeline).

**Aprender com correções:** quando o usuário corrigir algo ou dar instrução permanente, oferecer salvar em `_memoria/` ou neste CLAUDE.md.

**Manter atualizado:** quando fechar cliente, integrar ferramenta, ou mudar prioridade, oferecer atualizar memória.

---

## Próximas ações (setups pendentes)

- [ ] Receber briefing visual completo (cores, fontes, logo, design guide)
- [ ] Receber textos de marca e exemplos de tom de voz real
- [ ] Criar site de portfólio da FelixSystems (via `/novo-projeto`)
- [ ] Mapear e automatizar tarefas repetitivas de dev (via `/mapear-rotinas`)
- [ ] Conectar GitHub pra versioning automático (via `/salvar`)

---

## Regras do sistema

- **Cliente novo** → `clientes/<Nome>/briefing.md` + `CLAUDE.md` específico
- **Proposta enviada** → `clientes/<Nome>/proposta.html`
- **Dev prático** → tudo dentro de `clientes/<Nome>/` (código, assets, docs)
- **Conteúdo de marketing da FelixSystems** → `marketing/`
- **Site do portfólio** → `projetos/portfolio-felixsystems/` (projeto interno)
- **Quando briefing visual chegar** → atualizar `identidade/design-guide.md` e `_memoria/preferencias.md`

---

## Ferramentas conectadas

- [ ] GitHub (`.claude/skills/salvar` — push automático)
- [ ] Meta Graph API (pra publicar nas redes)
- [ ] (Outras conforme for adicionando)

---

## Instruções gerais do MazyOS

As regras abaixo aplicam a QUALQUER workspace rodando MazyOS:

### Contexto do negócio

No início de toda conversa, ler os seguintes arquivos (quando existirem
e estiverem preenchidos):

1. `_memoria/empresa.md` — quem é o usuário, o que faz, como funciona o negócio
2. `_memoria/preferencias.md` — tom de voz, estilo de escrita, o que evitar
3. `_memoria/estrategia.md` — foco atual, prioridades, prazos

Usar essas informações como base pra qualquer resposta ou decisão. Ao
sugerir prioridades, formatos ou abordagens, considerar o foco atual
descrito em `estrategia.md`.

Pra qualquer tarefa visual (carrossel, post, landing page), consultar
`identidade/design-guide.md` como referência de estilo.

Não é necessário listar o que foi lido nem confirmar a leitura. Apenas
usar o contexto naturalmente.

### Aprender com correções

Quando o usuário corrigir algo, melhorar uma resposta ou dar uma
instrução que parece permanente (frases como "na verdade é assim", "não
faça mais isso", "prefiro assim", "sempre que...", "evita...", "da
próxima vez..."), perguntar:

> "Quer que eu salve isso pra não precisar repetir?"

Se sim, identificar onde faz mais sentido salvar:

- **Sobre o negócio** (clientes, serviços, mercado) → `_memoria/empresa.md`
- **Sobre preferências e estilo** (tom de voz, formato, o que evitar) → `_memoria/preferencias.md`
- **Sobre prioridades e foco** (projetos, metas, prazos) → `_memoria/estrategia.md`
- **Regra de comportamento nessa pasta** → próprio `CLAUDE.md`

Salvar com uma linha nova clara, sem reformatar o arquivo inteiro.
Confirmar mostrando a linha adicionada.

### Criação de skills

Quando o usuário pedir skill nova:

1. Verificar se existe template relevante em `templates/skills/`. Se
   existir, usar como base e adaptar pro contexto
2. Perguntar se é específica desse projeto ou global
3. Ler `_memoria/` pra calibrar o conteúdo ao contexto do negócio
4. Criar em `.claude/skills/` (local) ou `~/.claude/skills/` (global)
5. Seguir o fluxo da skill-creator nativa do Claude Code
