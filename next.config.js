/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";
const repository = "https://hangeol-chang.github.io/maputils";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? `/${repository}/` : "/", 
  basePath : !debug ? '/maputils' : "",
  trailingSlash: true,

  images: {
    loader: 'akamai',
    path: '/',
  }
}

module.exports = nextConfig