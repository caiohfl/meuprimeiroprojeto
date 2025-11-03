// Esta função busca os dados do nosso arquivo JSON
async function getProjetos() {
  try {
    const response = await fetch('../data/projetos.json'); // Atenção ao '../'
    if (!response.ok) {
      throw new Error('Não foi possível carregar os projetos.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return []; // Retorna um array vazio em caso de erro
  }
}