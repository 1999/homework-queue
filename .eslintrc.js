module.exports = {
    'env': {
        'commonjs': true,
        'es6': true,
        'node': true,
        'mocha': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true,
            'jsx': true
        },
        'sourceType': 'module'
    },
    'rules': {
        'accessor-pairs': 'error',
        'array-bracket-spacing': [
            'error',
            'never'
        ],
        'array-callback-return': 'error',
        'arrow-body-style': 'off',
        'arrow-parens': 'off',
        'arrow-spacing': [
            'error',
            {
                'after': true,
                'before': true
            }
        ],
        'block-scoped-var': 'error',
        'block-spacing': [
            'error',
            'never'
        ],
        'brace-style': [
            'error',
            '1tbs',
            {
                'allowSingleLine': true
            }
        ],
        'callback-return': 'error',
        'camelcase': 'error',
        'comma-spacing': 'off',
        'comma-style': [
            'error',
            'last'
        ],
        'complexity': 'off',
        'computed-property-spacing': [
            'error',
            'never'
        ],
        'consistent-return': 'off',
        'consistent-this': 'error',
        'curly': 'error',
        'default-case': 'error',
        'dot-location': [
            'error',
            'property'
        ],
        'dot-notation': [
            'error',
            {
                'allowKeywords': true
            }
        ],
        'eol-last': 'error',
        'eqeqeq': 'error',
        'func-names': 'off',
        'func-style': [
            'error',
            'declaration',
            {
                'allowArrowFunctions': true
            }
        ],
        'generator-star-spacing': 'error',
        'global-require': 'off',
        'guard-for-in': 'off',
        'handle-callback-err': 'error',
        'id-blacklist': 'error',
        'id-length': 'off',
        'id-match': 'error',
        'indent': ["error", 4],
        'init-declarations': 'off',
        'jsx-quotes': 'error',
        'key-spacing': 'error',
        'keyword-spacing': [
            'error',
            {
                'after': true,
                'before': true
            }
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'lines-around-comment': 'off',
        'max-depth': 'error',
        'max-len': 'off',
        'max-nested-callbacks': 'error',
        'max-params': 'error',
        'max-statements': 'off',
        'max-statements-per-line': 'off',
        'new-cap': 'error',
        'new-parens': 'error',
        'newline-after-var': 'off',
        'newline-before-return': 'off',
        'newline-per-chained-call': 'off',
        'no-alert': 'error',
        'no-array-constructor': 'error',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-catch-shadow': 'error',
        'no-confusing-arrow': 'error',
        'no-console': 'off',
        'no-continue': 'error',
        'no-div-regex': 'error',
        'no-duplicate-imports': 'error',
        'no-else-return': 'off',
        'no-empty-function': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-extra-parens': 'off',
        'no-floating-decimal': 'error',
        'no-implicit-coercion': 'error',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-inline-comments': 'off',
        'no-inner-declarations': [
            'error',
            'functions'
        ],
        'no-invalid-this': 'off',
        'no-iterator': 'error',
        'no-label-var': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-lonely-if': 'error',
        'no-loop-func': 'off',
        'no-magic-numbers': 'off',
        'no-mixed-requires': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-multiple-empty-lines': 'error',
        'no-native-reassign': 'error',
        'no-negated-condition': 'off',
        'no-nested-ternary': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-require': 'error',
        'no-new-wrappers': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': 'off',
        'no-path-concat': 'error',
        'no-plusplus': 'off',
        'no-process-env': 'off',
        'no-process-exit': 'error',
        'no-proto': 'error',
        'no-restricted-globals': 'error',
        'no-restricted-imports': 'error',
        'no-restricted-modules': 'error',
        'no-restricted-syntax': 'error',
        'no-return-assign': 'error',
        'no-script-url': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-shadow': 'off',
        'no-shadow-restricted-names': 'error',
        'no-spaced-func': 'error',
        'no-sync': 'error',
        'no-ternary': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': [
            'error',
            {
                'skipBlankLines': true
            }
        ],
        'no-undef-init': 'error',
        'no-undefined': 'off',
        'no-underscore-dangle': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unneeded-ternary': 'error',
        'no-unused-expressions': 'off',
        'no-use-before-define': 'error',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        'no-useless-constructor': 'error',
        'no-useless-escape': 'off',
        'no-var': 'off',
        'no-void': 'error',
        'no-warning-comments': 'off',
        'no-whitespace-before-property': 'error',
        'no-with': 'error',
        'object-curly-spacing': [
            'error',
            'never'
        ],
        'object-shorthand': 'off',
        'one-var': 'off',
        'one-var-declaration-per-line': 'error',
        'operator-assignment': [
            'error',
            'always'
        ],
        'operator-linebreak': 'error',
        'padded-blocks': 'off',
        'prefer-arrow-callback': 'off',
        'prefer-const': 'off',
        'prefer-reflect': 'off',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'off',
        'quote-props': 'off',
        'quotes': [2, 'single', 'avoid-escape'],
        'radix': 'error',
        'require-jsdoc': 'off',
        'require-yield': 'error',
        'semi': 'error',
        'semi-spacing': [
            'error',
            {
                'after': true,
                'before': false
            }
        ],
        'sort-imports': 'error',
        'sort-vars': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': 'off',
        'space-in-parens': [
            'error',
            'never'
        ],
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': 'off',
        'strict': 'off',
        'template-curly-spacing': [
            'error',
            'never'
        ],
        'valid-jsdoc': 'off',
        'vars-on-top': 'off',
        'wrap-iife': 'error',
        'wrap-regex': 'error',
        'yield-star-spacing': 'error',
        'yoda': [
            'error',
            'never'
        ]
    }
};