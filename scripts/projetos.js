// /scripts/projetos.js

// Espera o DOM estar pronto
document.addEventListener('DOMContentLoaded', () => {
  carregarTodosProjetos();
});

async function carregarTodosProjetos() {
  // 1. Acha o container no HTML (em pages/projetos.html)
  const container = document.getElementById('lista-todos-projetos');
  
  // 2. Busca os projetos (usando nossa api.js)
  const projetos = await getProjetos(); 
  
  if (!container) {
    console.error("Erro: Container #lista-todos-projetos não encontrado.");
    return;
  }
  
  if (projetos.length === 0) {
    container.innerHTML = "<p>Nenhum projeto encontrado no momento.</p>";
    return;
  }
  
  container.innerHTML = ''; // Limpa o "Carregando..."

  // 3. Itera sobre TODOS os projetos (sem .slice())
  projetos.forEach(projeto => {
    // 4. Reutiliza EXATAMENTE o mesmo HTML de card que já estilizado
    const cardHTML = `
      <article class-="card-projeto">
        <img src="${projeto.imagem_capa}" alt="Capa do projeto ${projeto.titulo}">
        <h3>${projeto.titulo}</h3>
        <p>${projeto.resumo}</p>
        <a href="/pages/projeto-detalhe.html?id=${projeto.id}">Ver Mais</a>
      </article>
    `;
    // 5. Adiciona o card ao container
    container.innerHTML += cardHTML;
  });
}