// Espera o DOM estar pronto
document.addEventListener('DOMContentLoaded', () => {
  carregarProjetosDestaque();
});

async function carregarProjetosDestaque() {
  // Encontra o local no HTML onde os projetos vão entrar
  const containerProjetos = document.getElementById('projetos-destaque');
  
  if (containerProjetos) {
    const projetos = await getProjetos();
    const projetosDestaque = projetos.slice(0, 2); // Pega só 2 para a home
    
    containerProjetos.innerHTML = ''; // Limpa o container

    projetosDestaque.forEach(projeto => {
      // Cria o HTML do "card" do projeto
      const cardHTML = `
        <article class="card-projeto">
          <img src="${projeto.imagem_capa}" alt="Capa do projeto ${projeto.titulo}">
          <h3>${projeto.titulo}</h3>
          <p>${projeto.resumo}</p>
          <a href="/pages/projeto-detalhe.html?id=${projeto.id}">Ver Mais</a>
        </article>
      `;
      // Adiciona o novo card ao container
      containerProjetos.innerHTML += cardHTML;
    });
  }
}