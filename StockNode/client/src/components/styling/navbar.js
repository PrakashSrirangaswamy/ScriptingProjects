import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Projects from '../tabs/projects';
import Git from '../tabs/git';
import Funfacts from '../tabs/funfacts';
import Contacts from '../tabs/contacts';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class navbarTest extends Component {

    render() {
        return (
            <div>
                <div>
                    {/* <Container> */}
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="/">Home</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/projects">Projects</Nav.Link>
                                <Nav.Link href="/funfacts">Fun Facts</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="/github">Git Hub</Nav.Link>
                                <Nav.Link eventKey={2} href="/contacts">Contacts</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    {/* </Container> */}
                    {/* <Route path="/projects" component={Projects} /> */}
                    <Router>
                        <div>
                            <Switch>
                                <Route path="/projects" component={Projects} />
                                <Route path="/funfacts" component={Funfacts} />
                                <Route path="/github" component={Git} />
                                <Route path="/contacts" component={Contacts} />
                            </Switch>
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

export default navbarTest;

