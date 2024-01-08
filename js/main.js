const buggerMenu = document.querySelector(".mobileNav")

const mobileNav = document.querySelector(".headerNav")

buggerMenu.onclick = ()=> {
    mobileNav.classList.toggle('open')
}
$(document).ready(function () {

    $('#customerFeedback').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        navText:[
            '<img id="nextSlideBtn" src="./images/arrow-pre.png" alt="">',
            '<img id="preSlideBtn" src="./images/arrow-next.png" alt="">'],
        // margin: 10,
        responsive: {
            0: {
                items: 1,
                nav: true,
                // dots: true,
            },
            765: {
                items: 1,
                nav: true,
                // dots: false,
            }
        }
    })

    $('#videoSlider').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        navText:[
            '<img id="nextSlideBtn" src="./images/arrow-pre.png" alt="">',
            '<img id="preSlideBtn" src="./images/arrow-next.png" alt="">'],
        // margin: 10,
        responsive: {
            0: {
                items: 1,
                nav: false,
                // dots: true,
            },
            765: {
                items: 1,
                nav: true,
                // dots: false,
            }
        }
    })
  
});