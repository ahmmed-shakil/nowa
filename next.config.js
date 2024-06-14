/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  // basePath: isProd ? '/nowa/preview' : undefined,
  basePath: isProd ? "" : undefined,
  assetPrefix: isProd ? "https://nowa-delta.vercel.app/" : undefined,
  images: {
    loader: "imgix",
    path: "/",
  },
};

module.exports = nextConfig;
