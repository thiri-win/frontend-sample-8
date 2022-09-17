let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header nav");
let header = document.querySelector(".header");

menu.onclick = () => {
    menu.classList.toggle('bi-x-lg');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bi-x-lg');
    navbar.classList.remove('active');

    window.scrollY > 0 ? header.classList.add('active') : header.classList.remove('active');
}