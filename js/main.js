
// scroll to bottom btn
let scrollDown = document.querySelector("header .scroll-down");
if (scrollDown){
    scrollDown.onclick = function () {
        window.scrollTo({
            top: (window.innerHeight * 50) / 100,
            behavior: "smooth"
        })
    }
}

// toggle dropdown menu
let dropdownButton = document.querySelectorAll(".dropdown .dropdown-button");
let dropdownMenu = document.querySelectorAll(".dropdown .dropdown-menu");

for (let i = 0; i < dropdownButton.length; i++) {
    dropdownButton[i].onclick = function (e) {
        e.preventDefault();
        for (let v = 0; v < dropdownMenu.length; v++) {
            if (v == i)
            continue;
            dropdownMenu[v].classList.remove("active")
        }
        this.parentElement.querySelector(".dropdown-menu").classList.toggle("active");
    }
}

// Image Preview
let imgPreview = document.querySelector(".image-preview")
let imgsOfGallery = document.querySelectorAll(".gallery img")
imgsOfGallery.forEach(img => {
    img.onclick = function () {
        let src = this.getAttribute("src");
        imgPreview.querySelector("img").setAttribute("src", src);
        imgPreview.style.zIndex = "3"
        imgPreview.style.opacity = "1"
        document.body.style.overflow = "hidden"
    }
});
imgPreview.querySelector("button").onclick = function () {
    imgPreview.style.opacity = "0"
    imgPreview.style.zIndex = "-3"
    document.body.style.overflow = "auto"
}
