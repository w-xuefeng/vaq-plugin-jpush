module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:@typescript-eslint/recommended'],
  rules: {
    'semi': ['warn', 'never']
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  globals: {
    api: 'readonly',
    'window.api': 'readonly',
    apiready: true,
    'window.apiready': true
  }
};