import adapter from "@sveltejs/adapter-vercel";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      runtime: 'nodejs18.x'
    }),
    paths: {
      base: process.env.NODE_ENV === "production" ? "/gehstueck-website" : "",
    },
  },
};

export default config;
