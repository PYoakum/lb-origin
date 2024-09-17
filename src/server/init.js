const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const morgan = require('morgan');

module.exports = (http, app, cb) => {

  if(process.env.LOCAL== 'production' ){

    if (cluster.isMaster) {

      console.log(`master ${process.pid} is running...`);

      for (let i = 0; i < numCPUs; i++) {

        cluster.fork();

      }

      cluster.on('exit', (worker, code, signal) => {

        console.log(`worker ${worker.process.pid} died`.red);

      });

    } else {

      let server = http.createServer(app).listen(config.srvPort);

      console.log(`worker ${process.pid} started`);

      cb(server);

    }

  } else if(process.env.LOCAL=='development'){    // if development mode start development mode 
    
    app.use(morgan('dev'))

    let server = http.createServer(app).listen(process.env.PORT);

    console.log(
      `...starting ${String(process.env.LOCAL)} server on port ${String(process.env.PORT)}`
      );
    
    cb(server);
        
  }
}