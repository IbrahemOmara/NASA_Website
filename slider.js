// لكل كارت نعمل سلايدر خاص بيه
document.querySelectorAll('.project-card').forEach(card => {
    const slides = card.querySelectorAll('.project-slide');
    let currentSlide = 0;
    let paused = false;

    function nextSlide() {
    if (!paused) {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }
    }

    let interval = setInterval(nextSlide, 2000);

    card.dataset.sliderInterval = interval;

    card.addEventListener('mouseenter', () => paused = true);
    card.addEventListener('mouseleave', () => paused = false);
});

function flipCard(card) {
    card.classList.toggle("flipped");
}

function pauseSlider(card) {
    card.dataset.paused = "true";
}

function resumeSliderAndReset(card) {
    card.dataset.paused = "false";
    card.classList.remove("flipped");
}