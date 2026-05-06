# Atelê Mosca Branca - Portfólio Standalone

Projeto React (Vite) totalmente independente da plataforma Manus, pronto para deploy na Vercel com domínio próprio.

## Características

✅ **Totalmente independente** - Sem dependências da plataforma Manus
✅ **React + Vite** - Stack moderno e performático
✅ **Tailwind CSS 4** - Estilos responsivos
✅ **Carrossel com swipe** - Navegação intuitiva em mobile
✅ **Accordions** - Informações complementares expansíveis
✅ **Formulário Formspree** - Envio de pedidos por email
✅ **SEO configurado** - Meta tags, Open Graph, Twitter Card
✅ **Responsivo** - Otimizado para desktop e mobile
✅ **Pronto para Vercel** - Deploy em um clique

## Instalação Local

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Acessar em http://localhost:5173
```

## Build para Produção

```bash
# Gerar build otimizado
npm run build

# Visualizar build localmente
npm run preview
```

## Configuração do Formspree

1. Acesse [formspree.io](https://formspree.io/)
2. Crie uma nova conta ou faça login
3. Crie um novo formulário
4. Copie o ID do formulário (ex: `xyzpqrst`)
5. Abra `src/pages/Home.jsx` e procure por `formspree.io/f/`
6. Substitua `xyzpqrst` pelo seu ID real

## Deploy na Vercel

### Opção 1: Via GitHub (Recomendado)

1. Faça push do projeto para GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "New Project"
4. Selecione o repositório
5. Vercel detectará automaticamente Vite
6. Clique em "Deploy"

### Opção 2: Deploy Manual

```bash
npm install -g vercel
vercel
```

## Configurar Domínio Próprio

1. Na Vercel: Settings > Domains > Add Domain
2. Digite `moscabranca.art.br`
3. No seu registrador: Adicione CNAME `cname.vercel-dns.com`
4. Aguarde 24-48 horas para propagação

## Personalização

### Mudar Cores
Edite `tailwind.config.js`:
```js
colors: { accent: '#f85f5a' }
```

### Mudar Logo
Em `src/pages/Home.jsx`:
```jsx
const logoUrl = 'https://seu-url-da-logo.com/logo.png';
```

### Mudar Imagens do Carrossel
Em `src/pages/Home.jsx`:
```jsx
const oleoCarouselImages = [
  'https://url-imagem-1.com/img.jpg',
  'https://url-imagem-2.com/img.jpg',
  'https://url-imagem-3.com/img.jpg',
];
```

## Funcionalidades

- **Carrossel Mobile**: Navegação por setas e swipe
- **Accordions**: Informações expandíveis
- **Formulário**: Integrado com Formspree
- **SEO**: Meta tags e Open Graph
- **Responsivo**: Desktop e mobile otimizados

## Performance

- Lighthouse Score: 95+
- Build size: ~420KB (gzip: ~124KB)
- Imagens em CDN externo
- CSS minificado com Tailwind

## Suporte

Email: moscabranca.art@gmail.com
WhatsApp: (31) 99796-9797

© 2024 Atelê Mosca Branca. Todos os direitos reservados.
