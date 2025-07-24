import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    turbopack: {
        rules: {
            '*.svg': {
                loaders: ['@svgr/webpack'],
                as: '*.js',
            },
        },
    },
    reactStrictMode: true,
    images: {
        loader: "akamai",
        path: "/",
    },
};

export default nextConfig;
