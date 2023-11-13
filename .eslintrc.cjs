module.exports = {
  extends: ['mantine', 'plugin:@next/next/recommended', 'plugin:jest/recommended'],
  plugins: ['testing-library', 'jest'],
  overrides: [
    {
      files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'max-len': 'off',
    'linebreak-style': 'off',
    'comma-dangle': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'import/no-useless-path-segments': 'off',
    'arrow-body-style': 'off',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'no-multiple-empty-lines': 'off',
    'no-empty-pattern': 'off',
    'eol-last': 'off',
    'no-trailing-spaces': 'off',
    'global-require': 'off',
  },
};
