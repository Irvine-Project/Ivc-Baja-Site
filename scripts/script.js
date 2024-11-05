function togglemenu(){
    const menu = document.querySelector(".hmenu-container");
    const openHmenuIcon = document.querySelector(".hmenu-icon#open");
    const closeHmenuIcon = document.querySelector(".hmenu-icon#close");

    menu.classList.toggle("show");
    openHmenuIcon.classList.toggle("show");
    closeHmenuIcon.classList.toggle("show");
}