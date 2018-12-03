import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from './Button';
import Heading from './Heading';

// export Button and Heading as named exports
export { Button, Heading }

// alternative, more concise syntax for named exports
// export { default as Foo } from './Foo'

// set a default export for this module
export default { Button, Heading }

if ("development" === process.env.NODE_ENV) {

    const a11y = require("react-a11y").default;
    a11y(React, ReactDOM, {
      rules: {
        "img-uses-alt": "warn",
        "redundant-alt": [
          "warn", ["Image"]
        ]
      }
    });
  }