/* ==========================================
   MunNext Premium Animation Controller v1.0
========================================== */


/* ===============================
   SCROLL REVEAL SYSTEM
================================ */


const animatedItems = document.querySelectorAll(
".animate,
.reveal,
.fade-up,
.fade-left,
.fade-right"
);



const animationObserver = new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";


}


});


},
{
threshold:0.15
}
);



animatedItems.forEach(item=>{


item.style.opacity="0";

animationObserver.observe(item);


});






/* ===============================
   NUMBER COUNTER SYSTEM
================================ */


function animateCounter(element){


let target =
Number(element.dataset.target);


let count=0;


let speed =
target/100;



let timer =
setInterval(()=>{


count += speed;


if(count>=target){


count=target;

clearInterval(timer);


}



element.innerText =
Math.floor(count);



},20);



}




document.querySelectorAll(".animate-number")
.forEach(counter=>{


animateCounter(counter);


});







/* ===============================
   CARD TILT EFFECT
================================ */


const tiltCards =
document.querySelectorAll(".hover-3d");



tiltCards.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{


const rect =
card.getBoundingClientRect();


const x =
e.clientX-rect.left;


const y =
e.clientY-rect.top;



const rotateX =
((y-rect.height/2)/20)*-1;


const rotateY =
((x-rect.width/2)/20);



card.style.transform =
`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)
`;



});



card.addEventListener(
"mouseleave",
()=>{


card.style.transform="";


});


});






/* ===============================
   ACHIEVEMENT UNLOCK EFFECT
================================ */


function unlockBadge(element){


element.classList.add("unlock");


setTimeout(()=>{


element.classList.remove("unlock");


},1500);



}




/* ===============================
   MUNCOIN EARNING EFFECT
================================ */


function earnMunCoins(amount){


console.log(
"MunCoins Earned: +"+amount
);


}



