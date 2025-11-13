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
// ... código anterior ...

// Lógica de Alto Contraste
document.addEventListener('click', (e) => {
  if(e.target && e.target.id === 'btn-contraste') {
    document.body.classList.toggle('alto-contraste');
    
    // Salva a preferência do usuário no navegador
    const ativado = document.body.classList.contains('alto-contraste');
    localStorage.setItem('altoContraste', ativado);
  }
});

// Verifica se o usuário já tinha ativado antes ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  const preferencia = localStorage.getItem('altoContraste');
  if (preferencia === 'true') {
    document.body.classList.add('alto-contraste');
  }
});