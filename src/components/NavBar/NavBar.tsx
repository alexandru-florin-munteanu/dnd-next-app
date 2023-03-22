// src/components/NavBar/NavBar.tsx

import React from "react";
import Link from "next/link";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import navigation from "../../constants/navigation";

const CustomLink: React.FC<{
  href: string | undefined;
  children: React.ReactNode;
}> = ({ href, children }) => {
  return (
    <Link href={{ pathname: href }} legacyBehavior>
      <a className="nav-link">{children}</a>
    </Link>
  );
};

const NavBar: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>My App</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navigation.map((navItem, index) => {
              if (navItem.dropdown) {
                return (
                  <NavDropdown
                    key={index}
                    title={navItem.label}
                    id={`nav-dropdown-${index}`}
                  >
                    {navItem.dropdownItems.map((dropdownItem, idx) => (
                      <NavDropdown.Item
                        key={idx}
                        as={CustomLink}
                        href={dropdownItem.href}
                      >
                        {dropdownItem.label}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                );
              } else {
                return (
                  <Nav.Item key={index}>
                    <CustomLink href={navItem.href}>{navItem.label}</CustomLink>
                  </Nav.Item>
                );
              }
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
