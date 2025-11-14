// scripts/main.js

carregarProjetosDestaque();

async function carregarProjetosDestaque() {
  const containerProjetos = document.getElementById('projetos-destaque');
  
  if (containerProjetos) {
    const projetos = await getProjetos();
    
    const projetosDestaque = projetos.slice(0, 3); 
    
    containerProjetos.innerHTML = ''; 

    projetosDestaque.forEach(projeto => {
      const cardHTML = `
        <article class="card-projeto">
          <img src="${projeto.imagem_capa}" alt="Capa do projeto ${projeto.titulo}">
          <h3>${projeto.titulo}</h3>
          <p>${projeto.resumo}</p>
          <a href="/pages/projeto-detalhe.html?id=${projeto.id}">Ver Mais</a>
        </article>
      `;
      containerProjetos.innerHTML += cardHTML;
    });
  }
}