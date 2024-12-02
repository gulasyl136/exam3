const track = document.querySelector('.carousel-track'); 
const prevButton = document.getElementById('prevButton'); 
const nextButton = document.getElementById('nextButton'); 
const images = document.querySelectorAll('.carousel-image'); 
 
let currentIndex = 0; 
 
function updateCarousel() { 
    const width = images[0].clientWidth; 
    track.style.transform = translateX(-${currentIndex * width}px); 
} 
 
 
nextButton.addEventListener('click', () => { 
    currentIndex = (currentIndex + 1) % images.length;  
    updateCarousel(); 
}); 
 
 
prevButton.addEventListener('click', () => { 
    currentIndex = (currentIndex - 1 + images.length) % images.length;  
    updateCarousel(); 
}); 
 
 
window.addEventListener('resize', updateCarousel);
