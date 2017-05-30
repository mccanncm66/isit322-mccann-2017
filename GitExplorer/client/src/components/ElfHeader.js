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
                        <LinkContainer to='/'><NavItem>Gist Explorer</NavItem></LinkContainer>
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
                        {/*                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>*/}
                    </Nav>
{/*                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Link Right</NavItem>
                        <NavItem eventKey={2} href="#">Link Right</NavItem>
                    </Nav>*/}
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
{/*                    <div id='menu-container'>
                        <ul className="elfMenu">
                            <li><Link to='/'>Caleb's Git Info</Link></li>
                            <li><Link to='/get-foo'>BarFoo</Link></li>
                            <li><Link to='/get-numbers'>Numbers</Link></li>
                            <li><Link to='/show-new-gist'>Create Gist</Link></li>
                            <li><Link to='/charlie-jso'>Show JsObjects</Link></li>
                            <li><Link to='/get-gist-list'>Get Gist List</Link></li>
                        </ul>
                    </div>*/}
                </div>
        );
    }
}

export default ElfHeader;

