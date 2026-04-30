module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve.fallback,
        fs: false,
      },
    };

    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://brianlovin.com/security',
        permanent: true,
      },
      {
        source: '/about',
        destination: 'https://brianlovin.com/security',
        permanent: true,
      },
    ]
  },
};
