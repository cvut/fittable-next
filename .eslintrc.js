// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  extends: 'standard',
  plugins: [
    'html',
  ],
  'rules': {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'camelcase': 2,
    'no-var': 1,
    'prefer-const': 1,
    'comma-dangle': [2, 'always-multiline'],
    'jsx-quotes': [2, 'prefer-double'],
    'curly': [2, 'all'],
    'max-len': [2, 120, 2],
    'no-extra-bind': [2],
    'max-len': [2, 100, 2, {ignoreComments: true, ignoreUrls: true}],
    'padded-blocks': 0,
  },
}
