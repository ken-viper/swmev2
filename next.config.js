/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  swcMinify: true,
  // https://nextjs.org/docs/architecture/nextjs-compiler#emotion
  compiler: {
    emotion: true,
  },
  async redirects() {
    return [
      {
        source: '/invest',
        destination: '/token-sale',
        permanent: true,
      },
      {
        source: '/hustlers',
        destination: '/swap-meet/hustlers',
        permanent: true,
      },
      {
        source: '/gangsta-party',
        destination: '/swap-meet/hustlers',
        permanent: true,
      },
      {
        source: '/inventory',
        destination: '/swap-meet/inventory',
        permanent: true,
      },
      {
        source: '/hustlers/:id/flex',
        destination: '/hustlers/:id',
        permanent: true,
      },
      {
        source: '/dope',
        destination: '/swap-meet/inventory',
        permanent: true,
      },
      {
        source: '/mint',
        destination: '/hustlers/mint',
        permanent: false,
      },
      {
        source: '/wiki',
        destination: 'https://dope-wars.notion.site/Dope-Wiki-e237166bd7e6457babc964d1724befb2',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
