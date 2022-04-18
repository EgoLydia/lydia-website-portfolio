const next = document.getElementById('next')
const prev = document.getElementById('prev')
const slider = document.getElementById('slider')
const firstChild = slider.children[0]
next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)

function nextSlide() {
    const previousScrollLeft = slider.scrollLeft;
    slider.scrollLeft += firstChild.clientWidth
    if(slider.scrollLeft == previousScrollLeft) {
        slider.append(slider.children[0])
    }
};

function prevSlide() {
    if(slider.scrollLeft == 0) {
        slider.prepend(slider.children[slider.children.length - 1])
    }
    slider.scrollLeft-= firstChild.clientWidth
    
};