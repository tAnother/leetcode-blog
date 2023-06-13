/** @type {import('next').NextConfig} */

// deploying with GitHub Actions
const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '') // remove username from repo name
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

const nextConfig = {
//     output: 'export',
//     images: { unoptimized: true },
//     assetPrefix: assetPrefix,
//     basePath: basePath,
}

module.exports = nextConfig
