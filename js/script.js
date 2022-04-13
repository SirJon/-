const mainNav = document.querySelector(".main-nav");
mainNav.classList.remove("main-nav--nojs");

const buttonToggle = document.querySelector(".main-nav__button--toggle");

const buttonTriangle = document.querySelectorAll(".main-nav__button--triangle");
const liTriangle = document.querySelectorAll(".main-nav__item--triangle");

const openMenu = () => {
    if (mainNav.classList.contains("main-nav--open")){
        mainNav.classList.remove("main-nav--open");
        mainNav.classList.add("main-nav--close");
    } else{
        mainNav.classList.remove("main-nav--close");
        mainNav.classList.add("main-nav--open");
    }
}

const openTraiangle = (li) =>{
    if (li.classList.contains("main-nav__item--close")){
        li.classList.remove("main-nav__item--close");
        li.classList.add("main-nav__item--open");
    } else{
        li.classList.remove("main-nav__item--open");
        li.classList.add("main-nav__item--close");
    }
}

buttonToggle.addEventListener("click", openMenu);

buttonTriangle[0].addEventListener("click", function(){
    openTraiangle(liTriangle[0]);
})

buttonTriangle[1].addEventListener("click", function(){
    openTraiangle(liTriangle[1]);
})