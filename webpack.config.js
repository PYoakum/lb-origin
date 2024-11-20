const path = require('path');

var pageConfig = {
  resolve : {
    alias: {

      // module aliases
      'render-app'   : path.join(__dirname, './src/client/js/render/render-app.js'),

    }
  }
}

var mainJs = Object.assign({}, pageConfig, {
  mode: "development",
  entry: [
    "./src/client/js/index.js",
  ],
  output: {
    filename: "./public/js/main.js"
  }
})


module.exports = [
  mainJs
]