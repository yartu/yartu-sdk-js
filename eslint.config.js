import globals from 'globals';
import unicorn from 'eslint-plugin-unicorn';
import promise from 'eslint-plugin-promise';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  {
    ignores: ['**/*.cjs', 'coverage/**', 'node_modules/**']
  },
  unicorn.configs['flat/recommended'],
  promise.configs['flat/recommended'],
  prettierRecommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      'unicorn/prefer-module': 'off',
      'unicorn/no-abusive-eslint-disable': 'off',
      'unicorn/no-anonymous-default-export': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-null': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/no-for-each': 'off',
      'unicorn/name-replacements': 'off',
      'unicorn/consistent-boolean-name': 'off',
      'unicorn/consistent-class-member-order': 'off',
      'prettier/prettier': 'off',
      'unicorn/prefer-global-this': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/prefer-dom-node-dataset': 'off'
    }
  }
];
