let menu  = document.querySelector("#icone-menu");
let barraNav = document.querySelector(".barra-menu");

menu.addEventListener("click", function () {
    barraNav.classList.toggle("active");
});

window.onscroll = () => {
    barraNav.classList.remove("active");
}
