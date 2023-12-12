// next.config.mjs
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  experimental: {
    esmExternals: false, // THIS IS THE FLAG THAT MATTERS
  },
  reactStrictMode: true,

  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "www.linkpicture.com",
      "i.postimg.cc",
      "uploadthing.com",
      "utfs.io",
    ],
  },
};
export default config;
