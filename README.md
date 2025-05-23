# ✅ Projeto de Testes Automatizados com Cypress + Cucumber + Mochawesome

![Cypress Tests](https://github.com/SEU-USUARIO/SEU-REPOSITORIO/actions/workflows/cypress.yml/badge.svg)

Este projeto realiza testes automatizados nas funcionalidades do sistema **[SeuBarriga](https://seubarriga.wcaquino.me)**, utilizando:

- ✅ Cypress
- ✅ Cucumber (BDD)
- ✅ Page Object Model (POM)
- ✅ Mochawesome Report
- ✅ CI/CD via GitHub Actions

---

## 🚀 Relatório Mochawesome

- 📦 Após a execução dos testes, o relatório estará disponível na pasta:

```
mochawesome-report/final-report.html
```

Basta abrir no navegador para visualizar.

- 📦 No CI/CD (GitHub Actions), o relatório fica disponível como **Artifact** para download na aba de execução do workflow.

---

## 🏗️ Como rodar localmente

### 1️⃣ Instalar dependências:

```bash
npm install
```

### 2️⃣ Executar os testes:

```bash
npm run test
```

### 3️⃣ Gerar o relatório consolidado:

```bash
npm run report:generate
```

---

## 📜 Scripts disponíveis

| Script                    | Descrição                                 |
|---------------------------|-------------------------------------------|
| `npm run test`            | Executa os testes Cypress                |
| `npm run report:generate` | Gera o relatório Mochawesome consolidado |

---

## 🔧 Pipeline CI/CD (GitHub Actions)

O pipeline executa os seguintes passos:

- 📦 Checkout do repositório
- 🔧 Instalação das dependências
- 🚀 Execução dos testes
- 📊 Geração do relatório Mochawesome
- ⬆️ Upload do relatório como **Artifact**

---

## 🏗️ Estrutura do Projeto

```
Project/
├── cypress/
│   ├── e2e/
│   ├── support/
│   └── page_objects/
├── mochawesome-report/
├── .github/
│   └── workflows/
│       └── cypress.yml
├── cypress.config.js
├── generate-report.js
├── package.json
├── .gitignore
```

---

## 📂 Onde ver o relatório no CI/CD?

1. Acesse seu repositório no GitHub.
2. Vá na aba **Actions**.
3. Clique no workflow que executou.
4. Na lateral direita, clique em **Artifacts**.
5. Baixe o arquivo `mochawesome-report`.
6. Extraia e abra `final-report.html`.

---

## 🏆 By Temínstoclys C. Pinheiro