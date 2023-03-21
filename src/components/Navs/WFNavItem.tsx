import * as React from "react";
import { FunctionComponent } from "react";
import NavItem from "react-bootstrap/NavItem";

export interface WFNavItemProps {
  role?: string;
  ref?: any;
  className?: string;
  testId?: string;
}

const WFNavItem: FunctionComponent<WFNavItemProps> = (props) => {
  const { testId = "navItem", ...otherProps } = props;
  return <NavItem data-test-id={testId} {...otherProps} />;
};

export default WFNavItem;
