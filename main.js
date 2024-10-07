var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img');

menuBar.addEventListener('click',function(){
    if (iconMenu.getAttribute("src") == 'imagem/menu.png') {
        iconMenu.setAttribute("src", "imagem/close.png");
    }else{
        iconMenu.setAttribute("src", "imagem/menu.png")
    }
    menu.classList.toggle('active');
});