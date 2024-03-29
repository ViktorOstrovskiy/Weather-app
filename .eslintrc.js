module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	globals: {
		shallow: true,
	},

	extends: [
		'plugin:react/recommended',
		'airbnb',
		'prettier',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/typescript',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
	rules: {
		'@typescript-eslint/no-explicit-any': 'off',
		'no-use-before-define': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/prop-types': 'off',
		'react/no-danger': 'off',
		'react/require-default-props': 'off',
		'import/prefer-default-export': 'off',
		'no-shadow': 'off',
		'react/button-has-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
		'import/no-unresolved': 'error',
		'no-nested-ternary': 'off',
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				ts: 'never',
				tsx: 'never',
			},
		],
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'jsx-a11y/no-noninteractive-element-interactions': 'off',
		'jsx-a11y/label-has-associated-control': [
			'error',
			{
				required: {
					some: ['nesting', 'id'],
				},
			},
		],
		'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
	},
	settings: {
		'import/resolver': {
			typescript: {},
		},
	},
	overrides: [
		{
			files: '*.spec.tsx',
			globals: {
				shallow: true,
				render: true,
				mount: true,
			},
		},
	],
};
