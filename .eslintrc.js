'use strict';

module.exports = {
  env: {
    mocha: true,
    node: true
  },
  extends: 'airbnb-base/legacy',
  parserOptions: {
    ecmaVersion: 6
  },
  rules: {
    'func-names': [0],
    'space-before-function-paren': [0],
    'consistent-return': [0],

    'no-use-before-define': [2, 'nofunc'],
    'no-underscore-dangle': [0],

    'max-len': [2, 100, 4, { ignoreComments: true, ignoreUrls: true }],
    'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }]

  },
  ignorePatterns: ['node_modules/', 'mochawesome-report/', 'js/']
};
