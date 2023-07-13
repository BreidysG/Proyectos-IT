const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");
const nav = document.querySelector("nav");
const icon = document.querySelector("#menu i");


menu.addEventListener("click", ()=>{
    navLinks.classList.toggle("visivility");
    if(icon.classList.contains("bx")){
            icon.classList.toggle("bx-menu");
            icon.classList.toggle("bx-x");
       }
});

