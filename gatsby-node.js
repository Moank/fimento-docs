/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

// NOTE: required because redoc is forcing core-js version and
// gatsby is incompatible with that https://github.com/gatsbyjs/gatsby/issues/17136#issuecomment-568036690
exports.onCreateWebpackConfig = ({ actions, getConfig, stage }) => {
  const config = getConfig();

  const coreJs2config = config.resolve.alias['core-js'];
  delete config.resolve.alias['core-js']
  config.resolve.alias[`core-js/modules`] = `${coreJs2config}/modules`
  try {
    config.resolve.alias[`core-js/es`] = path.dirname(require.resolve('core-js/es'));
  } catch (err) { }
  actions.replaceWebpackConfig(config);
};