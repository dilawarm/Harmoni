//@flow

import * as React from 'react';
import {Component} from 'react-simplified';
import {Button,Navbar,Nav, NavDropdown, Form, FormControl} from 'react-bootstrap';
import { User } from '../../../services/UserService';
import { createHashHistory } from 'history';
import {Alert} from '../../../widgets';

const history = createHashHistory();





export class Navigation extends Component {
  user: User | any = null;

  render() {
    //If there is a logged in user

    if (this.user) {
      return <div>
        <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home">Harmoni</Navbar.Brand>
          <Form inline  style={{paddingRight: 60 + 'px'}} >
            <FormControl type="search"
                         className="ml-sm-2 navbar-nav "
                         placeholder="Søk"
                         value={this.search}
                         onChange={(event: SyntheticInputEvent<HTMLInputElement>) =>
                           (this.search = event.target.value)}/> <Button variant="outline-success">Search</Button>
          </Form>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-sm-2" style={{paddingLeft: 600 + 'px'}}>
              <Nav.Link to="#home" style={{marginTop:10+'px'}}>Alle arrangement</Nav.Link>
              <Navbar.Text> Logget inn som:
                <a>
                  <NavDropdown title={this.profile.user_name} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Mine arrangement</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Opprett arrangement</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Rediger profil</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <Button variant="danger" onClick={this.logout}>Logg ut</Button>
                  </NavDropdown>
                </a>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    } else {
      return <div>
        <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home">Harmoni</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Form inline  style={{paddingRight: 60 + 'px'}} >
              <FormControl type="text"
                         placeholder="Search"
                         className="ml-sm-2"
                         value={this.search}
                         onChange={(event: SyntheticInputEvent<HTMLInputElement>) =>
                           (this.search = event.target.value)}/><Button variant="outline-success">Search</Button>
            </Form>
            <Nav className="mr-sm-2" style={{paddingLeft: 700 + 'px'}}>
              <Nav.Link to="#home" style={{marginTop:10+'px'}}>Alle arrangement</Nav.Link>
              <Navbar.Text>
                <Button variant="success" onClick={this.login} >Logg inn</Button>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    }
  }
  mounted = (newUsr : User| any) => {
    this.user = newUsr; };

  logout(){
    history.push("/");
    this.user = null;
    Alert.danger("Du er nå logget ut.");
  }

  login(){
    history.push("/login");
  }

}