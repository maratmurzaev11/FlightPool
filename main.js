let fadeIns = document.querySelectorAll(".fadeIn");
document.onscroll = ()=>{

    Array.from(fadeIns).forEach(el=>{
        if(el.getBoundingClientRect().y<window.innerHeight/2){
            el.classList.contains("fadeInActive")?"": el.classList.add("fadeInActive");
        }
    })
}





let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("sale");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    for (i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += "active";
}
