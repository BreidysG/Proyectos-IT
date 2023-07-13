const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");
const nav = document.querySelector("nav");


menu.addEventListener("click", ()=>{
    navLinks.classList.toggle("visivility");
});

