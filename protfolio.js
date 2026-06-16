// Smooth scrolling for navigation links

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        let target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior:"smooth"
        });

    });

});



// Navbar background change on scroll

window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.background = "#050505";

    }
    else{

        header.style.background = "#111";

    }

});



// Simple typing effect

const aboutSection = document.querySelector(".about-container");


window.addEventListener("scroll",()=>{

    let position = aboutSection.getBoundingClientRect().top;

    let screen = window.innerHeight;


    if(position < screen - 100){

        aboutSection.style.opacity="1";
        aboutSection.style.transform="translateY(0)";

    }

});