import * as React from "react";
import { FunctionComponent } from "react";
import Navbar from "react-bootstrap/Navbar";
import { SelectCallback } from "@restart/ui/types";
import { NavbarBrandProps } from "react-bootstrap";
import { NavbarToggleProps } from "react-bootstrap/NavbarToggle";
import { NavbarCollapseProps } from "react-bootstrap/NavbarCollapse";

export interface NavLink {
  text: string;
  href: string;
  children?: NavLink[];
}

export interface WFNavbarProps {
  children?: React.ReactNode;
  className?: string;
  isDefaultExpanded?: boolean;
  variant?: "light" | "dark";
  expand?: boolean | "sm" | "md" | "lg" | "xl";
  bg?: string;
  fixed?: "top" | "bottom";
  sticky?: "top";
  onToggle?: (expanded: boolean) => void;
  onSelect?: SelectCallback;
  shouldCollapseOnSelect?: boolean;
  isExpanded?: boolean;
  role?: string;
  testId?: string;
}

export interface WFNavbarToggleProps extends NavbarToggleProps {
  icon: any;
}

export const WFNavbarBrand: FunctionComponent<NavbarBrandProps> = (props) => (
  <Navbar.Brand {...props} />
);
export const WFNavbarCollapse: FunctionComponent<NavbarCollapseProps> = (
  props
) => <Navbar.Collapse {...props} />;
export const WFNavbarToggle: FunctionComponent<WFNavbarToggleProps> = (
  props
) => {
  const { icon, label, ...otherProps } = props;

  return (
    <Navbar.Toggle as={"div"} {...otherProps} data-test-id="navbar-toggle">
      {icon}

      <div className="navbar-toggler-label">{label}</div>
    </Navbar.Toggle>
  );
};

const WFNavbar: FunctionComponent<WFNavbarProps> = (props) => {
  const {
    children,
    shouldCollapseOnSelect,
    isExpanded,
    testId = "navbar",
    ...otherProps
  } = props;
  return (
    <Navbar
      collapseOnSelect={shouldCollapseOnSelect}
      data-test-id={testId}
      expanded={isExpanded}
      {...otherProps}
    >
      {children}
    </Navbar>
  );
};

export default WFNavbar;
