# 🧪🚀Projeto de Testes Automatizados com Cypress + Cucumber + Mochawesome

![Cypress Status](https://img.shields.io/github/actions/workflow/status/Temimstoclys/ProjectCypress/cypress.yml?label=CI%2FCD&logo=github&style=for-the-badge)

![Último Commit](https://img.shields.io/github/last-commit/Temimstoclys/ProjectCypress?style=for-the-badge)

---

## 🚀 Relatório Online

- 🔗 **Acesse o relatório online:**  
👉 [Relatório Mochawesome](https://temimstoclys.github.io/ProjectCypress/final-report.html)

- 📦 Também disponível no CI/CD (GitHub Actions) como **Artifact**.

---

## 🧪 Sobre o Projeto

🧪 Este projeto tem como objetivo realizar testes automatizados em funcionalidades que envolvem operações **CRUD**  
✨ (**Create ➕ Read 🔍 Update 🔧 Delete 🗑️**), aplicando as melhores práticas de automação de testes com:

- ✅ Cypress
- ✅ Cucumber (BDD)
- ✅ Page Object Model (POM)
- ✅ Mochawesome Report
- ✅ CI/CD via GitHub Actions com deploy no GitHub Pages

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

- 📥 Checkout do repositório
- 📦 Instalação das dependências
- 🚀 Execução dos testes Cypress
- 📊 Geração do relatório Mochawesome
- ⬆️ Upload do relatório como **Artifact**
- 🌐 Publicação automática no **GitHub Pages**

---

## 🗂️ Estrutura do Projeto

```
ProjectCypress/
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
├── README.md
└── LICENSE
```

---

## 📂 Onde ver o relatório no CI/CD?

1. Vá na aba **Actions** do repositório.
2. Clique no workflow executado.
3. Na lateral direita, clique em **Artifacts**.
4. Baixe o arquivo `mochawesome-report`.
5. Extraia e abra `final-report.html`.

---

## 📜 Licença

Este projeto está licenciado sob a licença **MIT**.  
Consulte o arquivo [LICENSE](./LICENSE) para obter mais informações.

---

## 🏆 By Temínstoclys C. Pinheiro