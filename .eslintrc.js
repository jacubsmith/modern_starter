const baseRules = {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-fragments': ['error', 'syntax'],
    'react/forbid-prop-types': ['error', { forbid: ['array', 'any', 'object'] }],
    'react/jsx-first-prop-new-line': ['off', 'multiline-multiprop'],
    'react/jsx-props-no-spreading': ['error', {
        html: 'ignore',
        custom: 'enforce',
        explicitSpread: 'enforce',
        exceptions: ['*.test.*'],
    }],
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'react/display-name': 'off',
    'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],
    'react/prefer-stateless-function': 'error',
    'react/state-in-constructor': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-filename-extension': [
        'warn',
        {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
    ],
    'jsx-a11y/anchor-is-valid': [
        'warn',
        {
            aspects: ['invalidHref'],
        },
    ],
    'comma-dangle': ['error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
    }],
    'max-len': ['error', { code: 135 }],
    'no-underscore-dangle': 'off',
    'one-var': 'off',
    'no-return-assign': ['error', 'always'],
    'class-methods-use-this': 'off',
    'object-curly-spacing': ['error', 'always'],
    semi: ['error', 'always'],
    'no-unused-vars': [
        'warn',
        {
            ignoreRestSiblings: true,
            argsIgnorePattern: 'res|next|^err',
        },
    ],
    'prefer-const': [
        'error',
        {
            destructuring: 'all',
        },
    ],
    'no-unused-expressions': [
        'warn',
        {
            allowTaggedTemplates: true,
        },
    ],
    'no-param-reassign': [
        'error',
        {
            props: false,
        },
    ],
    'no-console': [
        'warn',
        {
            allow: ['warn', 'error'],
        },
    ],
    'import/no-extraneous-dependencies': [
        'error',
        {
            devDependencies: ['**/*.test.js', '**/*.spec.js'],
        },
    ],
    'import/prefer-default-export': 'off',
    'consistent-return': 'off',
    curly: ['error', 'multi-line'],
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'no-mixed-operators': ['error', {
        groups: [
            ['&&', '||'],
        ],
    }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    camelcase: 'off',
    indent: [
        'off',
        4,
    ],
};

const typeScriptOverride = {
    files: ['**/*.ts', '**/*.tsx'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.eslint.json',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript',
    ],
    rules: {
        ...baseRules,
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/indent': 'off',
        'react/require-default-props': 'off',
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'never',
            enums: 'always-multiline',
            generics: 'always-multiline',
            tuples: 'always-multiline',
        }],
    },
};

const nightwatchOverride = {
    files: ['nightwatch/**/*.*.js'],
    rules: {
        ...baseRules,
        'no-unused-expressions': 'off',
        'func-names': 'off',
    },
};

module.exports = {
    extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
    ],
    env: {
        browser: true,
        node: true,
        jest: true,
        mocha: true,
    },
    globals: {
        __static: true,
    },
    parser: '@babel/eslint-parser',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
        ecmaFeatures: {
            jsx: true,
        },
    },
    overrides: [
        typeScriptOverride,
        nightwatchOverride,
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: ['react', 'react-hooks'],
    rules: baseRules,
};
