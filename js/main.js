
// scroll to bottom btn
let scrollDown = document.querySelector("header .scroll-down");
scrollDown.onclick = function () {
    window.scrollTo({
        top: (window.innerHeight * 50) / 100,
        behavior: "smooth"
    })
}

// toggle dropdown menu
let dropdownButton = document.querySelectorAll(".dropdown .dropdown-button");
let dropdownMenu = document.querySelectorAll(".dropdown .dropdown-menu");

for (let i = 0; i < dropdownButton.length; i++) {
    dropdownButton[i].onclick = function (e) {
        e.preventDefault();
        this.parentElement.querySelector(".dropdown-menu").classList.toggle("active");
    }
}