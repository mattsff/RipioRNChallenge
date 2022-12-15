module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'plugin:jest/recommended',
    '@react-native-community',
  ],
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-console': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    "import/prefer-default-export": "off",
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
      },
      {
        selector: 'variableLike',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'class',
        format: ['PascalCase'],
      },
      {
        selector: 'property',
        format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
      },
      {
        selector: 'memberLike',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    'react/jsx-boolean-value': 'error',
    'react-native/no-inline-styles': 'off',
    'react-native/no-unused-styles': 'error',
    'react-native/no-color-literals': 'error',
    'import/named': 'off', // checked by typescript
    'import/default': 'off', // checked by typescript
    'import/namespace': 'off', // checked by typescript
    'import/no-named-as-default-member': 'off',
    'import/no-default-export': 'error',
    'import/newline-after-import': ['error', { count: 1 }],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    'import/no-duplicates': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react-native/no-unused-styles': ['error', { enableImportsCheck: true }],
    // https://stackoverflow.com/a/69609395
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'lodash',
            message:
              "Please use `import [package] from 'lodash/[package]'` instead.",
          },
        ],
        patterns: ['!lodash/*'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['./', 'node_modules'],
      },
    },
  },
};
