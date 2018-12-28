import React, { Component } from "react";
import { storiesOf } from '@storybook/react';
import ButtonStory from './ButtonStory';
import LoadingStory from './LoadingStory';
import ToastStory from './ToastStory';
import NavbarStory from "./NavbarStory";
// import { linkTo } from '@storybook/addon-links';

storiesOf('Button', module).add('Buttons', () => <ButtonStory></ButtonStory>);
storiesOf('Loading', module).add('Loadings', () => <LoadingStory></LoadingStory>);
storiesOf('Navbar', module).add('Navbars', () => <NavbarStory></NavbarStory>);
storiesOf('Toast', module).add('Toasts', () => <ToastStory></ToastStory>);