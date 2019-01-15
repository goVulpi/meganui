import React from "react";

import { storiesOf } from '@storybook/react';
import ButtonStory from './ButtonStory';
import FooterStory from './FooterStory';
import GridStory from './GridStory';
import LoadingStory from './LoadingStory';
import NavbarStory from "./NavbarStory";
import TextFieldsStory from "./TextFieldsStory";
import ToastStory from './ToastStory';
// import { linkTo } from '@storybook/addon-links';

storiesOf("Button", module).add("Buttons", () => <ButtonStory></ButtonStory>);
storiesOf("Loading", module).add("Loadings", () => <LoadingStory></LoadingStory>);
storiesOf("Navbar", module).add("Navbars", () => <NavbarStory></NavbarStory>);
storiesOf("Toast", module).add("Toasts", () => <ToastStory></ToastStory>);
storiesOf("Grid", module).add("Grid", () => <GridStory></GridStory>);
storiesOf("Text Fields", module).add("TextField", () => <TextFieldsStory/>);
storiesOf("Footer", module).add("Footer", () => <FooterStory></FooterStory>)