/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack(config) {
    config.resolve.modules.push(path.resolve("./src"));
    return config;
  },
};

module.exports = nextConfig;
