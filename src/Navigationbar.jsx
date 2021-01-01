import React, { useState } from "react";
import logo from "../src/logo.png";
import 'bootstrap/js/dist/dropdown';
import { Button, Nav, Form, FormControl, NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import Slide from "./Slide";
import Cart from "./Cart";

function Navigationbar() {
  return (
    <>
<div >
      <Navbar  fixed='top'  collapseOnSelect expand="lg" bg="light" variant="light" className="NavgationBar">
        <Navbar.Brand href="/">
          <img
            src={logo}
            height='50'
            width='50' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" className='Cname'> | ADI LIFESTYLE</Nav.Link>
            
            <NavDropdown title="MEN" className="mx-4" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/menshirt">Shirts</NavDropdown.Item>
              <NavDropdown.Item href="/mentshirt">T-Shirts</NavDropdown.Item>
              <NavDropdown.Item href="/menpant">Pants</NavDropdown.Item>
              <NavDropdown.Item href="/menshoes">Shoes</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="WOMEN" className="mx-4" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/womensaree">Sarees</NavDropdown.Item>
              <NavDropdown.Item href="/womentop">Tops</NavDropdown.Item>
              <NavDropdown.Item href="/womenpant">Pants</NavDropdown.Item>
              <NavDropdown.Item href="/womenfootwear">Footwear</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="KIDS" className="mx-4" id="collasible-nav-dropdown">
              <NavDropdown.Item href="kidshirt">Shirts</NavDropdown.Item>
              <NavDropdown.Item href="/kidtshirt">T-Shirts</NavDropdown.Item>
              <NavDropdown.Item href="/kidpant">Pants</NavDropdown.Item>
              <NavDropdown.Item href="/kidfootwear">Footwear</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="search_button mr-sm-2" />
            <Button variant="outline-success" onClick={()=>alert(` Opps!! No such items found`)}>Search</Button>
          </Form>

         <Cart/>

        </Navbar.Collapse>
      </Navbar>
      
</div>
    </>
  );
}

export default Navigationbar;
