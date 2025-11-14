# Plataforma Digital para ONGs - Gente do Bem

Este projeto é uma **Single Page Application (SPA)** desenvolvida como parte da disciplina de Desenvolvimento Web. O objetivo é criar uma plataforma profissional, responsiva, acessível e otimizada para que ONGs possam divulgar projetos e captar voluntários.

## 🚀 Funcionalidades Principais

* **Arquitetura SPA (Single Page Application):** Navegação fluida sem recarregamento de página, utilizando um roteador JavaScript customizado (`router.js`).
* **Modo de Alto Contraste:** Funcionalidade de acessibilidade (WCAG 2.1) que inverte as cores do site para facilitar a leitura, com persistência de preferência do usuário (`localStorage`).
* **Gestão de Projetos:** Carregamento dinâmico de projetos via JSON, simulando consumo de API REST.
* **Formulários Inteligentes:**
    * Validação de dados em tempo real (DOM Manipulation).
    * Máscaras de input automáticas para CPF, Telefone e CEP (Regex).
* **Design Responsivo:** Layout fluido (Mobile-First) adaptável para celulares, tablets e desktops.

## 🛠 Tecnologias e Conceitos Aplicados

* **HTML5 Semântico:** Uso de tags estruturais (`header`, `nav`, `main`, `article`, `fieldset`) para melhor SEO e acessibilidade.
* **CSS3 Avançado:**
    * **Grid Layout & Flexbox:** Para estruturação de cards e cabeçalho.
    * **Variáveis CSS (`:root`):** Para gerenciamento de temas (Claro/Escuro).
    * **Design System:** Tipografia e paleta de cores consistentes.
* **JavaScript (ES6+):**
    * `fetch` API para dados assíncronos.
    * Manipulação avançada do DOM.
    * Sistema de Rotas (Hash Routing).
* **Otimização:** Arquivos minificados para produção.

## 📦 Estrutura do Projeto

A organização de pastas segue o padrão de separação de responsabilidades (MVC-like no Front-end):

/

├── assets/          # Imagens e recursos estáticos
├── data/            # Fonte de dados (JSON) dos projetos
├── dist/            # Arquivos minificados (.min.css, .min.js) para produção
├── includes/        # Componentes reutilizáveis (Header/Footer)
├── pages/           # Fragmentos de conteúdo HTML (Views)
├── scripts/         # Lógica da aplicação
│   ├── router.js    # Gerenciador de rotas (SPA)
│   ├── main.js      # Lógica da Home
│   ├── projetos.js  # Lógica da Listagem
│   ├── mascaras.js  # Validação e Máscaras de Form
│   └── global.js    # Carregador de componentes e Tema
├── styles/          # Estilização (CSS)
└── index.html       # Shell da aplicação (Página Única)

## ♿ Acessibilidade e Inclusão

O projeto segue as diretrizes **WCAG 2.1 Nível AA**:
* Contraste adequado entre texto e fundo.
* Botão dedicado para **Alto Contraste** (Tema Escuro/Amarelo).
* Navegação semântica compatível com leitores de tela.
* Atributos `alt` em todas as imagens dinâmicas.

## ⚙️ Otimização e Build

Para simular um ambiente de produção profissional, os arquivos estáticos foram otimizados:
* **Minificação:** CSS e JS comprimidos na pasta `/dist` para redução de latência.
* **Imagens:** Assets otimizados para web.

## 🔧 Como Executar o Projeto

Devido ao uso de **Módulos JS** e **Fetch API**, o navegador pode bloquear requisições locais por segurança (CORS). É necessário rodar através de um servidor local.

### Pré-requisitos
* Editor de código (VS Code recomendável).
* Extensão **Live Server**.

### Passo a Passo
1.  Clone este repositório.
2.  Abra a pasta no VS Code.
3.  Clique com o botão direito no arquivo `index.html`.
4.  Selecione **"Open with Live Server"**.

---

**Desenvolvido por CAIO HENRIQUE**