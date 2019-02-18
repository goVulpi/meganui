import React from "react";

import { storiesOf } from "@storybook/react";
import ButtonStory from "./ButtonStory";
import BasicCardsStory from "./BasicCardsStory";
import FooterStory from "./FooterStory";
import GridStory from "./GridStory";
import LoadingStory from "./LoadingStory";
import NavbarStory from "./NavbarStory";
import RichCardsStory from "./RichCardsStory";
import TextFieldsStory from "./TextFieldsStory";
import ToastStory from "./ToastStory";
import ImagesAndLinksStory from "./ImagesAndLinksStory";
import DropdownFieldsStory from "./DropdownFieldsStory";
// import { linkTo } from '@storybook/addon-links';

storiesOf("Cards", module)
  .add("Basic cards", () => <BasicCardsStory />)
  .add("Rich cards", () => <RichCardsStory />);
storiesOf("Forms", module)
  .add("Buttons", () => <ButtonStory />)
  .add("Dropdown fields", () => <DropdownFieldsStory />)
  .add("Text fields", () => <TextFieldsStory />);
storiesOf("Footer", module).add("Footer", () => <FooterStory />);
storiesOf("Grid", module).add("Grid", () => <GridStory />);
storiesOf("Images and links", module).add("Images and links", () => (
  <ImagesAndLinksStory />
));
storiesOf("Loading", module).add("Loadings", () => <LoadingStory />);
storiesOf("Navbar", module).add("Navbars", () => <NavbarStory />);
storiesOf("Toast", module).add("Toasts", () => <ToastStory />);
