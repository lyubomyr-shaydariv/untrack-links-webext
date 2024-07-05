import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'node:url';
import globals from 'globals';
import js from '@eslint/js';
import path from 'node:path';
import stylisticJs from '@stylistic/eslint-plugin-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
	allConfig: js.configs.all,
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended
});

export default [
	{
		ignores: ['src/lib']
	},
	...compat.extends('eslint:recommended'),
	{
		languageOptions: {
			ecmaVersion: 'latest',
			globals: {
				...globals.browser
			},
			sourceType: 'module'
		},
		plugins: {
			'@stylistic/js': stylisticJs
		},
		rules: {
			'accessor-pairs': ['error'],
			'array-callback-return': ['error'],
			'arrow-body-style': ['error'],
			'block-scoped-var': ['error'],
			// TODO Uncomment 'camelcase': ['error'],
			// TODO Uncomment 'capitalized-comments': ['error'],
			// TODO Uncomment 'class-methods-use-this': ['error'],
			'complexity': ['error', { 'max': 16 }], // eslint-disable-line quote-props
			'consistent-return': ['error'],
			'consistent-this': ['error'],
			'constructor-super': ['error'],
			'curly': ['error'], // eslint-disable-line quote-props
			'default-case': ['error'],
			'default-case-last': ['error'],
			'default-param-last': ['error'],
			'dot-notation': ['error'],
			'eqeqeq': ['error'], // eslint-disable-line quote-props
			'for-direction': ['error'],
			'getter-return': ['error'],
			'grouped-accessor-pairs': ['error'],
			'guard-for-in': ['error'],
			'id-denylist': ['error'],
			// TODO Uncomment 'indent': ['error', 'tab'],
			'id-length': ['error', { 'min': 1 }], // eslint-disable-line quote-props
			'id-match': ['error'],
			'init-declarations': ['error'],
			'logical-assignment-operators': ['error'],
			// TODO Uncomment 'max-classes-per-file': ['error'],
			'max-depth': ['error'],
			// TODO Uncomment 'max-lines-per-function': ['error'],
			// TODO Uncomment 'max-lines': ['error'],
			'max-nested-callbacks': ['error'],
			'max-params': ['error'],
			// TODO Uncomment 'max-statements': ['error'],
			// TODO Uncomment 'new-cap': ['error'],
			'no-alert': ['error'],
			'no-array-constructor': ['error'],
			'no-async-promise-executor': ['error'],
			'no-await-in-loop': ['error'],
			'no-bitwise': ['error'],
			'no-caller': ['error'],
			'no-case-declarations': ['error'],
			'no-class-assign': ['error'],
			'no-compare-neg-zero': ['error'],
			'no-cond-assign': ['error'],
			// TODO Uncomment 'no-console': ['error'],
			'no-const-assign': ['error'],
			'no-constant-binary-expression': ['error'],
			'no-constant-condition': ['error'],
			'no-constructor-return': ['error'],
			// TODO Uncomment 'no-continue': ['error'],
			'no-control-regex': ['error'],
			'no-debugger': ['error'],
			'no-delete-var': ['error'],
			'no-div-regex': ['error'],
			'no-dupe-args': ['error'],
			'no-dupe-class-members': ['error'],
			'no-dupe-else-if': ['error'],
			'no-dupe-keys': ['error'],
			'no-duplicate-case': ['error'],
			'no-duplicate-imports': ['error'],
			'no-else-return': ['error'],
			'no-empty': ['error'],
			'no-empty-character-class': ['error'],
			'no-empty-function': ['error'],
			'no-empty-pattern': ['error'],
			'no-empty-static-block': ['error'],
			'no-eq-null': ['error'],
			'no-eval': ['error'],
			'no-ex-assign': ['error'],
			'no-extend-native': ['error'],
			'no-extra-bind': ['error'],
			'no-extra-boolean-cast': ['error'],
			'no-extra-label': ['error'],
			'no-fallthrough': ['error'],
			'no-func-assign': ['error'],
			'no-global-assign': ['error'],
			'no-implicit-coercion': ['error'],
			'no-implicit-globals': ['error'],
			'no-implied-eval': ['error'],
			'no-import-assign': ['error'],
			// TODO Uncomment 'no-inline-comments': ['error'],
			'no-inner-declarations': ['error'],
			'no-invalid-regexp': ['error'],
			'no-invalid-this': ['error'],
			'no-irregular-whitespace': ['error'],
			'no-iterator': ['error'],
			'no-label-var': ['error'],
			// TODO Uncomment 'no-labels': ['error'],
			'no-lone-blocks': ['error'],
			'no-lonely-if': ['error'],
			'no-loop-func': ['error'],
			'no-loss-of-precision': ['error'],
			'no-magic-numbers': ['error', {'ignore': [0, 1]}], // eslint-disable-line quote-props
			'no-misleading-character-class': ['error'],
			// TODO Uncomment 'no-multi-assign': ['error'],
			'no-multi-str': ['error'],
			// TODO Uncomment 'no-negated-condition': ['error'],
			'no-nested-ternary': ['error'],
			'no-new': ['error'],
			'no-new-func': ['error'],
			'no-new-native-nonconstructor': ['error'],
			// TODO Uncomment 'no-new-wrappers': ['error'],
			'no-nonoctal-decimal-escape': ['error'],
			'no-obj-calls': ['error'],
			'no-object-constructor': ['error'],
			'no-octal': ['error'],
			'no-octal-escape': ['error'],
			// TODO Uncomment 'no-param-reassign': ['error'],
			// TODO Uncomment 'no-plusplus': ['error'],
			'no-promise-executor-return': ['error'],
			'no-proto': ['error'],
			'no-prototype-builtins': ['error'],
			'no-redeclare': ['error'],
			'no-regex-spaces': ['error'],
			'no-restricted-exports': ['error'],
			'no-restricted-globals': ['error'],
			'no-restricted-imports': ['error'],
			'no-restricted-properties': ['error'],
			'no-restricted-syntax': ['error'],
			'no-return-assign': ['error'],
			'no-script-url': ['error'],
			'no-self-assign': ['error'],
			'no-self-compare': ['error'],
			'no-sequences': ['error'],
			'no-setter-return': ['error'],
			'no-shadow-restricted-names': ['error'],
			// TODO Uncomment 'no-shadow': ['error'],
			'no-sparse-arrays': ['error'],
			'no-template-curly-in-string': ['error'],
			// TODO Uncomment 'no-ternary': ['error'],
			'no-this-before-super': ['error'],
			'no-throw-literal': ['error'],
			'no-undef': ['error'],
			'no-undef-init': ['error'],
			// TODO Uncomment 'no-undefined': ['error'],
			// TODO Uncomment 'no-underscore-dangle': ['error'],
			'no-unexpected-multiline': ['error'],
			'no-unmodified-loop-condition': ['error'],
			'no-unneeded-ternary': ['error'],
			'no-unreachable': ['error'],
			'no-unreachable-loop': ['error'],
			'no-unsafe-finally': ['error'],
			'no-unsafe-negation': ['error'],
			'no-unsafe-optional-chaining': ['error'],
			'no-unused-expressions': ['error'],
			'no-unused-labels': ['error'],
			'no-unused-private-class-members': ['error'],
			'no-unused-vars': ['error'],
			// TODO Uncomment 'no-use-before-define': ['error'],
			// TODO Uncomment 'no-useless-assignment': ['error'],
			'no-useless-backreference': ['error'],
			'no-useless-call': ['error'],
			'no-useless-catch': ['error'],
			'no-useless-computed-key': ['error'],
			'no-useless-concat': ['error'],
			'no-useless-constructor': ['error'],
			'no-useless-escape': ['error'],
			'no-useless-rename': ['error'],
			'no-useless-return': ['error'],
			'no-var': ['error'],
			'no-void': ['error'],
			// TODO Uncomment 'no-warning-comments': ['error'],
			'no-with': ['error'],
			'object-shorthand': ['error'],
			// TODO Uncomment 'one-var': ['error'],
			'operator-assignment': ['error'],
			'prefer-arrow-callback': ['error'],
			'prefer-const': ['error'],
			'prefer-destructuring': ['error'],
			'prefer-exponentiation-operator': ['error'],
			// TODO Uncomment 'prefer-named-capture-group': ['error'],
			'prefer-numeric-literals': ['error'],
			'prefer-object-has-own': ['error'],
			'prefer-object-spread': ['error'],
			'prefer-promise-reject-errors': ['error'],
			'prefer-regex-literals': ['error'],
			'prefer-rest-params': ['error'],
			'prefer-spread': ['error'],
			'prefer-template': ['error'],
			'radix': ['error'], // eslint-disable-line quote-props
			'require-atomic-updates': ['error'],
			'require-await': ['error'],
			// TODO Uncomment 'require-unicode-regexp': ['error'],
			'require-yield': ['error'],
			'sort-imports': ['error', { 'allowSeparatedGroups': false, 'ignoreCase': false, 'ignoreDeclarationSort': false, 'ignoreMemberSort': false, 'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single'] }], // eslint-disable-line quote-props
			'sort-keys': ['error'],
			'sort-vars': ['error'],
			'strict': ['error'], // eslint-disable-line quote-props
			'symbol-description': ['error'],
			'unicode-bom': ['error'],
			'use-isnan': ['error'],
			'valid-typeof': ['error'],
			'vars-on-top': ['error'],
			'yoda': ['error'], // eslint-disable-line quote-props
			// formatting rules
			'@stylistic/js/function-call-spacing': ['error'], // eslint-disable-line sort-keys
			// 'array-bracket-newline': ['error'],
			'array-bracket-spacing': ['error'],
			// 'array-element-newline': ['error'],
			// 'arrow-parens': ['error'],
			'arrow-spacing': ['error'],
			'block-spacing': ['error'],
			'brace-style': ['error'],
			'comma-dangle': ['error'],
			// 'comma-spacing': ['error'],
			'comma-style': ['error'],
			'computed-property-spacing': ['error'],
			// 'dot-location': ['error'],
			'eol-last': ['error'],
			'func-call-spacing': ['error'],
			// 'function-call-argument-newline': ['error'],
			// 'function-paren-newline': ['error'],
			// 'generator-star-spacing': ['error'],
			'implicit-arrow-linebreak': ['error'],
			// 'indent': ['error'],
			'jsx-quotes': ['error'],
			'key-spacing': ['error'],
			'keyword-spacing': ['error'],
			// 'line-comment-position': ['error'],
			'linebreak-style': ['error', 'unix'],
			'lines-around-comment': ['error'],
			// 'lines-between-class-members': ['error'],
			// 'max-len': ['error'],
			'max-statements-per-line': ['error'],
			// 'multiline-comment-style': ['error'],
			// 'multiline-ternary': ['error'],
			'new-parens': ['error'],
			// 'newline-per-chained-call': ['error'],
			// 'no-confusing-arrow': ['error'],
			// 'no-extra-parens': ['error'],
			'no-extra-semi': ['error'],
			'no-floating-decimal': ['error'],
			'no-mixed-operators': ['error'],
			'no-mixed-spaces-and-tabs': ['error'],
			// 'no-multi-spaces': ['error'],
			'no-multiple-empty-lines': ['error'],
			// 'no-tabs': ['error'],
			'no-trailing-spaces': ['error'],
			'no-whitespace-before-property': ['error'],
			'nonblock-statement-body-position': ['error'],
			'object-curly-newline': ['error'],
			// 'object-curly-spacing': ['error'],
			// 'object-property-newline': ['error'],
			// 'one-var-declaration-per-line': ['error'],
			'operator-linebreak': ['error'],
			// 'padded-blocks': ['error'],
			'padding-line-between-statements': ['error'],
			'quote-props': ['error', 'as-needed'],
			'quotes': ['error', 'single'], // eslint-disable-line quote-props
			'rest-spread-spacing': ['error'],
			'semi': ['error', 'always'], // eslint-disable-line quote-props
			'semi-spacing': ['error'],
			'semi-style': ['error'],
			'space-before-blocks': ['error'],
			// 'space-before-function-paren': ['error'],
			// 'space-in-parens': ['error'],
			'space-infix-ops': ['error'],
			'space-unary-ops': ['error'],
			// 'spaced-comment': ['error'],
			'switch-colon-spacing': ['error'],
			'template-curly-spacing': ['error'],
			'template-tag-spacing': ['error'],
			'wrap-iife': ['error'],
			'wrap-regex': ['error'],
			'yield-star-spacing': ['error']
		}
	}
];
