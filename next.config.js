/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MONGODB_URI:'mongodb://127.0.0.1:27017',
        DATABASE_NAME:'twitter_development'
    }
}

module.exports = nextConfig
