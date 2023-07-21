const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");
const links = document.querySelectorAll(".link");
const nav = document.querySelector("nav");
const icon = document.querySelector("#menu i");
const btnReadMore = document.querySelector("#btn-read-more");
const btnBack = document.querySelector("#btn-back");
const sectionAboutComplete = document.querySelector("#about-complete");
const scroll = ScrollReveal();

//for form:
const nombre = document.getElementById("nombre");
const email = document.getElementById("correo");
const affair = document.getElementById("asunto");
const message = document.getElementById("mensaje");
const form = document.getElementById("form");
const warnings = document.getElementById("warnings");

currentUrl = window.location.href;
let baseUrl = currentUrl.split(".com")[0];
window.history.pushState(null, null, baseUrl);

form.addEventListener("submit", e=>{
    let warning ="";
    let regexEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i
    let entrar = false;
    if(nombre.value.length < 5){
        warning += "El nombre no es valido <br>";
        entrar = true;
    }

    if(!regexEmail.test(email.value)){
        warning += "El email no es valido <br>";
        entrar = true;
    }

    if(affair.value.length < 5){
        warning += "El asunto no es muy corto <br>";
        entrar = true;
    }

    if(message.value.length < 20 ){
        warning += "El mensaje es muy corto <br>";
        entrar = true;
    }

    if(entrar){
        warnings.innerHTML = warning;
        e.preventDefault();
    }
});

// see section about complete: 
btnReadMore.addEventListener("click", function(){
    showSection("about-complete", true);
});

btnBack.addEventListener("click", function(){
    showSection("about-complete", false);
});

//See menu: 
menu.addEventListener("click", ()=>{
    navLinks.classList.toggle("visivility");
    if(icon.classList.contains("bx")){
            icon.classList.toggle("bx-menu");
            icon.classList.toggle("bx-x");
       }
    navLinks.addEventListener("click", ()=>{
        if(navLinks.classList.contains("visivility")){
            navLinks.classList.toggle("visivility");
            icon.classList.toggle("bx-menu");
            icon.classList.toggle("bx-x");
        }
    })
});

// Links section about Complete
function showSection(section, condition){
    if(condition){
        document.querySelectorAll("section").forEach(function(seccion){
            if(seccion.classList.contains(section)){
                seccion.style.display = "flex";
            }else{
                seccion.style.display = "none";
            } 
        });
        
        links.forEach(function(link){
            if(link.id != "link-about"){
                link.classList.add("link-about-section");
            }else{
                link.classList.add("link-about");
            }  
       });
    }else{
        document.querySelectorAll("section").forEach(function(seccion){
            if(seccion.id == "contact"){
                seccion.style.display = "grid";
            }else if(seccion.id == "about-complete"){
                seccion.style.display = "none";
            }else {
                seccion.style.display = "block";
            }
        });

        links.forEach(function(link){
            if(link.id != "link-about"){
                link.classList.remove("link-about-section");
            }
       });
    }
  
}


//Scroll Reveal
scroll.reveal("nav", {
    duration: 2000,
    delay: 200,
    origin: 'top',
    distance: '80px',
});

scroll.reveal(".home, .about, .services, .contact", {
    duration: 2000,
    delay: 200,
    origin: 'bottom',
    distance: '80px',
});
scroll.reveal(".home-container, .about-text, .services-text, .services-card, .contact-text-container, .contact-info-box", {
    duration: 2000,
    delay: 200,
    origin: 'left',
    distance: '80px',
});