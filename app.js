const menuabrir = document.querySelector(".contenedor__imgMenu");
const menumostrar = document.querySelector(".contenedor__mobile--nav");
const menucerrar = document.querySelector(".img__menucerrar--nav");

menuabrir.addEventListener('click',toggleManue)
menucerrar.addEventListener('click', toggleManue)

function  toggleManue(params) {
   menumostrar.classList.toggle("activar__menu--js");   
};