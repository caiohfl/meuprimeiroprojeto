// scripts/global.js

// ==============================================================
// 1. FUNÇÃO PARA CARREGAR COMPONENTES (HEADER E FOOTER)
// ==============================================================
async function loadComponent(elementId, url) {
  try {
    const element = document.getElementById(elementId);
    if (element) {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Erro ao carregar ${url}`);
      const html = await response.text();
      element.innerHTML = html;
    }
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadComponent('main-header', '/includes/header.html');
  loadComponent('main-footer', '/includes/footer.html');
  const preferencia = localStorage.getItem('altoContraste');
  if (preferencia === 'true') {
    document.body.classList.add('alto-contraste');
  }
});

// ==============================================================
// 2. LÓGICA DO BOTÃO DE ALTO CONTRASTE
// ==============================================================
document.addEventListener('click', (e) => {
  
  const btn = e.target.closest('#btn-contraste');

  if (btn) {
    document.body.classList.toggle('alto-contraste');
    const ativado = document.body.classList.contains('alto-contraste');
    localStorage.setItem('altoContraste', ativado);
  }
});