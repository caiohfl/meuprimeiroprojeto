// /scripts/global.js

// Função para buscar e injetar um componente HTML
async function loadComponent(elementId, url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Não foi possível carregar ${url}`);
    }
    const html = await response.text();
    document.getElementById(elementId).innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

// Quando o DOM estiver pronto, carrega os componentes comuns
document.addEventListener('DOMContentLoaded', () => {
  loadComponent('main-header', '/includes/header.html');
  loadComponent('main-footer', '/includes/footer.html');
});