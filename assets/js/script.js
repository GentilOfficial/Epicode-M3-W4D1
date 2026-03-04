lucide.createIcons()

const carouselConfig = {
  type: "loop",
  drag: "free",
  snap: true,
  gap: "0.25em",
  padding: { right: "3rem" },
  focus: 0,
  arrows: false,
  pagination: false,
  perPage: 6,
  breakpoints: {
    576: {
      perPage: 2,
    },
    768: {
      perPage: 3,
    },
    992: {
      perPage: 4,
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

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeIn")
      observer.unobserve(entry.target)
    }
  })
})

const elToAnimate = document.querySelectorAll(".animateFadeIn")

for (let el of elToAnimate) {
  observer.observe(el)
}
