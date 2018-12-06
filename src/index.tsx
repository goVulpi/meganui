import AppContainer from './AppContainer';
import Button from './Button';
import Heading from './Heading';
import Image from './Image';
import Position from './Position';

// export Button and Heading as named exports
export { AppContainer, Button, Heading, Image, Position }

// alternative, more concise syntax for named exports
// export { default as Foo } from './Foo'

// set a default export for this module
export default { AppContainer, Button, Heading, Image, Position }
