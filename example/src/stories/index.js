import React, { Component } from "react";
import { storiesOf } from '@storybook/react';
// import { linkTo } from '@storybook/addon-links';
import ButtonStory from './Button';
import LoadingStory from './Loading';
import ToastStory from './Toast';
import NavbarStory from "./NavBar";

storiesOf('Button', module).add('Buttons', () => <ButtonStory></ButtonStory>);
storiesOf('Loading', module).add('Loadings', () => <LoadingStory></LoadingStory>);
storiesOf('Navbar', module).add('Navbars', () => <NavbarStory></NavbarStory>);
storiesOf('Toast', module).add('Toasts', () => <ToastStory></ToastStory>);