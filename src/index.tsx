import AppContainer from './AppContainer';
import Button from './Button';
import Heading from './Heading';
import Hiperlink from './Hiperlink';
import Image from './Image';
import Text from './Text';
import TextInput from './TextInput';

// export Button and Heading as named exports
export { AppContainer, Button, Heading, Hiperlink, Image, Text, TextInput }

// alternative, more concise syntax for named exports
// export { default as Foo } from './Foo'

// set a default export for this module
export default { AppContainer, Button, Heading, Hiperlink, Image, Text, TextInput }
