async function getProjetos() {
  try {
    const response = await fetch('/data/projetos.json'); 
    if (!response.ok) {
      throw new Error('Não foi possível carregar os projetos.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return []; 
  }
}