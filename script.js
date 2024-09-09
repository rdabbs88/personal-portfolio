function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    /* targeted the 2 const elements, toggle is a built-in javascript function.
    When clicked will either add or remov ethe Open class, which will have some styling*/
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}