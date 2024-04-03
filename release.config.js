const config = {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [
          { type: 'feat', release: 'minor' },
          { type: 'fix', release: 'patch' },
          { type: 'ci', release: 'minor' },
          { type: 'chore', release: 'minor' },
          { type: 'docs', release: 'minor' },
        ],
      },
    ],
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
        changelogTitle: '# Changelog\n\n## Code connect back\n\n',
      },
    ],
    [
      "@semantic-release/git", {
        "assets": ["dist/**/*.js", "package.json", "CHANGELOG.md", "README.md"],
        "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ],
    '@semantic-release/github',
  ],
};

module.exports = config;
