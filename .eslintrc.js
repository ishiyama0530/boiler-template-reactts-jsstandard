const prettierrc = require('./.prettierrc.js')

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'standard-with-typescript',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    'no-var': 'error',
    '@typescript-eslint/no-unused-vars': 1,
    'prettier/prettier': [
      'error',
      prettierrc // if change this, have to reboot eslint.
    ]
  }
}
