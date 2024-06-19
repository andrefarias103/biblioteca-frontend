<p align="center">
<img loading="lazy" src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge"/>
</p>

<br>
<h1 align="center">
Sistema Biblioteca Escolar - Front-End
</h1>

<br>

[![Node Version](https://img.shields.io/badge/node-20.11.0-brightgreen)](https://nodejs.org/)
[![NPM Version](https://img.shields.io/badge/npm-10.5.2-blue)](https://www.npmjs.com/)
  
## Descrição

Este projeto é um sistema front-end de gerenciamento de biblioteca escolar desenvolvido com ReactJS Nativo, TypeScript e CSS. O sistema permite gerenciar locatários, livros, autores e empréstimos e devoluções de livros, facilitando o controle e a organização da biblioteca.


## Funcionalidades

- **Gerenciamento de Livros**: Adicionar, editar, excluir e listar livros.
- **Gerenciamento de Autores**: Adicionar, editar, excluir e listar autores.
- **Gerenciamento de Locatários**: Adicionar, editar, excluir e listar locatários.
- **Gerencimaento de Reservas**: Permite realizar reservas de livros, informando data e hora de liberação e devolução
- **Consultas de Livros disponíveis para locação**: Permite pesquisar quais livres estão disponíveis para locação
- **Consultas de Livros reservados**: Permite pesquisar quais livres estão indisponíveis para locação


## Ferramentas Utilizadas

  _Requisitos para a execução do projeto_

  - Visual Studio Code (Sugestão)
  - Repositório biblioteca-backend rodando (https://github.com/andrefarias103/biblioteca-backend)

  _Plugins VSCode: (Sugestões)_

  - editorconfig
  - prettier
  - eslint


## Instalação do projeto </h3>

Siga as instruções abaixo para configurar e executar a aplicação:

1. Clone este repositório:

   ```bash
   git clone https://github.com/andrefarias103/biblioteca-frontend.git```

2. Abra o projeto no vsCode e navegue até a branche dev executando o seguinte comando no terminal:

   ```bash
   git checkout dev
    
3. Instale dependências:

   ```bash
   npm install


## Executar a aplicação

A aplicação estará em execução em http://localhost:3010 por padrão. Você pode alterar a porta nas configurações.

  ```bash
  npm run start
  ```

## Scripts

 ```bash
start:dev: Inicia a aplicação em modo de desenvolvimento com recarga automática (npm run start:dev).
start: Inicia a aplicação em modo de produção (npm start).
build: Compila o projeto para produção (npm run build).
```

#Contribuições
