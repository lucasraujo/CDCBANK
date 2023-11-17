# CDCBANK

Projeto em nodejs para cadastro de funconarios

## Requisitos Prévios

Certifique-se de ter os seguintes requisitos instalados em sua máquina:

- [Node.js](https://nodejs.org/): Ambiente de execução JavaScript.
- [Yarn](https://yarnpkg.com/): Gerenciador de pacotes para o backend.(opcional).
- [Git](https://git-scm.com/): Sistema de controle de versão.

## Backend

1. **Clone o Repositório:**

   ```bash
   git clone git@github.com:lucasraujo/CDCBANK.git

   ```

2. **Na pasta back-end crie um Arquivo .env:**

   - Crie um arquivo `.env` na raiz do diretório do back-end.
   - Preencha as variáveis de ambiente necessárias. Consulte o arquivo `.env.example` para um exemplo.
   - escolha a porta 3001 pois o front-end esta configurado para fazer requisições em http://localhost:3001 (caso nao seja posivel tera que alterar o arquivo api.ts na pasta front-end/src/services )

3. **Instale as Dependências:**
   ```bash
   yarn
   ```
4. **Execute a Migração do Banco de Dados:**
   ```bash
   yarn typeorm migration:run -d ./src/data-source
   ```
5. **rode o servidor:**
   ```bash
   yarn dev
   ```

## Front-end

1. **Na pasta front-end instale as dependencias:**
   ```bash
   yarn
   ```
1. **rode a aplicaçao:**
   ```bash
   yarn start
   ```
