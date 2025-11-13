// scripts/main.js

// SPA FIX: Chamamos a função direto, pois o HTML já foi injetado pelo Router
carregarProjetosDestaque();

async function carregarProjetosDestaque() {
  const containerProjetos = document.getElementById('projetos-destaque');
  
  // Verifica se o container existe (se estamos na Home)
  if (containerProjetos) {
    const projetos = await getProjetos();
    
    // Pega os 3 primeiros para destaque
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