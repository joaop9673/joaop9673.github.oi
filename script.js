// script.js
document.getElementById('toggle-dark-mode').addEventListener('click', function() {
    // Alterna a classe 'dark-mode' no elemento body
    document.body.classList.toggle('dark-mode');

    // Altera o texto do botão com base no estado atual
    this.textContent = document.body.classList.contains('dark-mode') ? 'Mudar para Modo Claro' : 'Mudar para Modo Escuro';
});
function performSearch() {
    const query = document.getElementById('search-input').value; // Obtém o valor do campo de entrada
    if (query) {
        // Redireciona para a página de resultados de pesquisa
        window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    } else {
        alert("Por favor, insira um termo de pesquisa."); // Alerta se o campo estiver vazio
    }
}
