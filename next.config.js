/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },

    reactStrictMode: true,

    images: {
        domains: [
            'lh3.googleusercontent.com',
            'cdn.pixabay.com',
            'p16-amd-va.tiktokcdn.com',
            'image.shutterstock.com',
        ],
    },
};

// module.exports = {
//     env: {
//         mongodburl:
//             'mongodb+srv://Ikaay:Ikaay1@cluster0.hakltbi.mongodb.net/?retryWrites=true&w=majority',
//     },
// };

module.exports = nextConfig;
