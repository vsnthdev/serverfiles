/*
 *  ESLint run control for serverfiles CLI project.
 *  Created On 08 January 2022
 */

module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['prettier', 'simple-import-sort', '@typescript-eslint', 'import'],
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    env: {
        es2021: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    settings: {
        'import/extensions': ['.js'],
    },
    rules: {
        'prettier/prettier': 'error',
        'simple-import-sort/imports': 'error',
        'sort-imports': 'off',
        'import/order': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
    },
}
