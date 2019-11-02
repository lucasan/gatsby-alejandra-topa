exports.onRouteUpdate = (location) => {
  const transitionDelay = 250

  if (location.hash) {
    setTimeout(() => {
      document.querySelector(`${location.hash}`).scrollIntoView({behavior: "smooth"})
    }, 0);
  }
  else {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, transitionDelay)
  }
}