const { injectBabelPlugin } = require('react-app-rewired');
const rewireEslint = require('react-app-rewire-eslint');

function overrideEslintOptions(options) {
  // do stuff with the eslint options...
  return options;
}

module.exports = function override(config, env) {
   config = injectBabelPlugin(
       ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
       config
       ); 
   config = injectBabelPlugin('transform-decorators-legacy',config);
   config = rewireEslint(config, env, overrideEslintOptions);
  return config;
};
