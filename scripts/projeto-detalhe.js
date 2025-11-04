// /scripts/projeto-detalhe.js

// Espera o HTML carregar
document.addEventListener('DOMContentLoaded', () => {
  carregarDetalhesDoProjeto();
});

async function carregarDetalhesDoProjeto() {
  const container = document.getElementById('detalhe-do-projeto');

  try {
    // 1. LER O ID DA URL
    // Pega os "parâmetros de busca" da URL (ex: ?id=proj-01)
    const params = new URLSearchParams(window.location.search);
    
    // Pega o valor específico do parâmetro "id"
    const projetoId = params.get('id');

    if (!projetoId) {
      throw new Error('ID do projeto não encontrado na URL.');
    }

    // 2. BUSCAR TODOS OS PROJETOS
    const projetos = await getProjetos(); // Função que já existe no api.js

    // 3. ENCONTRAR O PROJETO ESPECÍFICO
    // Usa o método .find() para achar o projeto cujo ID bate com o da URL
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
  document.title = `Nome da ONG - ${projeto.titulo}`;

  // Cria o HTML com todos os detalhes do projeto
  // (Note que usamos as chaves do nosso projetos.json)
  const projetoHTML = `
    <article class="detalhe-artigo">
      <h1>${projeto.titulo}</h1>
      
      <img src="${projeto.imagem_capa}" alt="Imagem de capa do projeto ${projeto.titulo}" class="detalhe-imagem-capa">
      
      <div class="detalhe-conteudo">
        <h2>Sobre o Projeto</h2>
        <p>${projeto.resumo}</p>
        
        <p><strong>Status:</strong> ${projeto.status}</p>
        
        <h2>Nosso Impacto</h2>
        <p>Este projeto precisa de voluntários e doações para continuar ativo.</p>
        
        <div class="detalhe-metas">
          <div class="meta-card">
            <h3>Meta de Arrecadação</h3>
            <p>R$ ${projeto.valor_arrecadado.toFixed(2)} / <strong>R$ ${projeto.meta_arrecadacao.toFixed(2)}</strong></p>
            </div>
          <div class="meta-card">
            <h3>Voluntários</h3>
            <p><strong>${projeto.vagas_voluntarios}</strong> Vagas Abertas</p>
            <a href="#" class="botao-destaque">Quero ser Voluntário</a>
          </div>
        </div>
      </div>
    </article>
  `;

  // Coloca o HTML pronto dentro do container
  container.innerHTML = projetoHTML;
}