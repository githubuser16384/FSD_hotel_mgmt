let slideIndex = 0;


function showSlides(n) {
    
    let slides = document.querySelectorAll('.slides img');

    
    if (n >= slides.length) {
        slideIndex = 0;
    } 
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

   
    slides.forEach(slide => slide.classList.remove('active'));

   
    slides[slideIndex].classList.add('active');
}


function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Show the initial slide
showSlides(slideIndex);

// Automatically move slides every 5 seconds
setInterval(() => {
    plusSlides(1);
}, 5000);
