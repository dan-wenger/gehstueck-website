import adapterStatic from "@sveltejs/adapter-static";
import adapter from "@sveltejs/adapter-auto";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapterStatic(),
    paths: {
      base: process.env.NODE_ENV === "production" ? "/gehstueck-website" : "",
    },
  },
};

export default config;
