lucide.createIcons()

function initializeCarousel(id) {
  new Splide(id, {
    type: "loop",
    drag: "free",
    snap: true,
    gap: "0.15em",
    padding: { right: "3rem" },
    focus: 0,
    arrows: false,
    pagination: false,
    fixedWidth: "22em",
    breakpoints: {
      576: {
        fixedWidth: "15em",
      },
      768: {
        fixedWidth: "17em",
      },
    },
  }).mount()
}

const fadeInObserver = new IntersectionObserver(
  (elements, observer) => {
    for (let el of elements) {
      if (el.isIntersecting) {
        el.target.classList.add("fade-in")
        observer.unobserve(el.target)
      }
    }
  },
  {
    threshold: 0.1,
  },
)

const slideInViewObserver = new IntersectionObserver(
  (elements) => {
    for (let el of elements) {
      if (el.isIntersecting) {
        el.target.classList.add("is-visible")
      }
    }
  },
  {
    threshold: 1,
  },
)

function loadWrapper() {
  const wrapper = document.getElementById("wrapper")
  wrapper.classList.add("show")

  initializeCarousel("#trending-now-carousel")
  initializeCarousel("#watch-it-again-carousel")
  initializeCarousel("#new-releases-carousel")

  const elToFadeIn = document.querySelectorAll(".animate-fade-in")
  const slidesToView = document.querySelectorAll(".splide__slide")

  for (let el of elToFadeIn) {
    fadeInObserver.observe(el)
  }

  for (let slide of slidesToView) {
    slideInViewObserver.observe(slide)
  }
}

window.addEventListener("load", () => {
  setTimeout(loadWrapper, 2000)
})

window.matchMedia("(min-width: 768px)").addEventListener("change", () => {
  const toggle = document.getElementById("nav-menu-toggle")
  const dropdown = bootstrap.Dropdown.getInstance(toggle)
  if (dropdown) {
    dropdown.hide()
  }
})
