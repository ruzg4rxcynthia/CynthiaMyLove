let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;

const showSlide = (index) => {
    if (index >= totalSlides) slideIndex = 0;
    if (index < 0) slideIndex = totalSlides - 1;
    const offset = -slideIndex * 100;
    document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;
};

document.getElementById('prevBtn').addEventListener('click', () => {
    slideIndex--;
    showSlide(slideIndex);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    slideIndex++;
    showSlide(slideIndex);
});

document.querySelectorAll('.carousel-indicator').forEach((indicator) => {
    indicator.addEventListener('click', () => {
        slideIndex = parseInt(indicator.dataset.slideIndex);
        showSlide(slideIndex);
    });
});

document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

