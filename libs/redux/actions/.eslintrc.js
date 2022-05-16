module.exports = {
  'extends': ['../../../.eslintrc.js'],
  'ignorePatterns': ['!**/*'],
  'overrides': [
    {
      'files': ['*.ts', '*.tsx', '*.js', '*.jsx'],
      'rules': {
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'never'],
        'comma-dangle': ['error', 'only-multiline'],
        'comma-spacing': ['error', { 'before': false, 'after': true }],
        'comma-style': ['error', 'last'],
        'computed-property-spacing': ['error', 'never'],
        'array-element-newline': ['error',  'consistent'],
        'func-call-spacing': ['error', 'never'],
        'keyword-spacing': ['error', { 'before': true }],
        'max-len': ['error', { 'code': 120, 'ignoreUrls': true, 'ignoreTemplateLiterals': true}],
        'multiline-ternary': ['error', 'always-multiline'],
        'jsx-quotes': ['error', 'prefer-single'],
        'react/prop-types': 'off',
        'react/display-name': 'off',
        'no-prototype-builtins': 'off',
        'no-undef': 'off',
        'no-console': 'off',
        'no-debugger': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/ban-ts-comment': [
          'error',
          {'ts-ignore': 'allow-with-description'}
        ]
      }
    },
    {
      'files': ['*.ts', '*.tsx'],
      'rules': {}
    },
    {
      'files': ['*.js', '*.jsx'],
      'rules': {}
    }
  ]
}
