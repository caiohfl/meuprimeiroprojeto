// /scripts/projeto-detalhe.js

// Espera o HTML carregar
document.addEventListener('DOMContentLoaded', () => {
  carregarDetalhesDoProjeto();
});

async function carregarDetalhesDoProjeto() {
  const container = document.getElementById('detalhe-do-projeto');

  try {
    // 1. LER O ID DA URL
    const params = new URLSearchParams(window.location.search);
    const projetoId = params.get('id');

    if (!projetoId) {
      throw new Error('ID do projeto não encontrado na URL.');
    }

    // 2. BUSCAR TODOS OS PROJETOS
    const projetos = await getProjetos(); // Função que já existe no api.js

    // 3. ENCONTRAR O PROJETO ESPECÍFICO
    const projeto = projetos.find(p => p.id === projetoId);

    if (!projeto) {
      throw new Error('Projeto não encontrado.');
    }

    // 4. RENDERIZAR (DESENHAR) O PROJETO NA TELA
    renderizarProjeto(projeto, container);

  } catch (error) {
    console.error(error);
    container.innerHTML = `<p style="text-align: center; color: red;">Erro ao carregar o projeto. Tente novamente.</p>`;
  }
}

function renderizarProjeto(projeto, container) {
  // Muda o <title> da página para o nome do projeto
  document.title = `Gente do Bem - ${projeto.titulo}`;

  // Cria o HTML LIMPO e ATUALIZADO
  const projetoHTML = `
    <article class="detalhe-artigo">
      
      <h1 style="text-align: center; margin-bottom: 1.5rem; text-transform: none;">${projeto.titulo}</h1>
      
      <img src="${projeto.imagem_capa}" alt="Imagem de capa do projeto ${projeto.titulo}" class="detalhe-imagem-capa">
      
      <div class="detalhe-conteudo">
        <h2>Sobre o Projeto</h2>
        
        <p style="text-align: justify; line-height: 1.6;">${projeto.resumo}</p>
        
        <div class="detalhe-metas">
          
          <div class="meta-card" style="width: 100%; text-align: center;">
            <h3>Voluntários</h3>
            
            <p style="margin-bottom: 0.5rem;">Este projeto precisa de voluntários</p>
            
            <p style="margin-bottom: 1.5rem;"><strong>${projeto.vagas_voluntarios}</strong> Vagas Abertas</p>
            
            <a href="/#cadastro" class="botao-destaque">Quero ser Voluntário</a>
          </div>

        </div>
      </div>
    </article>
  `;

  // Coloca o HTML pronto dentro do container
  container.innerHTML = projetoHTML;
}