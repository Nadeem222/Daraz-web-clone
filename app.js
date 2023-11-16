let slideIndex = 0;

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slide");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); 
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

document.addEventListener("DOMContentLoaded", showSlides);



var saleEndTime = new Date('November 17, 2023 12:00:00 GMT+0000');

function updateTimer(){
    var currenttimer = new Date ();

    var differnceTimer = saleEndTime - currenttimer;

    if(differnceTimer > 0 ){
        var hours = Math.floor(differnceTimer / (1000 * 60 * 60));

        var minutes = Math.floor((differnceTimer % (1000* 60 * 60  )) / (1000 * 60));
        var second = Math.floor((differnceTimer % (1000 * 60 )) / 1000);

        document.getElementById("hours").innerHTML =  hours
        document.getElementById("minutes").innerHTML =  minutes
        document.getElementById("second").innerHTML =  second
    }
}

updateTimer();

setInterval(updateTimer, 1000);