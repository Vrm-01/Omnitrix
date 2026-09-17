# Omnitrix - Mini App (Consumindo API REST)

Aplicação Web interativa desenvolvida para a avaliação prática da disciplina de **Tecnologias para Internet** da **Faculdade Senac Cascavel**, sob orientação da **Prof.ª M.ª Roberta Vanessa Rojo Parcianello**.

---

## Sobre o Projeto

O projeto consiste em uma aplicação Web inspirada no relógio **Omnitrix** da série *Ben 10*. A aplicação simula a seleção de DNA alienígena através do disco do relógio e consulta assincronamente os dados de cada alienígena em uma API REST local desenvolvida em **Node.js**.

---

## Funcionalidades

- **Seleção Dinâmica:** O usuário escolhe o alienígena através de um elemento `<select>` (disco do Omnitrix).
- **Comunicação Assíncrona:** Realiza requisições HTTP utilizando a **Fetch API** com `async/await`.
- **Feedback Visual:** Exibe mensagens informativas ao usuário enquanto a consulta está em andamento ("Sincronizando DNA...").
- **Exibição Dinâmica:** Apresenta dinamicamente na tela o nome, espécie, planeta natal, habilidades e a imagem do alienígena selecionado.
- **Tratamento de Erros:** Exibe mensagens amigáveis em caso de falhas na requisição ou se o DNA/ID não for encontrado.

---

## Tecnologias Utilizadas

- **HTML5:** Estrutura semântica da aplicação.
- **CSS3:** Estilização estilizada com temática futurista/Omnitrix e layout responsivo.
- **JavaScript (ES6+):** Manipulação do DOM, manipulação de eventos e programação assíncrona.
- **Node.js & json-server:** Simulação de uma API REST pública servindo dados no formato JSON.

---

## Estrutura de Arquivos

```text
├── index.html       # Estrutura HTML da aplicação
├── style.css        # Estilos CSS do Omnitrix
├── script.js        # Lógica JavaScript (Fetch, Async/Await, DOM)
├── db.json          # Banco de dados dos alienígenas
└── README.md        # Documentação do projeto
