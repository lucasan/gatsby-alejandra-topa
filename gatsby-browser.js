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

// Push a new event to the Google Tag Manager datalayer
exports.onRouteUpdate = function (_, pluginOptions) {
  if (process.env.NODE_ENV === "production" || pluginOptions.includeInDevelopment) {
    // wrap inside a timeout to ensure the title has properly been changed
    setTimeout(function () {
      window.dataLayer.push({
        event: "gatsby-route-change"
      });
    }, 50);
  }
};

// Fix the Gatsby issue with the manual browser navigation (back and forward buttons)
// a bit hacky but works
exports.onInitialClientRender = () => {
  window.addEventListener('popstate', () =>
    window.location.href = window.location.href
  )
}