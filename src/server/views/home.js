const path = require('path');

homeContent = {

  // html title
  'defaultTitle' : 'simple server',
  // html theme
  'theme' : {
    'color' : '#444'
  },
  // meta tag data
  'meta' : {
    // favicon
    'ico' : 'favicon.ico',
    // open graph
    'og' : {
      'desc'  : 'simple server',
      'url'   : '/',
      'title' : 'simple server',
      'image' : 'favicon.ico'
    }
  },
  // stylesheets
  'styleSheets' : [
    // default stylesheet
    './css/main.css',
  ],
  'javaScripts' : [
    './js/main.js'
  ]
}


module.exports = (req, res) => {

  console.log(homeContent)

  res.render('home.pug', homeContent)

}