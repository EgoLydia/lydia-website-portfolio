const next = document.getElementById('next')
const prev = document.getElementById('prev')
const slider = document.getElementById('slider')
const firstChild = slider.children[0]
next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)

function nextSlide() {
    slider.scrollLeft+= firstChild.clientWidth
};

function prevSlide() {
    slider.scrollLeft-= firstChild.clientWidth
};