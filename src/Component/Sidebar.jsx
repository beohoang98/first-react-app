import React, { Component } from "react";
import { Container, Navbar, Nav, NavbarBrand, NavItem, NavLink } from "reactstrap";

class Sidebar extends Component {
    render() {
        return (
            <Navbar dark color="dark" className="sticky-top" expand="md">
                <Container>
                    <NavbarBrand href="/">
                        <i className="fab fa-react text-info"></i> React App
                    </NavbarBrand>
                    <Nav className="ml-auto">
                        <NavItem>
                            <NavLink href="/"><i className="fas fa-home"></i> HOME</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about"><i className="fas fa-info-circle"></i> ABOUT</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/blog"><i className="fas fa-pen"></i> BLOG</NavLink>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}

export default Sidebar;
