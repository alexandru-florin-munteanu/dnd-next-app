import React from "react";
import WFHeader, { NavLink } from "containers/header";
import Button from "components/Button";
import Router from "next/router";
import { WFNav, WFNavbar, WFNavLink } from "components/Navs";
import classnames from "classnames";
import { DEFAULT_MENU_NAV } from "constants/navigation";
import WFLockup from "containers/lockup";
// Replace with the path to your logo image file

const logoSrc = "https://via.placeholder.com/150x50";

const renderNavLinks = (links: NavLink[], isRightAligned: boolean) => {
  return links.map((link, index) => {
    const navLinkClasses = classnames("position-relative mx-3", {
      "center-aligned text-uppercase fw-medium": !isRightAligned,
      "fw-bold": isRightAligned && link?.isActive,
    });

    return (
      <WFNavLink
        className={navLinkClasses}
        href={link.href}
        isActive={link.isActive}
        key={`nav-item-${index}}`}
        testId={`nav-item-${index}`}
      >
        {link.text}
      </WFNavLink>
    );
  });
};

const App: React.FunctionComponent = () => {
  const handleLogin = () => {
    // Handle login logic here
  };

  const handleLogout = () => {
    // Handle logout logic here
  };

  // Replace with your user object or state
  const user = {
    name: "John Doe",
  };

  const headerClasses = classnames("justify-content-between p-1");
  const navClasses = classnames(
    "d-none d-lg-flex header-hav align-items-center",
    {
      "flex-grow-1 justify-content-end me-2": true,
    }
  );

  return (
    <div>
      <Button text="Click me" onClick={() => console.log("clicked!")} />
      hello world index
      <WFHeader
        lockupText="Wolf Forge AI"
        lockupLink="/"
        isLockupResponsive={false}
        logoLink="/"
        className="shadow-sm"
        isNavigationCondensed={false}
        navlinks={DEFAULT_MENU_NAV}
        isRightAligned
        user={{
          email: "ilcapo@gmail.com",
          family_name: "Highlander",
          given_name: "Alexander",
          name: "highLANDev",
          picture: "",
        }}
        login={() => {
          console.log("logged in!");
        }}
        logout={() => {
          console.log("logged out!");
        }}
      />
      {/* Other components */}
    </div>
  );
};

export default App;
