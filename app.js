const menuabrir = document.querySelector(".contenedor__imgMenu");
const menucerrar = document.querySelector(".contenedor__mobile--nav");

menuabrir.addEventListener('click',toggleManue)
menucerrar.addEventListener('click', toggleManue)

function  toggleManue(params) {
   menucerrar.classList.toggle("activar__menu--js");   
};