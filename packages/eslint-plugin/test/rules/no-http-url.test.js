'use strict';

const rule = require('../../rules/no-http-url');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('no-http-url', rule, {
  valid: [
    {
      code: "var test = 'https://brookzsw.com';",
    },
  ],

  invalid: [
    {
      code: "var test = 'http://brookzsw.com';",
      output: "var test = 'http://brookzsw.com';",
      errors: [
        {
          message: 'Recommended "http://brookzsw.com" switch to HTTPS',
        },
      ],
    },
    {
      code: "<img src='http://brookzsw.com' />",
      output: "<img src='http://brookzsw.com' />",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      errors: [
        {
          message: 'Recommended "http://brookzsw.com" switch to HTTPS',
        },
      ],
    },
  ],
});
