import React, { ReactElement } from "react"
import { Navbar, Nav, Button } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"

export function AppNavbar(): ReactElement {
  const isCursive = false

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">
        React Hooks for pros
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={NavLink} to="/person-editor">
          Person Editor
        </Nav.Link>
        <Nav.Link as={NavLink} to="/counter">
          Rules of Hooks
        </Nav.Link>
        <Nav.Link as={NavLink} to="/kimrof-person-editor">
          Kimrof
        </Nav.Link>
        <Nav.Link href="https://formik.org/docs/api/formik" target="formik">
          Formik
        </Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link
          className="justify-content-end"
          as={Button}
          variant="link"
          onClick={() => {
            // Set fontFamily
          }}
        >
          {isCursive ? "Normal" : "Cursive"}
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}
