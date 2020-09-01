## 📔 Sobre

Aplicação para gerenciamento de funcionários, no qual se baseia em um CRUD. Tecnologiais utilizadas: NodeJS e ReactJS.

---

## :rocket: Tecnologias Utilizadas

- 🌎 Backend:
  - NodeJS;
  - Express;
  - TypeScript;
  - TypeORM;
  - Postgress;
  - Cors.
  
- 💻 Frontend (Web):
  - ReacJS;
  - React Router DOM;
  - Context API;
  - Styled-Componnets
  - Unform;
  - Yup/
  - TypeScript;
  - Axios.
  
 -📔 Padronização de Código:
  - ESLint
  - Prettier
  - EditorConfig
  
  ---
  
## 👨‍💻️ Como Usar  :

```shell
$ git clone https://github.com/matheusjouan/Gerenciador-Funcionarios.git
$ cd Gerenciador-Funcionarios

# Banco de Dados (Postgress)
 - Criar uma database com nome: teste3lm
 - No arquivo    <font color="red">backend/ormconfig.json</font>, setar as credênciais do B.D
    - username: nome do usuário (linha 6)
    - password: senha do banco de dados (linha 7)

# Iniciando o Servidor Backend (localhost:3333)
$ cd backend
$ yarn install
## Criação das Tabelas
$ yarn typeorm migration:run
## Execução do backend
$ yarn dev:server

# Iniciando a Aplicação Web (localhost:3000)
$ cd web
$ yarn install
## Execução do front-end
$ yarn start
```
---

## :hammer: Features Implementadas

### Backend:

  - [x] Criação da classe User;
  - [x] CRUD de Users.

### Frontend:
  - [x] Listagem geral de todos funcionários.
  - [x] Visualização dos dados dos funcionários.
  - [x] Edição dos dados dos funcionários.
  - [x] Remoção de cadastro dos funcionários.
  - [x] Validação dos dados de entrada.
  - [x] ToastMessage trazendo feedback das ações para o usuário.

  
