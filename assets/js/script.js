lucide.createIcons()

const carouselConfig = {
  type: "loop",
  drag: "free",
  snap: true,
  gap: "0.15em",
  padding: { right: "3rem" },
  focus: 0,
  arrows: false,
  pagination: false,
  fixedWidth: "20em",
  breakpoints: {
    576: {
      fixedWidth: "15em",
    },
    768: {
      fixedWidth: "17em",
    },
  },
}

const trendingNowCarousel = new Splide("#trending-now-carousel", carouselConfig)
const watchItAgainCarousel = new Splide(
  "#watch-it-again-carousel",
  carouselConfig,
)
const newReleasesCarousel = new Splide("#new-releases-carousel", carouselConfig)

trendingNowCarousel.mount()
watchItAgainCarousel.mount()
newReleasesCarousel.mount()

const fadeInObserver = new IntersectionObserver(
  (elements, observer) => {
    for (let el of elements) {
      if (el.isIntersecting) {
        el.target.classList.add("fadeIn")
        observer.unobserve(el.target)
      }
    }
  },
  {
    threshold: 0.2,
  },
)

const slideInViewObserver = new IntersectionObserver(
  (elements) => {
    for (let el of elements) {
      if (el.isIntersecting) {
        el.target.classList.add("in-view")
      } else {
        el.target.classList.remove("in-view")
      }
    }
  },
  {
    threshold: 0.9,
  },
)

const elToFadeIn = document.querySelectorAll(".animateFadeIn")
const slidesToView = document.querySelectorAll(".splide__slide")

for (let el of elToFadeIn) {
  fadeInObserver.observe(el)
}

for (let slide of slidesToView) {
  slideInViewObserver.observe(slide)
}
