const menuBtn = document.querySelector(".menu-icon")
const navBar = document.querySelector(".vertical-nav")
const focus = document.querySelector(".focus")

menuBtn.addEventListener('click', () => {
    navBar.classList.toggle("menu-ativo")
    focus.classList.toggle("focus-ativo")
})