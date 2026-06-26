# riandro.dev — Portfólio

Portfólio pessoal construído com Next.js 16, TypeScript e Tailwind CSS v4.

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000 no navegador.

## Como fazer o deploy (Vercel — recomendado)

1. Suba este projeto para um repositório no GitHub.
2. Acesse vercel.com, clique em "Add New Project" e importe o repositório.
3. Deixe as configurações padrão (o Vercel detecta Next.js automaticamente).
4. Clique em Deploy.

## Estrutura

```
src/
  app/
    layout.tsx       — layout raiz, metadata do site
    page.tsx          — monta as seções da home
    globals.css       — sistema de design (cores, tipografia, tokens)
  components/
    Header.tsx        — navegação fixa no topo
    TerminalHero.tsx   — hero com terminal animado (efeito de digitação)
    About.tsx          — seção "Sobre"
    Projects.tsx       — organiza o case principal + grid secundário
    FeaturedCase.tsx   — case study da Moncié Esthetique (destaque)
    ProjectGrid.tsx    — cards do AgendaPro e Rumo à Psico
    Stack.tsx          — categorias de tecnologias
    Contact.tsx        — seção de contato + footer
```

## O que personalizar antes de publicar

- **Contact.tsx**: troque o link do LinkedIn (`linkedin.com/in/riandro-deian`) pelo seu link real.
- **FeaturedCase.tsx / ProjectGrid.tsx**: confira se os links dos repositórios/sites ainda são os corretos.
- **layout.tsx**: ajuste `metadata` (title/description) se quiser mudar como aparece no Google e ao compartilhar o link.
- Adicione um favicon próprio em `src/app/favicon.ico` se quiser trocar o ícone padrão do Next.js.

## Notas de design

- Paleta dark consistente com a capa do LinkedIn (mesmos tons de azul/verde-menta sobre fundo quase-preto).
- Tipografia: Space Grotesk para títulos, Inter para corpo, JetBrains Mono para elementos técnicos — todas com fallback de fontes do sistema (não dependem de carregar Google Fonts).
- O hero simula um terminal digitando comandos reais (`whoami`, `cat stack.json`) como elemento de assinatura visual, em vez do clichê "Oi, eu sou desenvolvedor" com foto grande.
