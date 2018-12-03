import Button from './Button';
import Heading from './Heading';

// export Button and Heading as named exports
export { Button, Heading }

// alternative, more concise syntax for named exports
// export { default as Foo } from './Foo'

// set a default export for this module
export default { Button, Heading }
