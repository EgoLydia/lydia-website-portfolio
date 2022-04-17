const next = document.getElementById('next')
const prev = document.getElementById('prev')
const slider = document.getElementById('slider')
const firstChild = slider.children[0]
next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)

function nextSlide() {
    const width = firstChild.clientWidth * 4;
    const difference = width - slider.scrollLeft;
    if(difference < 2) {
        slider.append(slider.children[0])
    }
    slider.scrollLeft+= firstChild.clientWidth
};

function prevSlide() {
    if(slider.scrollLeft == 0) {
        slider.prepend(slider.children[slider.children.length - 1])
    }
    slider.scrollLeft-= firstChild.clientWidth
};