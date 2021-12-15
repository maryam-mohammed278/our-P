
// scroll to bottom btn
let scrollDown = document.querySelector("header .scroll-down");
scrollDown.onclick = function () {
    window.scrollTo({
        top: (window.innerHeight * 50 ) / 100,
        behavior: "smooth"
    })
}