$(function () {
// Burger Show Item

let navToggle = $('#navToggle');
let nav = $('#nav_list');
let dark = $('#dark');

navToggle.on('click', function(event) {
    event.preventDefault();
    
    nav.toggleClass('show');
});

$("#close_nav").on('click', function(event) {
    event.preventDefault()
    nav.removeClass("show")
})


// Scroll to top

$("#go-up").click(() => {
    $("html, body").animate({
        scrollTop: 0
    }, "slow")
    
    return false
})

goUpScroll()

$(window).on('scroll resize', () => {
    goUpScroll()
})

function goUpScroll() {
    let topScroll = $(this).scrollTop()

    if (topScroll) {
        $("#go-up").addClass("active")
    } else {
        $("#go-up").removeClass("active")
    }
}

// ReviewsSlider

let reviewsSlider = $("#reviewsSlider")

// console.log($("body").width())

reviewsSlider.slick({
    infinite: true,
    slidesToShow: $("body").width() < 1199.98 ? 1 : 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 500
})

// TeamSlider

let teamSlider = $("#teamSlider")
let isShow = $("body").width() < 1199.98 ? 1 : 3

teamSlider.slick({
    infinite: true,
    slidesToShow: isShow,
    slidesToScroll: isShow,
    arrows: false,
    dots: true,
    // fade: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000
})



// AOS animation

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
})