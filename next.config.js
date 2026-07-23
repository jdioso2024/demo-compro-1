const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',           // <--- Baris wajib untuk Cloudflare Pages Static
    images: {
        unoptimized: true,      // <--- Agar komponen next/image tidak error karena server optimization mati
    },
    webpack: (config) => {
        config.resolve.alias['@'] = path.resolve(__dirname);
        return config;
    },
};

module.exports = nextConfig;