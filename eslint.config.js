import { FlatCompat } from '@eslint/eslintrc';

// Import the base configuration
import airbnbBase from 'eslint-config-airbnb-base';
import pluginJest from 'eslint-plugin-jest';

const compat = new FlatCompat();

export default [
    {
        files: ['*.js'],
        languageOptions: {
            ecmaVersion: 2018,
            sourceType: 'module',
        },
        plugins: {
            jest: pluginJest,
        },
        rules: {
            'no-console': 'off',
            'no-shadow': 'off',
            'no-restricted-syntax': [
                'error',
                {
                    selector: 'LabeledStatement',
                    message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
                },
                {
                    selector: 'WithStatement',
                    message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
                },
            ],
        },
    },
    ...compat.extends('airbnb-base'),
    ...compat.extends('plugin:jest/all'),
];
