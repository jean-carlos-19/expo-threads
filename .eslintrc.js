const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
 fs.readFileSync(path.resolve(__dirname, '.prettier.json'), 'utf8'),
);

module.exports = {
 env: {
  browser: true,
  es2021: true,
 },
 extends: [
  'eslint:recommended',
  'plugin:@typescript-eslint/recommended',
  'plugin:react/recommended',
  'plugin:prettier/recommended',
 ],
 overrides: [
  {
   env: {
    node: true,
   },
   files: ['.eslintrc.{js,cjs}'],
   parserOptions: {
    sourceType: 'script',
   },
  },
 ],
 parser: '@typescript-eslint/parser',
 parserOptions: {
  ecmaVersion: 'latest',
  sourceType: 'module',
 },
 plugins: ['@typescript-eslint', 'react', 'prettier'],
 rules: {
  'prettier/prettier': ['error', prettierOptions],
 },
};
