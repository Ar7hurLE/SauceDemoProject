# Desafio de Automação SauceDemo - Playwright E2E

Este projeto contém uma suíte de testes automatizados End-to-End (E2E) para a aplicação SauceDemo.

---

## Instruções de Instalação

### Pré-requisitos

#### OBS: Certifique-se de que há instalado no seu sistema:
- [Node.js](https://www.nodejs.org)

### 1. Extrair o Projeto
Extraia o ficheiro `.zip` fornecido para uma pasta à sua escolha.

### 2. Instalar as Dependências do Node.js
Abra o terminal na pasta raiz do projeto e execute o comando abaixo para descarregar as bibliotecas necessárias declaradas no `package.json`:

```bash
npm install
```

### 3. Instalar os Browsers do Playwright
Execute o comando abaixo para que o Playwright instale os browsers nativos necessários para correr os testes de forma isolada:

```bash
npx playwright install
```

---

## Instruções de Execução

A execução dos testes foi simplificada através de atalhos configurados no `package.json`. Escolha uma das opções abaixo a partir do terminal na raiz do projeto:


### Opção 1: Execução Padrão (Modo Headless)
Executa todos os 5 cenários obrigatórios em segundo plano (sem abrir a interface gráfica do browser). É a opção ideal para execuções rápidas e pipelines:

```bash
npm test
```

ou

```bash
npx playwright test
```

### Opção 2: Execução com Interface Gráfica Interativa (Modo UI)
Abre o painel interativo do Playwright. Permite inspecionar o passo a passo de cada cenário em formato BDD (`test.step`):

```bash
npm run test:ui
```

---

## Relatório e Evidências de Execução

Cumprindo as diretivas do enunciado, este pacote já inclui as evidências da última execução local bem-sucedida:

- **Relatório HTML Autónomo:** Disponível na pasta `playwright-report/`.
- **Estratégia de Capturas:** O projeto está configurado globalmente para recolher imagens (`screenshot`) apenas em caso de falha (`only-on-failure`).

Para abrir e inspecionar o relatório interativo completo diretamente no seu browser, execute:

```bash
npm run test:report
```
