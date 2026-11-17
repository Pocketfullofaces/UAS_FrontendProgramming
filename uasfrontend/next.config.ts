import type { NextConfig } from "next";
const config: NextConfig = {
  async redirects() {
    return [
      { source: "/html/index.html", destination: "/", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/html/:page.html", destination: "/:page", permanent: true },
      { source: "/:page.html", destination: "/:page", permanent: true },
    ];
  },
};
export default config;
