import React, { Component } from "react";
import { storiesOf } from '@storybook/react';
// import { linkTo } from '@storybook/addon-links';
import ButtonStory from './Button';
import LoadingStory from './Loading';
import ToastStory from './Toast';

storiesOf('Button', module).add('Buttons', () => <ButtonStory></ButtonStory>);
storiesOf('Loading', module).add('Loadings', () => <LoadingStory></LoadingStory>);
storiesOf('Toast', module).add('Toasts', () => <ToastStory></ToastStory>);