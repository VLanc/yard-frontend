module.exports = {
  extends: 'airbnb',
  rules: {
    'react/prop-types': 0,
  },
  env: {
    jest: true,
    browser: true,
  },
  plugins: ['react', 'jsx-a11y', 'import'],
};
