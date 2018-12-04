import React from 'react';

import { storiesOf } from '@storybook/react';
import { Button, Heading } from 'meganui';

storiesOf("Button", module)
  .add("with text", () => <Button>Hello Button</Button>);

storiesOf("Heading", module)
  .add("level 1", () => <Heading>Level 1</Heading>);