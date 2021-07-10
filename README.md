# MovieFlix
[![Netlify Status](https://api.netlify.com/api/v1/badges/b0393705-f6af-43de-84aa-47cfd451b284/deploy-status)](https://app.netlify.com/sites/pedroaleph-movieflix-bootcamp/deploys) [![Build Status](https://travis-ci.com/pedroaleph/movieflix-project-bootcamp-devsuperior.svg?branch=main)](https://travis-ci.com/pedroaleph/movieflix-project-bootcamp-devsuperior)

# Sobre o projeto

Deploy do back end no heroku: https://movieflix-pedroaleph.herokuapp.com

Deploy do front web no netlify: https://pedroaleph-movieflix-bootcamp.netlify.app

Movieflix é uma aplicação full stack web e mobile Desenvolvido como projeto final de Bootcamp versão 2.0 da [DevSuperior](https://devsuperior.com "Site da DevSuperior").

A aplicação consistem em :
- Permite avaliar cada filme em um catalógo de filmes (para isso é necessário que o usuário faça login)
- Apenas usuários membros podem avaliar os filmes, visitantes podem apenas visualizar essas avaliações
- No catálogo de filmes é possivel filtrar os filmes pelo seu gênero

- Para testar utlize um deste usuários: 
-- username: ana@gmail.com senha: 123456 authoridade: membro
-- username: bob@gmail.com senha: 123456 authoridade: visitante

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS
- React Native
- Expo
## Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/pedroaleph/movieflix-project-bootcamp-devsuperior.git

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/pedroaleph/movieflix-project-bootcamp-devsuperior.git

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
yarn install

# executar o projeto
yarn start
```

# Autor

Pedro Aleph G. de S. Vasconcelos
