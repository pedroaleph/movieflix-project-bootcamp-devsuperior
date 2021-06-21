# MovieFlix

# Sobre o projeto

Deploy do backend no heroku : https://movieflix-pedroaleph.herokuapp.com

[link do deploy no netlify]

Movieflix é uma aplicação full stack web e mobile Desenvolvido como projeto final de Bootcamp versão 2.0 da [DevSuperior](https://devsuperior.com "Site da DevSuperior").

A aplicação consistem em :
- Permite avaliar cada filme em um catalógo de filmes (para isso é necessário que o usuário faça login)
- Apenas usuários membros podem avaliar os filmes, visitantes podem apenas visualizar essas avaliações
- No catálogo de filmes é possivel filtrar os filmes pelo seu gênero 

(Só o backend foi desenvolvido até o momento)

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
- Apex Charts
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
git clone https://github.com/devsuperior/sds1-wmazoni

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
yarn install

# executar o projeto
yarn start
```

# Autor

Pedro Aleph G. de S. Vasconcelos
