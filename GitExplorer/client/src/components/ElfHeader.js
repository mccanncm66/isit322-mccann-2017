/**
 * Created by charlie on 4/15/17.
 */

import React, {Component} from 'react';
import logo from '../images/Inkscape-small.svg';
import '../css/App.css';
import '../css/menu.css';
import { Jumbotron, Nav, Navbar, NavItem   } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class ElfHeader extends Component {

    render() {
        const navbarInstance = (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer to='/'><a href='/'>Gist Explorer</a></LinkContainer>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to='/'><NavItem>Show Git User</NavItem></LinkContainer>
                        <LinkContainer to='/show-new-gist'><NavItem>Create Gist</NavItem></LinkContainer>
                        <LinkContainer to='/get-gist-list'><NavItem>Get Gist List</NavItem></LinkContainer>
                        <LinkContainer to='/get-numbers'><NavItem>Numbers</NavItem></LinkContainer>
                        <LinkContainer to='/get-foo'><NavItem>BarFoo</NavItem></LinkContainer>
                        <LinkContainer to='/charlie-jso'><NavItem>Show JsObjects</NavItem></LinkContainer>
                        <LinkContainer to='/test-micros'><NavItem>Test Mircos</NavItem></LinkContainer>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        );
        return (

                <div>
                    <div className='App'>
                        {navbarInstance}
                        <Jumbotron>
                        <div className='App-header'>
                            <img src={logo} className='App-logo' alt='logo'/>
                            <h2>Welcome to React</h2>

                        </div>
                        </Jumbotron>
                    </div>

                </div>
        );
    }
}

export default ElfHeader;

