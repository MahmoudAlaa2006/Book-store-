
const images = document.querySelectorAll(".screen-img");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
let index = 0;

// Initialize first image visible
images[index].classList.add("active");

function showNext() {
    let current = images[index];
    let nextIndex = (index + 1) % images.length;
    let next = images[nextIndex];

    next.style.left = "100%";
    next.classList.add("active");

    current.style.left = "-100%";

    // Slide next in
    next.style.left = "0";

    setTimeout(() => {
        current.classList.remove("active");
    }, 800);

    index = nextIndex;
}

function showPrev() {
    let current = images[index];
    let prevIndex = (index - 1 + images.length) % images.length;
    let prev = images[prevIndex];

    prev.style.left = "-100%";
    prev.classList.add("active");

    current.style.left = "100%";

    prev.style.left = "0";

    setTimeout(() => {
        current.classList.remove("active");
    }, 800);

    index = prevIndex;
}

rightArrow.onclick = showNext;
leftArrow.onclick = showPrev;

setInterval(showNext, 5000);
