// scripts/projetos.js

// SPA FIX: Roda imediatamente
carregarTodosProjetos();

async function carregarTodosProjetos() {
  const container = document.getElementById('lista-todos-projetos');
  
  // Se o container não estiver na tela, para por aqui
  if (!container) return;

  const projetos = await getProjetos(); 
  
  if (projetos.length === 0) {
    container.innerHTML = "<p style='text-align:center'>Nenhum projeto encontrado no momento.</p>";
    return;
  }
  
  container.innerHTML = ''; 

  projetos.forEach(projeto => {
    const cardHTML = `
      <article class="card-projeto">
        <img src="${projeto.imagem_capa}" alt="Capa do projeto ${projeto.titulo}">
        <h3>${projeto.titulo}</h3>
        <p>${projeto.resumo}</p>
        <a href="/pages/projeto-detalhe.html?id=${projeto.id}">Ver Mais</a>
      </article>
    `;
    container.innerHTML += cardHTML;
  });
}