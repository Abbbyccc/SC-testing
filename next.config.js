/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            'images.freeimages.com',
            'images.unsplash.com',
            'eat-seasonal.co.uk',
            'cdn.pixabay.com',
            'cdn.shopify.com',
            's3.amazonaws.com',
            'edamam-product-images.s3.amazonaws.com',
            'i.guim.co.uk',
            'i5.walmartimages.ca',
            'encrypted-tbn0.gstatic.com',
            'images.pexels.com',
            'images-na.ssl-images-amazon.com',
        ],
    },
}

module.exports = nextConfig
