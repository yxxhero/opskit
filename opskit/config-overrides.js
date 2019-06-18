const { injectBabelPlugin } = require('react-app-rewired');
const path = require('path');
const rewireEslint = require('react-app-rewire-eslint');
const rewireLess = require('react-app-rewire-less');

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

function overrideEslintOptions(options) {
  // do stuff with the eslint options...
  return options;
}

module.exports = function override(config, env) {
   config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
   config = rewireLess.withLoaderOptions({
     javascriptEnabled: true
   })(config, env); 

   config = injectBabelPlugin('transform-decorators-legacy',config);
   config = rewireEslint(config, env, overrideEslintOptions);
   config.resolve.alias = {
     '@': resolve('src')
   }
  return config;
};
