import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import React, { Component } from "react";

// ────────────────────────────────────────────────────────────────────────────────
var icon = (
  <span class="logo">
    <a href="/">
      <img src="/logo.png" height="150" width="120" alt="text here" /></a>
  </span>
);
class NavBar extends Component {
  render() {
    return (
      <div className="main" variant="dark">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/" brand={icon}></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/signin">Sign In</Nav.Link>
            <Nav.Link href="https://webapp.coventry.ac.uk/Timetable-main/studentportal" target="_blank">Timetable</Nav.Link>
            <Nav.Link href="/modules">Modules</Nav.Link>
            <Nav.Link href="/grades">Grades</Nav.Link>
            <Nav.Link href="https://login.microsoftonline.com/" target="_blank">Student Email</Nav.Link>
            <Nav.Link href="/deadlines">Deadlines</Nav.Link>
            <Nav.Link href="https://share.coventry.ac.uk/students/" target="_blank">Student Portal</Nav.Link>
            <Nav.Link href="/tools">Tools</Nav.Link>
            <Nav.Link href="/help">Help</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
