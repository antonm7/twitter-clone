/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MONGODB_URI:'mongodb://127.0.0.1:27017',
        NEXTAUTH_SECRET:'my_ultra_secure_nextauth_secret',
        DATABASE_NAME:'twitter_development',
        UPLOADTHING_SECRET:'sk_live_b6ded744426a09512ae092bc25e57ba6b26e9ee07f2ae940266d84a2946a1073',
        UPLOADTHING_APP_ID:'alnhcn60l8'
    }
}

module.exports = nextConfig
