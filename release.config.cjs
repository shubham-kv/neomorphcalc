/**
 * @type {import('semantic-release'.GlobalConfig)}
 */
// eslint-disable-next-line no-undef
module.exports = {
  branches: ['main', {name: 'dev', prerelease: 'dev'}],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    '@semantic-release/github',
  ],
};
