module.exports = {
  async headers() {
    return [
      {
        // Matching all URLs
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, stale-while-revalidate',
          },
        ],
      },
    ]
  },
}
