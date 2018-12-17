import React, { Component } from "react";
import { storiesOf } from '@storybook/react';
// import { linkTo } from '@storybook/addon-links';
import ButtonStory from './Button';

storiesOf('Button', module).add('Buttons', () => <ButtonStory></ButtonStory>);