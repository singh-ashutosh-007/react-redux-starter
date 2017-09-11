//Dynamic imports are not supported by ES6 so using require instead of import here.
if(process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod');
}else {
  module.exports = require('./configureStore.dev');
}
