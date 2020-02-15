import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';

class Header extends Component
{
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">AI Soduko Solver</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Header;