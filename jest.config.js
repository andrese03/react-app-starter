module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/enzyme.config.js',
  ],
  coverageReporters: [
    'json',
    'lcov',
    'text',
    'clover',
    'text-summary',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
};
