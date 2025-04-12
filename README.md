# 🏆 Gerenciador de Torneio de Futebol - Tratamento de erros - TypeScript

<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/867/867902.png" width="200" alt="Torneio de Futebol"/>
</p>

---

## 👤 Autoria

Desenvolvido por **Nicolas Loffi Kaminski**

---

## 📖 Sumário

- [📝 Descrição do Projeto](#-descrição-do-projeto)
- [📦 Estrutura do Projeto](#-estrutura-do-projeto)
- [🛠 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [🚀 Como Rodar o Projeto Localmente](#-como-rodar-o-projeto-localmente)
- [⚠️ Tratamento de Erros](#️-tratamento-de-erros)

---

## 📝 Descrição do Projeto

Este projeto é um pequeno programa escrito em **TypeScript** que simula um torneio de futebol, seu intuito é realizar tratamentos de erros e armazenar os erros em um arquivo. Dessa forma concluir a entrega da atividade para a materia de **Clean Code** da instituição. As funcionalidades são:

- Registrar times participantes;
- Simular partidas entre eles;
- Exibir os resultados finais;
- Mostrar o vencedor do torneio;
- Tratar e registrar erros em arquivo de log.

---

## 📦 Estrutura do Projeto
Tratamento_de_erros/
├── src/
│   ├── models/
│   │   ├── match.ts
│   │   ├── tournament.ts
│   ├── main.ts
│   └── logger.ts ?
├── logs/
│   └── error.log
├── package.json
├── README.md
└── tsconfig.json

---

## 🛠 Tecnologias Utilizadas

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Winston](https://img.shields.io/badge/Winston-9C27B0?style=for-the-badge&logo=logstash&logoColor=white)](https://github.com/winstonjs/winston)

---

## 🚀 Como Rodar o Projeto Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [TypeScript](https://www.typescriptlang.org/)

### Passos

1. Clone o repositório:
   - HTTPS:
      ```bash
        https://github.com/NicolasLK/Tratamento_de_erros_CleanCode.git
      ```
   - SSH:
      ```bash
        git@github.com:NicolasLK/Tratamento_de_erros_CleanCode.git
      ```
2. Acesse o diretório:
3. Instale as dependências:
4. Compile os arquivos TypeScript:
5. Execute o programa:
  ```bash
    npm run start
  ```

---

## ⚠️ Tratamento de Erros

O projeto implementa tratamento de exceções para os seguintes casos:

- ❌ Nome de time vazio ou nulo;
- ❌ Número de gols negativo;
- ❌ Partida iniciada com time inexistente.

### 📁 Logs

Todos os erros são capturados e registrados em um arquivo de log localizado em:

```bash
logs/error.log
```

O sistema utiliza a biblioteca Winston para registrar os erros com data e descrição clara do problema.
