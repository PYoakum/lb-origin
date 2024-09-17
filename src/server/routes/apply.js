const bodyParser 	    = require('body-parser');

// function used to remove Express headers
const removeTellHeaders = (req, res, next) => {
  res.removeHeader('X-Powered-By');
  next();
}


module.exports = (app, express, cb) => {

    // set body parser for JSON
    app.use(
        bodyParser.urlencoded(
            {
                extended: false
            }
        )
    );
    
    app.use(
        bodyParser.json()
    );

    // remove headers
    app.use(removeTellHeaders);

    // set view directory
    app.set(
        'views', 
        __dirname + '/../views/pug'
    )

    // use pug as view engine
    app.set(
        'view engine', 
        'pug'
    );

    app.use(
        '/fonts/', 
        express.static(
            './public/fonts/'
        )
    );

    app.use(
        '/images/', 
        express.static(
            './public/images/'
        )
    );

    app.use(
        '/css/', 
        express.static(
            './dist/public/css/'
        )
    );

    app.use(
        '/js/', 
        express.static(
            './dist/public/js/'
        )
    );
  
  // set public directory
  //app.use('/', express.static('./dist/public'));

  // callback
  cb()

}