/*=========================================
            PORTFOLIO JAVASCRIPT
=========================================*/


/*==========================
      ACTIVE NAVIGATION
==========================*/

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => item.classList.remove("active"));

        link.classList.add("active");

    });

});


/*==========================
      STICKY HEADER
==========================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    header.classList.toggle("scrolled", window.scrollY > 50);

});


/*==========================
      TYPING EFFECT
==========================*/

const typingText = document.getElementById("typing-text");

const words = [

    "Aspiring Software Developer",

    "Python Enthusiast",

    "Java Programmer",

    "Full Stack Learner"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    if(!typingText) return;

    const currentWord = words[wordIndex];

    if(!deleting){

        typingText.textContent = currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;

        }

    }

    else{

        typingText.textContent = currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex = (wordIndex + 1) % words.length;

        }

    }

    setTimeout(typeEffect,deleting ? 50 : 100);

}

typeEffect();


/*==========================
      SCROLL REVEAL
==========================*/

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section=>{

        const revealTop = section.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < window.innerHeight - revealPoint){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();


/*==========================
      BACK TO TOP BUTTON
==========================*/

const topBtn = document.getElementById("topBtn");

if(topBtn){

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 400){

            topBtn.style.display = "block";

        }

        else{

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}


/*==========================
      ACTIVE NAVIGATION
      WHILE SCROLLING
==========================*/

const sections = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});