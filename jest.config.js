module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['./jest-setup-after-env.js'],
  transformIgnorePatterns: [
    '/node_modules/(?!react-native-linear-gradient)(.*)',
  ],
};
