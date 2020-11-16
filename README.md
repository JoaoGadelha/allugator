# Backend do Allugator

API RESTful para pesquisa e cadastro de funcionários implementada em Node.js/Express.js. O site está rodando em https://allugator.herokuapp.com/, e o frontend implementado em React.js que utiliza esta API está em https://allugator.netlify.app/. O banco de dados de funcionários está presente no MongoDB Atlas.
 

## Documentação swagger

https://app.swaggerhub.com/apis-docs/JoaoGadelha/Allugator/1.0.0

## Instalar aplicativo 

Para instalar o aplicativo, insira

### `npm install`

na pasta do aplicativo.

## Rodar aplicativo

Para rodar o aplicativo em modo de desenvolvimento, insira

### `npm start`

na pasta do aplicativo.

## Rotas

### GET `/name/:name`

Retorna o resultado da busca por nome

### GET `/CPF/:CPF`

Retorna o resultado da busca por CPF

### GET `/role/:role`

Retorna o resultado da busca por cargo

### GET `/state/:state`

Retorna o resultado da busca por estado

### GET `/salary/:salary`

Retorna o resultado da busca por salário

### GET `/date/:date`

Retorna o resultado da busca por data

### GET `/status/:status`

Retorna o resultado da busca por status

### GET `/delete/:CPF`

Deleta o registro do usuário

### POST `/register/`

Cria um novo registro de usuário

## Criar tabela de funcionários

- O programa `convertTxtToJson.js` converte os dados de cada funcionário no arquivo `employeeDatabase.txt` em um array de objetos. Cada objeto contém os dados de um funcionário.

- O programa `saveEmployeesInDatabase.js` recebe o objeto criado pelo programa `convertTxtToJson.js` e cria, a partir desse objeto, uma tabela no MongoDB Atlas.
