/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        domains: ['placehold.co'],
    },
    transpilePackages: ['three'],
};

module.exports = nextConfig;
