/** @type {import('next').NextConfig} */

// deploying with GitHub Actions
const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  const repo = "leetcode-blog"  /// TODO: do not hard code
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    assetPrefix: assetPrefix,
    basePath: basePath,
}

module.exports = nextConfig
