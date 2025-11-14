// scripts/mascaras.js

document.addEventListener('DOMContentLoaded', () => {
  
  // Seleção dos elementos
  const inputCPF = document.getElementById('cpf');
  const inputTelefone = document.getElementById('telefone');
  const inputCEP = document.getElementById('cep');
  const form = document.getElementById('form-completo');

  // ===========================================================
  // 1. MÁSCARAS DE INPUT (Formatação em tempo real)
  // ===========================================================

  // MÁSCARA CPF (000.000.000-00)
  if(inputCPF) {
    inputCPF.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, "");
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      e.target.value = value;
    });
  }

  // MÁSCARA TELEFONE ( (00) 00000-0000 )
  if(inputTelefone) {
    inputTelefone.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, "");
      value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
      value = value.replace(/(\d)(\d{4})$/, "$1-$2");
      e.target.value = value;
    });
  }

  // MÁSCARA CEP ( 00000-000 )
  if(inputCEP) {
    inputCEP.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, "");
      value = value.replace(/^(\d{5})(\d)/, "$1-$2");
      e.target.value = value;
    });
  }

  // ===========================================================
  // 2. VALIDAÇÃO DO FORMULÁRIO (Manipulação do DOM)
  // ===========================================================

  if(form) {
    form.addEventListener('submit', (e) => {
      // Impede o envio padrão para podermos validar
      e.preventDefault();
      
      let temErro = false;

      // Campos para validar
      const nomeInput = document.getElementById('nome');
      
      // 1. Limpa mensagens de erro anteriores
      limparErros();

      // 2. Validação de NOME (Precisa ter pelo menos 2 palavras)
      if (nomeInput.value.trim().split(' ').length < 2) {
        mostrarErro(nomeInput, "Por favor, digite seu nome completo (Nome e Sobrenome).");
        temErro = true;
      }

      // 3. Validação de CPF (Precisa ter 14 caracteres com a máscara)
      if (inputCPF && inputCPF.value.length < 14) {
        mostrarErro(inputCPF, "O CPF está incompleto.");
        temErro = true;
      }

      // 4. Validação de TELEFONE (Mínimo 14 caracteres: (11) 9...)
      if (inputTelefone && inputTelefone.value.length < 14) {
        mostrarErro(inputTelefone, "O telefone está incompleto.");
        temErro = true;
      }

      // SE NÃO HOUVER ERROS:
      if (!temErro) {
        alert('Cadastro realizado com sucesso! Bem-vindo ao time.');
       
        window.location.href = '/'; 
      }
    });
  }

  // --- Funções Auxiliares de Manipulação do DOM ---

  function mostrarErro(input, mensagem) {
    const erroElemento = document.createElement('span');
    erroElemento.className = 'msg-erro';
    erroElemento.innerText = mensagem;
    
    erroElemento.style.color = '#d9534f'; 
    erroElemento.style.fontSize = '0.85rem';
    erroElemento.style.marginTop = '5px';
    erroElemento.style.display = 'block';
    erroElemento.style.fontWeight = 'bold';
    
    input.style.border = '1px solid #d9534f';
 
    input.parentElement.appendChild(erroElemento);
  }

  function limparErros() {
    const erros = document.querySelectorAll('.msg-erro');
    erros.forEach(el => el.remove());

    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
      input.style.border = '1px solid #ccc';
    });
  }

});