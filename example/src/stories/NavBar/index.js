import React, { Component } from "react";
import { NavBar, MenuList, MenuItem, Button, Text, AppContainer } from "meganui";

export default class NavBarStory extends Component {

    render() {
        return (
            <AppContainer>
                <NavBar>
                    <MenuList>
                        <MenuItem>Hello</MenuItem>
                        <MenuItem>
                            <Button>
                                Press Me
                            </Button>
                        </MenuItem>
                    </MenuList>
                </NavBar>
            </AppContainer>
        );
    }

}