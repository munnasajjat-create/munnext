/* ==========================================
   MunNext Main JavaScript System v1.0
========================================== */


/* ===============================
   MOBILE MENU
================================ */


const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


if(menuBtn && navLinks){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}




/* ===============================
   CLOSE MOBILE MENU AFTER CLICK
================================ */


document.querySelectorAll(".nav-links a")
.forEach(link=>{


    link.addEventListener("click",()=>{

        if(navLinks){

            navLinks.classList.remove("active");

        }

    });


});






/* ===============================
   SCROLL REVEAL ANIMATION
================================ */


const revealElements =
document.querySelectorAll(
".glass-card, .premium-card, .course-card, .badge-card, .student-card"
);



const revealObserver =
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("fade-up");


}


});


},
{

threshold:.15

});



revealElements.forEach(element=>{

revealObserver.observe(element);


});







/* ===============================
   COUNTER ANIMATION
================================ */


const counters =
document.querySelectorAll(".counter");



counters.forEach(counter=>{


counter.innerText="0";


const updateCounter=()=>{


const target =
+ncounter.getAttribute("data-target");


const current =
+counter.innerText;


const increment =
target/100;



if(current < target){


counter.innerText =
Math.ceil(current+increment);


setTimeout(updateCounter,20);


}

else{


counter.innerText=target;


}



};



updateCounter();


});







/* ===============================
   CURRENT YEAR
================================ */


const year =
document.querySelector("#year");


if(year){

year.innerHTML =
new Date().getFullYear();

}







/* ===============================
   BUTTON CLICK EFFECT
================================ */


document.querySelectorAll(".btn")
.forEach(button=>{


button.addEventListener("click",()=>{


button.classList.add("pulse");


setTimeout(()=>{


button.classList.remove("pulse");


},600);



});


});







/* ===============================
   IMAGE LAZY EFFECT
================================ */


const images =
document.querySelectorAll("img");


images.forEach(img=>{


img.loading="lazy";


});







/* ===============================
   PREMIUM CURSOR EFFECT
================================ */


document.addEventListener(
"mousemove",
(e)=>{


document.documentElement.style
.setProperty(
"--mouse-x",
e.clientX+"px"
);


document.documentElement.style
.setProperty(
"--mouse-y",
e.clientY+"px"
);


});
