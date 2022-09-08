# GIOPE APP
Ferramentas de auxilio a gestão do metroBH 

* [Instalação](#instalação)
* [Desenvolvimento](#desenvolvimento)

## Instalação
### Básico
Criando a aplicação Next com Typescript
```bash
npx create-next-app@latest --typescript
```
### Testes
Instalando Jest para criação de testes
```bash
npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @types/jest
```
Criar o arquivo `jest.config.js` na pasta raiz do projeto
```ts
// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
```
Criar o arquivo `jest.setup.js` na pasta raiz do projeto
```js
//jest.setup.js
import '@testing-library/jest-dom/extend-expect';
```

## Desenvolvimento
### Inicializando projeto
Baixar ou clonar o repositório.
Instalar dependencias
```bash
npm install
```
Subir servidor de desenvolvimento
```bash
npm run dev
```
Abrir [http://localhost:3000](http://localhost:3000) com o navegador para ver os resuktados.

