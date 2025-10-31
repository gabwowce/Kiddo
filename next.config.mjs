/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: true,
              svgo: true,
              svgoConfig: { plugins: [{ name: 'removeViewBox', active: false }] },
            },
          },
        ],
        as: '*.js', // svarbu: SVG paverčia į JS komponentą
      },
    },
  },
};

export default nextConfig;
