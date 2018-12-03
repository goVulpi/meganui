import React from 'react';

import { storiesOf } from '@storybook/react';
import { Button, Heading } from '../lib';

storiesOf('Heading', module)
  .add('Level 1', () => (<Heading level="1">This is a level one heading</Heading>))
  .add('Level 2', () => (<Heading level="2">This is a level two heading</Heading>))
  .add('Level 3', () => (<Heading level="3">This is a level three heading</Heading>))
  .add('Level 4', () => (<Heading level="4">This is a level four heading</Heading>))
  .add('Level 5', () => (<Heading level="5">This is a level five heading</Heading>))
  .add('Level 6', () => (<Heading level="6">This is a level six heading</Heading>))
;

storiesOf('Button', module)
  .add('Colors', () => (
      <div>
        <Button>Basic Bitch</Button>
        <Button color="primary">Primary</Button>
        <Button color="primary-variant">Primary Variant</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="danger">Danger</Button>
        <Button color="warning">Warning</Button>
        <Button color="success">Success</Button>
      </div>
    )
  )
  .add('Sizes', () => (
      <div>
        <Button>Normal</Button>
        <Button size="big">Big</Button>
        <Button size="bigger">Bigger</Button>
        <Button size="biggest">Biggest</Button>
      </div>
    )
  )
;