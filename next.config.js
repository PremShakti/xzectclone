/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['www.xzect.com'],
      },
    // images: {
    //     remotePatterns: [
    //       {
    //         protocol: 'https',
    //         hostname: 'www.xzect.com',
    //         port: '',
    //         pathname: '/assets/images/services/**',
    //         pathname: '/assets/images/icons/tech-stack/**',
    //       },
    //     ],
    //   },
}

module.exports = nextConfig
