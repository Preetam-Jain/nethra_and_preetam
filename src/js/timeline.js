import Swiper from 'swiper/swiper-bundle.min.mjs';
import 'swiper/swiper-bundle.min.css';

const timelineSwiper = new Swiper('.timeline .swiper-container', {
    direction: 'vertical',
    loop: false,
    speed: 1600,
    effect: 'card',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        let year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
        return '<span class="' + className + '">' + year + '</span>';
      }
    },
    mousewheel: {
        enabled: true
    }
});

let swiperWrapper = document.getElementsByClassName('swiper-wrapper')[0];

let slides = []

for (let i = 0; i < 22; i++) {
    slides.push(document.getElementById(`${i}`));
}
console.log(`first slides: ${slides}`);

let head = 0;
let tail = 9;
let currentSlide = 0;

for (let i = 10; i < slides.length; i++) {
    console.log(`removing: ${slides[i]}`);
    slides[i].remove();
}


timelineSwiper.update();

timelineSwiper.on('slideChangeTransitionEnd', function() {
    let slidesMoved = timelineSwiper.activeIndex - timelineSwiper.previousIndex;
    if (slidesMoved > 0) {
        currentSlide += slidesMoved;
        if (timelineSwiper.activeIndex === 9 && currentSlide != slides.length - 1) {
            slides[head].remove();
            head++;
            timelineSwiper.updateSlides();
            swiperWrapper.appendChild(slides[tail + 1]);
            tail++;
            timelineSwiper.updateSlides();
            timelineSwiper.activeIndex--;
            timelineSwiper.update();
        }
    } else {
        currentSlide += slidesMoved;
        if (timelineSwiper.activeIndex === 0 && currentSlide != 0) {
            slides[tail].remove();
            tail--;
            timelineSwiper.updateSlides();
            swiperWrapper.prepend(slides[head - 1]);
            head--;
            timelineSwiper.updateSlides();
            timelineSwiper.activeIndex++;
            timelineSwiper.update();
        }
    }
});
  