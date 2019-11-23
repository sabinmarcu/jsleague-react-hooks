const path = require('path');
const origin = require('remote-origin-url');

const gitPath = path.resolve(__dirname, '../../.git/config');
const url = origin.sync(gitPath).match(/\/([^\.]+)\./)[1];

module.exports = {
  plugins: ['gatsby-theme-mdx-deck'],
  pathPrefix: `/${url}`,
};
