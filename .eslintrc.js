module.exports = {
  extends: ['airbnb-base'],
  env: {
    node: true,
    es6: true,
  },
  rules: {
    'arrow-parens': ['error', 'always'],
    'class-methods-use-this': ['error', { 'exceptMethods': ['render'] }],
    'linebreak-style': ['error', 'unix'],
    'newline-per-chained-call': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
  },
};
