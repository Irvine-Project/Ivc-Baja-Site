function togglemenu(){
    const openHmenuIcon = document.querySelector(".hmenu-icon#open");
    const closeHmenuIcon = document.querySelector(".hmenu-icon#close");
    const slideIn = document.querySelector(".slide-in");

    openHmenuIcon.classList.toggle("show");
    closeHmenuIcon.classList.toggle("show");
    slideIn.classList.toggle("showSlideIn");
}

function shuffleChildren(elem) {
    for (let i = elem.children.length; i >= 0; i--) {
        elem.appendChild(elem.children[Math.random() * i | 0]);
    }
}

document.querySelector("#toggle").addEventListener("click", e => {
    document.querySelectorAll(".slide-in").forEach(item => item.classList.toggle("showSlideIn"));
});