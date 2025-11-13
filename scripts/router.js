// scripts/router.js

// 1. Configuração das Rotas
// Mapeia o "Link (#)" para o "Arquivo HTML" e o "Script" que ele precisa
const rotas = {
    "#home": { 
        html: "/pages/home.html", 
        script: "/scripts/main.js" // A Home precisa do main.js para carregar os cards
    },
    "#sobre": { 
        html: "/pages/sobre.html",
        script: null
    },
    "#projetos": { 
        html: "/pages/projetos.html", 
        script: "/scripts/projetos.js" // Precisa do script para listar tudo
    },
    "#cadastro": { 
        html: "/pages/cadastro.html", 
        script: "/scripts/mascaras.js" // Precisa das máscaras e validação
    },
    // Rota padrão (se não tiver hash, vai para home)
    "/": { 
        html: "/pages/home.html", 
        script: "/scripts/main.js" 
    }
};

// 2. Função que faz a mágica (Navegação)
async function navegar() {
    const main = document.querySelector('main');
    
    // Pega o hash da URL (ex: #sobre) ou usa "/" se estiver vazio
    let hash = window.location.hash || "/";

    // Se for a página de detalhes (que tem ?id=...), tratamos diferente
    if (window.location.pathname.includes('projeto-detalhe.html')) {
        return; // Deixa o comportamento normal para a página de detalhes
    }

    const destino = rotas[hash];

    if (!destino) {
        // Se a rota não existe
        main.innerHTML = "<h2 style='text-align:center; padding:5rem;'>Página não encontrada (404)</h2>";
        return;
    }

    try {
        // A. Busca o conteúdo HTML do arquivo (AJAX/Fetch)
        const response = await fetch(destino.html);
        if (!response.ok) throw new Error('Erro ao carregar página');
        const html = await response.text();

        // B. Injeta o HTML dentro da tag <main>
        main.innerHTML = html;

        // C. Carrega o Script específico da página (se houver)
        if (destino.script) {
            // Remove script antigo se houver para não duplicar
            const scriptAntigo = document.querySelector(`script[src="${destino.script}"]`);
            if (scriptAntigo) scriptAntigo.remove();

            // Cria e adiciona o novo script
            const scriptTag = document.createElement('script');
            scriptTag.src = destino.script;
            scriptTag.defer = true;
            document.body.appendChild(scriptTag);
        }

        // Scroll para o topo
        window.scrollTo(0, 0);

    } catch (error) {
        console.error(error);
        main.innerHTML = "<h2 style='text-align:center; padding:5rem;'>Erro ao carregar conteúdo.</h2>";
    }
}

// 3. Ouve as mudanças na URL (quando clica no link)
window.addEventListener('hashchange', navegar);

// 4. Carrega a página inicial quando abre o site
window.addEventListener('DOMContentLoaded', navegar);