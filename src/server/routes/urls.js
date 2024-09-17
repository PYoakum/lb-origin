const viewUrls = require('./views.js');
const apiUrls = require('../api/index.js')

module.exports = ( app ) => {

  apiUrls(app);
  viewUrls(app);

}