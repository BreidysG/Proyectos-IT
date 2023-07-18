const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");
const links = document.querySelectorAll(".link");
const nav = document.querySelector("nav");
const icon = document.querySelector("#menu i");
const btnReadMore = document.querySelector("#btn-read-more");
const btnBack = document.querySelector("#btn-back");
const sectionAboutComplete = document.querySelector("#about-complete");
const scroll = ScrollReveal();
btnReadMore.addEventListener("click", function(){
    showSection("#about-complete", true);
});

btnBack.addEventListener("click", function(){
    showSection("#about-complete", false);
});


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

function showSection(section, condition){
    if(condition){
        document.querySelectorAll("section").forEach(function(section){
            section.style.display = "none";
        });
        document.querySelector(section).style.display = "flex";
        window.history.pushState(null, null, section);
       
        links.forEach(function(link){
            if(link.id != "link-about"){
                link.classList.add("link-about-section");
            }else{
                link.classList.add("link-about");
            }
            
       })
    }else{
        document.querySelectorAll("section").forEach(function(section){
            if(section.id == "contact"){
                section.style.display = "grid";
            }else{
                section.style.display = "block";
            }
            
        });

        document.querySelector(section).style.display = "none";

        links.forEach(function(link){
            if(link.id != "link-about"){
                link.classList.remove("link-about-section");
            }
       })
        window.history.back();
    }
   
}

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