import React from 'react';
import avatar from '../image/avatar.jpg';
import {Navbar, NavItem, MenuItem, Header, Brand, Nav, Col, Image, circle} from 'react-bootstrap';

export default class Header1 extends React.Component{
    render(){
        return(
            <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">Tic Tac Toe</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">About</NavItem>
              <NavItem>
              <Col xs={6} md={4}>
                <Image src={avatar} circle width={25}  />
              </Col>
              </NavItem>
            </Nav>
          </Navbar>
        );
    }
}