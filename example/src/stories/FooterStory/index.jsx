import React from "react";
import {
  BigFooter,
  FooterNavLink,
  FooterNavMenu,
  FooterNavTitle
} from "meganui";

export default class FooterStory extends React.PureComponent {
  render() {
    return (
      <BigFooter>
        This is a footer
        <hr />
        This is a text after the horizontal rule.
        <FooterNavMenu>
          <FooterNavLink href="#">This is a footer nav link</FooterNavLink>
          <li>This is a list item.</li>
          <FooterNavTitle>This is a title</FooterNavTitle>
        </FooterNavMenu>
      </BigFooter>
    );
  }
}
