/* ===========================================
PORTFOLIO JAVASCRIPT
Samuel Berchmans Portfolio
=========================================== */

/* ==========================
LOADER
========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    },800);

});


/* ==========================
TYPING EFFECT
========================== */

const words = [

    "AI & Data Science Student",

    "Google Student Ambassador",

    "AI Enthusiast",

    "Graphic Designer",

    "Video Editor",

    "Open Source Learner"

];

let wordIndex = 0;

let letterIndex = 0;

let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent = currentWord.substring(0,letterIndex);

        letterIndex++;

        if(letterIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }

    else{

        typing.textContent = currentWord.substring(0,letterIndex);

        letterIndex--;

        if(letterIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 45 : 90);

}

typeEffect();


/* ==========================
SCROLL REVEAL
========================== */

const reveals = document.querySelectorAll("section");

function revealSection(){

    reveals.forEach(section=>{

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll",revealSection);

revealSection();


/* ==========================
SMOOTH ACTIVE NAV
========================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop-120;

        const height = section.clientHeight;

        if(pageYOffset >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});


/* ==========================
BACK TO TOP BUTTON
========================== */

const topBtn = document.createElement("div");

topBtn.id="topBtn";

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="flex";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


/* ==========================
PROJECT CARD HOVER
========================== */

const cards=document.querySelectorAll(".project");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const x=e.offsetX;

        const y=e.offsetY;

        card.style.transform=

        `rotateX(${-(y-150)/25}deg)
         rotateY(${(x-150)/25}deg)
         translateY(-12px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="rotateX(0deg) rotateY(0deg)";

    });

});


/* ==========================
RANDOM GLOW EFFECT
========================== */

setInterval(()=>{

    document.querySelector(".logo").style.textShadow=

    `0 0 ${Math.random()*25}px cyan`;

},500);


/* ==========================
CONSOLE MESSAGE
========================== */

console.log("%cWelcome Recruiter 👋",

"font-size:28px;color:#00e5ff;font-weight:bold;");

console.log("%cPortfolio Designed by Samuel Berchmans A",

"font-size:18px;color:white;");


/* ==========================
END
========================== */