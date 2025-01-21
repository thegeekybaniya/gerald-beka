import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';
import perfectionist from 'eslint-plugin-perfectionist';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettierRecommended,
  importPlugin.flatConfigs.typescript,
  {
    ...perfectionist.configs['recommended-natural'],
    rules: {
      ...perfectionist.configs['recommended-natural'].rules,
      'perfectionist/sort-objects': [
        'error',
        { order: 'asc', type: 'line-length' },
      ],
      'perfectionist/sort-imports': [
        'error',
        { order: 'asc', type: 'line-length' },
      ],
    },
  },
];
