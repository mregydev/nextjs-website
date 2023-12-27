const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  domains: ['ceezer-public-assets.s3.eu-central-1.amazonaws.com'],

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
