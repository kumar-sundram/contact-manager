import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Badge
} from 'reactstrap';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="success" light expand="md">
                    <NavbarBrand href="/"><Badge color="dark">Contact Manager</Badge></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem >
                                <NavLink href="/"><Badge color="dark">Home</Badge></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/users/register"><Badge color="dark">Register</Badge></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/users/login"><Badge color="dark">Login</Badge></NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink href="/contacts"><Badge color="dark">My Contacts</Badge></NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink href="/users/logout"><Badge color="dark">logout</Badge></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

