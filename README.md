# MarketPlace Orchestrator - Front End - Plataforma para integração de marketplaces
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Descrição

O Marketplace Orchestrator — Frontend é a interface web responsável por permitir que vendedores gerenciem, de forma centralizada, seus produtos, credenciais de marketplaces, sincronizações e operações gerais.

Este frontend se integra diretamente ao backend oficial do Marketplace Orchestrator e foi desenvolvido para fornecer uma experiência moderna, rápida e intuitiva, com foco em produtividade.

A aplicação permite:
- Autenticação completa (login, cadastro, recuperação de senha).
- Cadastro, edição e visualização de produtos.
- Conexão e gerenciamento de credenciais de múltiplos marketplaces (ex.: Mercado Livre).
- Visualização de status de integrações, logs e sincronizações.
- Dashboard consolidado com métricas e indicadores.
- Interface responsiva, tema dinâmico e componentes reutilizáveis.
- Suporte a uploads, formulários avançados e tabelas com filtros/paginação.

Este projeto é a camada de apresentação (frontend) usada pelos vendedores para operar a automação multi-marketplace.

## Objetivos do Projeto

Os objetivos principais do frontend são:

- Fornecer uma interface moderna, responsiva e acessível para gestão de produtos e integrações.
- Permitir que o usuário visualize, crie e edite produtos de forma simples e eficiente.
- Oferecer ferramentas para conectar marketplaces e gerenciar credenciais OAuth/API.
- Exibir informações unificadas como status de sincronizações, filas e logs de publicação.
- Integrar de forma segura com a API do backend (NestJS).
- Organizar a estrutura de rotas usando o App Router do Next.js com layouts desacoplados.
- Criar uma base sólida, escalável e extensível para as próximas fases do projeto:
  - Integração de pedidos
  - Controle de estoque
  - Financeiro e faturamento
- Garantir excelente performance utilizando caching, debouncing e paginação inteligente.

## Tecnologias Utilizadas

**Framework e Estrutura**
- Next.js 15 (App Router)
- React 18
- TypeScript

**Estilização e UI**
- TailwindCSS
- Shadcn/UI

**Estado Global e Dados**
- Redux Toolkit
- RTK Query (opcional ou mix com Redux)
- React Hook Form
- Zod
- TanStack Table
- TanStack Query (para cache/queries complexas, se necessário)

**Upload e Media**
- UploadThing (upload de imagens de produtos)
- Charts
- Recharts (dashboard e métricas)

**Infra/Integração**
- Axios (HTTP client)
- Next Middleware (proteção de rotas)

## Setup do Projeto

Aqui está o passo a passo para rodar o projeto localmente:

### 1. Clonar o repositório
```bash
git clone https://github.com/SEU_USUARIO/marketplace-orchestrator-frontend.git
cd marketplace-orchestrator-frontend
```

### 2. Instalar dependências
```bash
npm install
# ou
yarn
# ou
pnpm install
```

### 3. Criar o arquivo .env.local
```bash
NEXT_PUBLIC_API_URL=http://localhost:3000
UPLOADTHING_TOKEN=...
```

(O backend precisa estar rodando.)

### 4. Executar o projeto
```bash
npm run dev
```

### 5. Acessar no navegador
```bash
http://localhost:3000
```

### Scripts Principais
```bash
npm run dev       # ambiente de desenvolvimento
npm run build     # build de produção
npm run start     # iniciar build
npm run lint      # linting
```
