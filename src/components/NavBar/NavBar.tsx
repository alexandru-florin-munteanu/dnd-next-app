import React from "react";
import Link from "next/link";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useUser } from "@auth0/nextjs-auth0/client";

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
  const { user } = useUser();

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
            {user ? (
              <>
                <Nav.Item>
                  <CustomLink href="/characters">Characters</CustomLink>
                </Nav.Item>
                <Nav.Item>
                  <CustomLink href="/api/auth/logout">Logout</CustomLink>
                </Nav.Item>
              </>
            ) : (
              <Nav.Item>
                <CustomLink href="/sign-in">Sign In / Sign Up</CustomLink>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
