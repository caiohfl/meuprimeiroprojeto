// scripts/global.js

// ==============================================================
// 1. FUNÇÃO PARA CARREGAR COMPONENTES (HEADER E FOOTER)
// ==============================================================
async function loadComponent(elementId, url) {
  try {
    const element = document.getElementById(elementId);
    // Só tenta carregar se o elemento existir na página (evita erros)
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

// Executa quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
  // Carrega o Menu e o Rodapé
  loadComponent('main-header', '/includes/header.html');
  loadComponent('main-footer', '/includes/footer.html');

  // Verifica se o usuário já tinha ativado o Alto Contraste antes
  const preferencia = localStorage.getItem('altoContraste');
  if (preferencia === 'true') {
    document.body.classList.add('alto-contraste');
  }
});

// ==============================================================
// 2. LÓGICA DO BOTÃO DE ALTO CONTRASTE
// ==============================================================

// Usamos 'click' no documento inteiro porque o botão do header 
// é carregado dinamicamente e pode não existir no primeiro segundo.
document.addEventListener('click', (e) => {
  
  // O truque do CLOSEST:
  // Verifica se clicou no botão OU em qualquer coisa DENTRO dele (ícone, texto)
  const btn = e.target.closest('#btn-contraste');

  if (btn) {
    // 1. Liga ou Desliga a classe no corpo do site
    document.body.classList.toggle('alto-contraste');
    
    // 2. Verifica se ficou ligado (true) ou desligado (false)
    const ativado = document.body.classList.contains('alto-contraste');
    
    // 3. Salva essa escolha no navegador para não perder ao atualizar
    localStorage.setItem('altoContraste', ativado);
  }
});