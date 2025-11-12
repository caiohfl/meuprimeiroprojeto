# Plataforma Digital para ONGs

Este projeto é uma aplicação web desenvolvida como parte da disciplina de Desenvolvimento Web. O objetivo é criar uma plataforma profissional, responsiva e acessível para que ONGs possam divulgar seus projetos e captar voluntários.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando a tríade fundamental da web, sem dependência de frameworks pesados, garantindo performance e aprendizado dos conceitos base:

* **HTML5 Semântico:** Estruturação de conteúdo focada em acessibilidade e SEO.
* **CSS3 Avançado:**
    * Uso de **Flexbox** e **CSS Grid** para layouts complexos.
    * **Design Responsivo (Mobile-First)** para adaptação a celulares, tablets e desktops.
    * Variáveis CSS (`:root`) para consistência de design system.
* **JavaScript (ES6+):**
    * Manipulação dinâmica do DOM.
    * Consumo de dados via **Fetch API** (leitura de arquivos JSON locais).
    * Uso de `async/await` para código assíncrono limpo.
    * **Componentização** de Header e Footer via injeção de scripts.

## ⚙️ Funcionalidades Implementadas

* **Página Inicial (Home):** Apresentação da ONG e destaque dinâmico dos principais projetos.
* **Galeria de Projetos:** Listagem completa de todos os projetos cadastrados no sistema.
* **Detalhes do Projeto:** Página dinâmica que lê parâmetros da URL (`?id=...`) para exibir informações detalhadas de um projeto específico (metas, voluntários, descrição).
* **Sistema de Componentes:** Header e Footer carregados dinamicamente em todas as páginas para facilitar a manutenção.

## 📂 Estrutura do Projeto

Olá! Que bom ter você de volta. Vamos com tudo! 🚀

Relembrando onde paramos:

Estrutura e Código: Você já tem a Home, a Listagem de Projetos e a Página de Detalhes funcionando, com dados dinâmicos (JSON) e componentes reutilizáveis (header/footer).

GitHub: Você já salvou (commitou) tudo no seu repositório.

Fase 3 (Login): Pulamos conforme seu pedido.

O próximo passo lógico e essencial para cumprir os requisitos da disciplina é a Fase 4: Documentação Técnica.

A atividade pede explicitamente: "Produzir documentação técnica de qualidade profissional."

No mundo do desenvolvimento, isso significa ter um README.md impecável no seu GitHub. É a primeira coisa que seu professor (ou um recrutador) vai ler.

Missão de Hoje: O README.md Profissional
Vamos criar o "manual de instruções" do seu projeto.

Passo 1: Crie o Arquivo No seu VS Code, na raiz do projeto (fora de qualquer pasta), crie um arquivo chamado exatamente: README.md (letras maiúsculas importam).

Passo 2: O Conteúdo Copie o modelo abaixo. Eu já escrevi ele pensando nos requisitos técnicos que você cumpriu (HTML Semântico, CSS Grid, JS Assíncrono, etc).

Cole isso dentro do seu arquivo README.md:

Markdown

# Plataforma Digital para ONGs

Este projeto é uma aplicação web desenvolvida como parte da disciplina de Desenvolvimento Web. O objetivo é criar uma plataforma profissional, responsiva e acessível para que ONGs possam divulgar seus projetos e captar voluntários.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando a tríade fundamental da web, sem dependência de frameworks pesados, garantindo performance e aprendizado dos conceitos base:

* **HTML5 Semântico:** Estruturação de conteúdo focada em acessibilidade e SEO.
* **CSS3 Avançado:**
    * Uso de **Flexbox** e **CSS Grid** para layouts complexos.
    * **Design Responsivo (Mobile-First)** para adaptação a celulares, tablets e desktops.
    * Variáveis CSS (`:root`) para consistência de design system.
* **JavaScript (ES6+):**
    * Manipulação dinâmica do DOM.
    * Consumo de dados via **Fetch API** (leitura de arquivos JSON locais).
    * Uso de `async/await` para código assíncrono limpo.
    * **Componentização** de Header e Footer via injeção de scripts.

## ⚙️ Funcionalidades Implementadas

* **Página Inicial (Home):** Apresentação da ONG e destaque dinâmico dos principais projetos.
* **Galeria de Projetos:** Listagem completa de todos os projetos cadastrados no sistema.
* **Detalhes do Projeto:** Página dinâmica que lê parâmetros da URL (`?id=...`) para exibir informações detalhadas de um projeto específico (metas, voluntários, descrição).
* **Sistema de Componentes:** Header e Footer carregados dinamicamente em todas as páginas para facilitar a manutenção.

## 📂 Estrutura do Projeto

/ ├── assets/ # Imagens e recursos estáticos 
  ├── data/ # "Banco de dados" simulado (arquivos JSON) 
  ├── includes/ # Fragmentos de HTML (Header/Footer) 
  ├── pages/ # Páginas HTML do sistema 
  ├── scripts/ # Lógica JavaScript (API, Controladores) 
  ├── styles/ # Folhas de estilo CSS 
  └── index.html # Página principal.

## 🛠️ Como Rodar o Projeto

Como este projeto utiliza a **Fetch API** para carregar dados e componentes, ele precisa rodar em um servidor local (devido às políticas de CORS dos navegadores).

### Pré-requisitos

* Um editor de código (recomendado: **VS Code**).
* A extensão **Live Server** instalada no VS Code.

### Passo a Passo

1.  Clone este repositório ou baixe os arquivos.
2.  Abra a pasta do projeto no VS Code.
3.  Clique com o botão direito no arquivo `index.html`.
4.  Selecione a opção **"Open with Live Server"**.
5.  O projeto será aberto automaticamente no seu navegador padrão.

## 🤝 Autor

Projeto desenvolvido por **[CAIO HENRIQUE]**.
