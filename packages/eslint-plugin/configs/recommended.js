module.exports = {
  plugins: ['@encodefe/eslint-plugin'],
  rules: {
    '@encodefe/eslint-plugin/no-http-url': 'warn',
    '@encodefe/eslint-plugin/no-secret-info': 'error',
  },
};
