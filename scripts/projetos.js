// /scripts/projetos.js

document.addEventListener('DOMContentLoaded', () => {
  carregarTodosProjetos();
});

async function carregarTodosProjetos() {
  const container = document.getElementById('lista-todos-projetos');
  
  // Busca os projetos
  const projetos = await getProjetos(); 
  
  if (!container) return;
  
  if (projetos.length === 0) {
    container.innerHTML = "<p style='text-align:center'>Nenhum projeto encontrado no momento.</p>";
    return;
  }
  
  container.innerHTML = '';

  projetos.forEach(projeto => {
    // AQUI ESTAVA O ERRO: "class-=" agora virou "class="
    // Isso vai fazer o CSS funcionar e o botão ficar laranja!
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