const menuBtn = document.querySelector(".menu-icon")
const navBar = document.querySelector(".vertical-nav")
const main = document.querySelector("main")
const footer = document.querySelector("footer")

menuBtn.addEventListener('click', () => {
    navBar.classList.toggle("menu-ativo")
    main.classList.toggle("focus-ativo")
    footer.classList.toggle("focus-ativo-footer")
})