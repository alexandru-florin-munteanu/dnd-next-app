import * as React from "react";
import { FunctionComponent } from "react";
import NavLink from "react-bootstrap/NavLink";

export interface WFNavLinkProps {
  className?: string;
  ref?: any;
  isActive?: boolean;
  isDisabled?: boolean;
  role?: string;
  href?: string;
  onSelect?: React.ReactEventHandler<HTMLElement>;
  onClick?: React.ReactEventHandler<HTMLElement>;
  eventKey?: string | number;
  target?: string;
  testId?: string;
  children?: React.ReactNode;
}

const WFNavLink: FunctionComponent<WFNavLinkProps> = React.forwardRef(
  (props, ref) => {
    const { isActive, isDisabled, testId = "navLink", ...otherProps } = props;
    return (
      <NavLink
        active={isActive}
        data-test-id={testId}
        disabled={isDisabled}
        ref={ref}
        {...otherProps}
      />
    );
  }
);

WFNavLink.displayName = "WFNavLink";

export default WFNavLink;
