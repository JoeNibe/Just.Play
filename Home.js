document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper for the image slider
    var imageSlider = new Swiper('#image-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '#image-slider .swiper-pagination',
            clickable: true,
        },
        navigation: false // Explicitly disable navigation for testimonials

    });

    // Initialize Swiper for testimonials
    var testimonialsSwiper = new Swiper('.testimonials-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.testimonials-swiper .swiper-pagination',
            clickable: true,
        },
        navigation: false // Explicitly disable navigation for testimonials

    });
});
