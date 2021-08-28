'use strict';

require('./src/assets/scss/init.scss');
require('./static/css/prismjs/theme.min.css');

exports.shouldUpdateScroll = ({
    routerProps: { location },
    getSavedScrollPosition,
  }) => {
    const { pathname } = location
    // list of routes for the scroll-to-top-hook
    const scrollToTopRoutes = [`/privacy-policy`, `/page-2`]
    // if the new route is part of the list above, scroll to top (0, 0)
    if (scrollToTopRoutes.indexOf(pathname) !== -1) {
      window.scrollTo(0, 0)
    }
  
    return false
  }