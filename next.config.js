/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MONGODB_URI:'mongodb://127.0.0.1:27017',
        NEXTAUTH_SECRET:'my_ultra_secure_nextauth_secret',
        DATABASE_NAME:'twitter_development'
    }
}

module.exports = nextConfig
