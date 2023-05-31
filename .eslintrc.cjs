module.exports = {
  plugins: ['googleappsscript'],
  env: {
    browser: true,
    es2021: true,
    node: true,
    'googleappsscript/googleappsscript': true,
  },
  extends: ['eslint:recommended', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-extra-boolean-cast': 'off',
  },
};
