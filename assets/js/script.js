document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o ícone do menu, o menu de navegação e os links do menu
    const menuOpener = document.querySelector('.menu-opener');
    const navMenu = document.querySelector('nav');
    const menuLinks = document.querySelectorAll('.menu li a');

    // Adiciona um evento de clique ao ícone do menu
    menuOpener.addEventListener('click', function() {
        // Alterna a classe 'open' no menu de navegação
        navMenu.classList.toggle('open');
    });

    // Adiciona um evento de clique a cada link do menu
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // Fecha o menu de navegação ao clicar em qualquer link
            navMenu.classList.remove('open');
        });
    });
});

function openModal(imageUrl) {
    var modal = document.getElementById("modal");
    var modalImage = document.getElementById("modal-image");
    modal.style.display = "block";
    modalImage.src = imageUrl;
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}