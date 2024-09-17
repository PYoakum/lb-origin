const path = require('path');

homeContent = {

  // html title
  'title' : 'Hello World',
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
      'desc'  : 'Hello World',
      'url'   : '/',
      'title' : 'Hello World',
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

  res.render('home.pug', homeContent)

}