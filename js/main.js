const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
searchEl.addEventListener('click', function() {
    searchEl.focus();    
});

searchInputEl.addEventListener('focus', function() {
   searchEl.classList.add('focusd');
   searchInputEl.setAttribute('placeholder', '통합검색'); 
});


const badges1 = document.querySelector("header .badges");

window.addEventListener("scroll", _.throttle(function(){
    console.log('scroll!');

    if(window.scrollY > 500)
    {
        // badges1.style.display = 'none';
        gsap.to(badges1, .6, {
            opacity:    0,
            display:    'none'
        });
    }
    else
    {
        // badges1.style.display = 'block';
        gsap.to(badges1, .6, {
            opacity:    1,
            display:    'block'
        });
    }
}, 300));

// 순차적 애니메이션
const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl, {
        delay: (index +1) * .7,
        opacity: 1
    });
});

// SwiperJs를 이용한 슬라이더 구현
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true, 
    loop: true 
});

new Swiper('.promotion .swiper-container', {
    slidesPerView: 3, 
    spaceBetween: 10, 
    centeredSlides: true, 
    loop: true, 

autoplay: { 
    delay: 5000 
},

pagination: { 
    el: '.promotion .swiper-pagination', 
    clickable: true 
},

navigation: { 
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
}
});