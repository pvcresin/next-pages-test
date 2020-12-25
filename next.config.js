const basePath = "/next-pages-test";

module.exports = {
  assetPrefix: process.env.NODE_ENV === "production" ? basePath : "",
  basePath: process.env.NODE_ENV === "production" ? basePath : "",
  trailingSlash: true,
};
