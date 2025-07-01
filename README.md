# 🛒 Desafio Carrinho de Compras (JS Modular)

Este projeto simula um carrinho de compras simples utilizando JavaScript com foco em **lógica de programação**, **modularização** e **organização de código** feito para o desafio de projeto "Carrinho de compras Shopee com Node.js" da DIO no bootcap de Mobile Developer.

## 🚀 Objetivo do Desafio

- Aplicar conceitos básicos de **lógica de programação**.
- Aprender a **modularizar** o código utilizando **Módulos ES (ESModules)**.
- Utilizar um arquivo **controlador principal (`index.js`)** para orquestrar a aplicação.
- Separar a lógica por responsabilidade: controle, item e carrinho.

## 🧩 Estrutura do Projeto

aplicacao/
│
├── controller/
│ └── index.js # Controlador principal (entrada da aplicação)
│
└── services/
├── item.mjs # Criação e estrutura de um item
└── cart.mjs # Lógica de manipulação do carrinho


## ✅ Funcionalidades

- Adicionar itens ao carrinho
- Remover itens do carrinho
- Visualizar itens adicionados
- Calcular o total da compra

## 💡 Conceitos Praticados

- Modularização de código com **ESModules**
- Organização em arquivos por responsabilidade
- Uso de funções assíncronas apenas quando necessário
- Interação com usuário via terminal (`prompt-sync`)
- Boas práticas de estrutura de código

## 🖥️ Tecnologias Utilizadas

- Node.js
- JavaScript (ESModules)
- prompt-sync

## 📦 Como executar

1. Clone o repositório
2. Instale o `prompt-sync`:
   ```bash
   npm install prompt-sync
   ```
3. Execute o controlador:
   ```bash
   node controller/index.js
   ```
Este desafio de projeto foi proposto como prática para reforçar a lógica de programação e introdução à organização de projetos em JavaScript modular.
