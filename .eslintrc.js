module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
  plugins: [
    'react',
  ],
  rules: {
    'import/no-extraneous-dependencies': [
      'error', { 'devDependencies': ['**/*.test.js', '**/*.spec.js', '**/*.config.js'] }
    ],
    'linebreak-style': 0,
    'object-curly-newline': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
