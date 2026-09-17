import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Write plain HTML, CSS, and JS to `out/` so the site can be hosted on
  // Cloudflare Pages (build command: `npm run build`, output directory: `out`).
  output: "export",
};

export default nextConfig;
