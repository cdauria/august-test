const nextConfig = {}

module.exports = {
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
    eslint: {
      ignoreDuringBuilds: true,
    },
  }

