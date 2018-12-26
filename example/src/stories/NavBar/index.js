import React, { Component } from "react";
import { Navbar, MenuList, MenuItem, Button, Image, AppContainer } from "meganui";

export default class NavbarStory extends Component {

    render() {
        return (
            <AppContainer>
                <Navbar position="fixed">
                    <Image height={32} src="./logo.svg"/>
                    <MenuList>
                        <MenuItem>Hello</MenuItem>
                        <MenuItem>
                            <Button>
                                Press Me
                            </Button>
                        </MenuItem>
                    </MenuList>
                </Navbar>
            </AppContainer>
        );
    }

}