/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: ".",
  },
  basePath: "/my-appp2",
  assetPrefix: "/my-appp2",
};

module.exports = nextConfig;
