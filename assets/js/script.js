document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o ícone do menu e o menu de navegação
    const menuOpener = document.querySelector('.menu-opener');
    const navMenu = document.querySelector('nav');

    // Adiciona um evento de clique ao ícone do menu
    menuOpener.addEventListener('click', function() {
        // Alterna a classe 'open' no menu de navegação
        navMenu.classList.toggle('open');
    });
});