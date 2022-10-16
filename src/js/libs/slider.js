
// Подключение дополнительных модулей Swiper поизводиться в {} через запятую.
// Пример: { Navigation, Pagination }.
// Модули: Autoplay, Lazy, Manipulation, Navigation, Pagination, Parallax, Thumbs
import Swiper, { Navigation, Pagination, Parallax, Autoplay, Thumbs } from 'swiper';

const slider = () => {

    // Добавить классы слайдерам
    // swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
    const bildSliders = () => {
        let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
        if (sliders) {
            sliders.forEach(slider => {
                slider.parentElement.classList.add('swiper');
                slider.classList.add('swiper-wrapper');
                for (const slide of slider.children) {
                    slide.classList.add('swiper-slide');
                }
            });
        }
    };

    // Инициализация слайдера
    const initSliders = () => {
        // Добавления классов слайдера
        // при необходимости отключить4
        bildSliders();

        // Перечень слайдеров
        if (document.querySelector('.main-block__slider')) {
            new Swiper('.main-block__slider', {
                // Подключаем модули слайдера
                // для конкретного случая
                modules: [Navigation, Pagination, Parallax, Autoplay],
                /* 
                effect: 'fade',
                */
                autoplay: {
                    dealay: 3000,
                    disableOnInteraction: false,
                },
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 50,
                parallax: true,
                // autoHeight: true,
                speed: 800,
                // touchRatio: 0,
                // simulateTouch: false,
                loop: true,
                // preloadImages:false,
                // lazy: true,

                // Dotts
                pagination: {
                    el: '.controll-main-block__dots',
                    clickable: true,
                },

                // Arrows
                // navigation: {
                //     nextEl: '.about__more .more__item_next',
                //     prevEl: '.about__more .more__item_prev'
                // },

                // Scrollbar
                // scrollbar: {
                //     el: '.swiper-scrollbar',
                //   },

                // Breakpointers; {
                /* 
                    320: {
                        slidesPerView:1,
                        spaceBetween: 0,
                        autoHeight: true,
                    },
                    768: {
                        slidesPerView:3,
                        spaceBetween:20,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    1268: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    }
                 */
                on: {
                    init: function (swiper) {
                        const
                            allSlides = document.querySelector('.fraction-controll__all'),
                            allSlidesItem = document.querySelectorAll('.slider-main-block:not(.swiper-slide-duplicate)');

                        allSlides.innerHTML = allSlidesItem.length < 10 ? `0${allSlidesItem.length}` : allSlidesItem.length;
                    },
                    slideChange: function (swiper) {
                        const
                            currentSlide = document.querySelector('.fraction-controll__current');

                        currentSlide.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;
                    }
                }
            });
        }

        if (document.querySelector('.products-slider')) {
            new Swiper('.products-slider__slider', {
                // Подключаем модули слайдера
                // для конкретного случая
                modules: [Navigation, Pagination, Autoplay],
                /* 
                effect: 'fade',
                */
                autoplay: {
                    dealay: 3000,
                    disableOnInteraction: false,
                },
                observer: true,
                observeParents: true,
                slidesPerView: 4,
                spaceBetween: 30,
                // autoHeight: true,
                speed: 800,
                // touchRatio: 0,
                // simulateTouch: false,
                // loop: true,
                // preloadImages:false,
                // lazy: true,

                // Dotts
                pagination: {
                    el: '.products-slider__dotts',
                    clickable: true,
                    dynamicBullets: true,
                },

                // Arrows
                // navigation: {
                //     nextEl: '.about__more .more__item_next',
                //     prevEl: '.about__more .more__item_prev'
                // },

                // Scrollbar
                // scrollbar: {
                //     el: '.swiper-scrollbar',
                //   },

                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    1370: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                },
                on: {
                }
            });
        }

        if (document.querySelector('.products-new')) {
            new Swiper('.products-new__slider', {
                // Подключаем модули слайдера
                // для конкретного случая
                modules: [Navigation, Pagination, Autoplay],
                /* 
                effect: 'fade',
                */
                autoplay: {
                    dealay: 3000,
                    disableOnInteraction: false,
                },
                observer: true,
                observeParents: true,
                slidesPerView: 3,
                spaceBetween: 30,
                // autoHeight: true,
                speed: 800,
                // touchRatio: 0,
                // simulateTouch: false,
                // loop: true,
                // preloadImages:false,
                // lazy: true,

                // Dotts
                pagination: {
                    el: '.products-new__dotts',
                    clickable: true,
                    dynamicBullets: true,
                },

                // Arrows
                // navigation: {
                //     nextEl: '.about__more .more__item_next',
                //     prevEl: '.about__more .more__item_prev'
                // },

                // Scrollbar
                // scrollbar: {
                //     el: '.swiper-scrollbar',
                //   },

                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    1330: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                },
                on: {
                }
            });
        }

        if (document.querySelector('.images-product')) {
            const thumbsSwiper = new Swiper('.thumbs-images', {
                // Подключаем модули слайдера
                // для конкретного случая
                modules: [Navigation, Pagination, Autoplay, Thumbs],
                /* 
                effect: 'fade',
                */
                observer: true,
                observeParents: true,
                slidesPerView: 4,
                spaceBetween: 16,
                // autoHeight: true,
                speed: 800,
                // touchRatio: 0,
                // simulateTouch: false,
                // loop: true,
                // preloadImages:false,
                // lazy: true,

                // Dotts
                pagination: {
                    el: '.products-new__dotts',
                    clickable: true,
                    dynamicBullets: true,
                },

                // Arrows
                // navigation: {
                //     nextEl: '.about__more .more__item_next',
                //     prevEl: '.about__more .more__item_prev'
                // },

                // Scrollbar
                // scrollbar: {
                //     el: '.swiper-scrollbar',
                //   },

                breakpoints: {
                    992: {
                        slidesPerView: 3,
                    },
                    1330: {
                        slidesPerView: 4,
                        spaceBetween: 16,
                    },
                },
                on: {
                }
            });
            new Swiper('.images-product__slider', {
                // Подключаем модули слайдера
                // для конкретного случая
                modules: [Navigation, Pagination, Autoplay, Thumbs],
                /* 
                effect: 'fade',
                */
                autoplay: {
                    dealay: 3000,
                    disableOnInteraction: false,
                },
                thumbs: {
                    swiper: thumbsSwiper
                },
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 30,
                // autoHeight: true,
                speed: 800,
                // touchRatio: 0,
                // simulateTouch: false,
                // loop: true,
                // preloadImages:false,
                // lazy: true,

                // Arrows
                // navigation: {
                //     nextEl: '.about__more .more__item_next',
                //     prevEl: '.about__more .more__item_prev'
                // },

                // Scrollbar
                // scrollbar: {
                //     el: '.swiper-scrollbar',
                //   },
                on: {
                }
            });
        }

    };


    window.addEventListener("load", function (e) {
        // Запуск инициализации слайдера
        initSliders();
    });



};

export default slider;