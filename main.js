const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");
const links = document.querySelectorAll(".link");
const nav = document.querySelector("nav");
const icon = document.querySelector("#menu i");
const btnReadMore = document.querySelector("#btn-read-more");
const btnBack = document.querySelector("#btn-back");
const sectionAboutComplete = document.querySelector("#about-complete");
const btnEntrar = document.getElementById("entrar");
const scroll = ScrollReveal();
const containerServices = document.querySelector('.services-card-container');

const services = [
    {
        icon: 'bx bx-signal-5',
        title: 'Minutos y SMS a gran escala',
        description: 'Proporcionamos servicios de minutos y mensajes de texto, a través de Internet, permitiendo que las pymes se comuniquen eficientemente con clientes y prestar un excelente servicio al cliente o telemercadeo de sus servicios. Esto amplía su alcance y les brinda oportunidades de crecimiento global.'
    },
    {
        icon: 'bx bx-sort-up',
        title: 'Software de facturación electrónica y contabilidad',
        description: 'Ofrecemos soluciones de software que simplifican la emisión de facturas y la gestión contable de las pymes. Estas herramientas ayudan a las empresas a mantener registros precisos, agilizar los procesos financieros y cumplir con los requisitos legales, sin preocuparse por la complejidad de la facturación y su contabilidad.'
    },
    {
        icon: 'bx bxs-business',
        title: 'Desarrollo de CRM personalizado',
        description: 'Creamos soluciones de gestión de relaciones con los clientes (CRM) adaptadas a las necesidades de cada empresa. Estas herramientas permiten administrar eficientemente interacciones, aumentar las ventas y fomentar relaciones comerciales sólidas.'
    },
    {
        icon: 'bx bx-support',
        title: 'Soporte técnico especializado',
        description: 'Brindamos servicios de soporte técnico integral para resolver problemas relacionados con la tecnología. Nuestro equipo de expertos está disponible para asistir a las empresas de forma remota o presencial segun el caso y resolver las incidencias, configurar los dispositivos y brindar orientación. Esto permite minimizar los tiempos de inactividad.'
    },
    {
        icon: 'bx bx-network-chart',
        title: 'Redes y conectividad',
        description: 'Diseñamos, implementamos y mantenemos redes informáticas sólidas, asegurando una conectividad confiable y segura.'
    },
    {
        icon: 'bx bx-shape-square',
        title: 'Hosting y dominio',
        description: 'Proporcionamos servicios de venta de hosting y dominio, administración y soporte de páginas web. Promoviendo su presencia en la web, para expandir su alcance y atraer a más clientes.'
    },
]

//for services card:

services.forEach(service => {

    
    const card = document.createElement('div');
    card.classList.add('services-card');
  
    const icon = document.createElement('div');
    icon.classList.add('services-card-icon');
    
    const iconElement = document.createElement('i');
    const iconClasses = service.icon.split(' ');
    iconClasses.forEach(className => {
    iconElement.classList.add(className); 
    });
    icon.appendChild(iconElement);

    const title = document.createElement('h2');
    title.textContent = service.title;
  
    const description = document.createElement('p');
    description.textContent = service.description;
  
    card.appendChild(icon);
    card.appendChild(title);
    card.appendChild(description);
    containerServices.appendChild(card);
  });

//for form:
const nombre = document.getElementById("nombre");
const email = document.getElementById("correo");
const affair = document.getElementById("asunto");
const message = document.getElementById("mensaje");
const form = document.getElementById("form");
const warnings = document.getElementById("warnings");

grecaptcha.ready(function() {
    grecaptcha.execute('6LfeXk8nAAAAAMGQJlZA3vQq7dIwYeg6vejcvcSe', { action: 'formulario' }).then(function(respuesta_token) {
      const iToken = document.getElementById("token");
      iToken.value= respuesta_token;
    });
  });

form.addEventListener("submit", e =>{
    let warning = "";
    let regexEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    let entrar = false;

    if (nombre.value.length < 5) {
      warning += "El nombre no es válido <br>";
      entrar = true;
    }

    if (!regexEmail.test(email.value)) {
      warning += "El email no es válido <br>";
      entrar = true;
    }

    if (affair.value.length < 5) {
      warning += "El asunto no es muy corto <br>";
      entrar = true;
    }

    if (message.value.length < 20) {
      warning += "El mensaje es muy corto <br>";
      entrar = true;
    }

    if (entrar) {
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




