import * as React from "react";
import { FunctionComponent } from "react";
import { NavDropdown } from "react-bootstrap";

export interface WFNavDropdownProps {
  id: string;
  title: React.ReactNode;
  isDisabled?: boolean;
  isActive?: boolean;
  menuRole?: string;
  shouldRenderMenuOnMount?: boolean;
  rootCloseEvent?: "click" | "mousedown";
  className?: string;
  testId?: string;
  children: React.ReactNode;
}

const WFNavDropdown: FunctionComponent<WFNavDropdownProps> = (props) => {
  const {
    isDisabled,
    isActive,
    shouldRenderMenuOnMount,
    testId = "navDropdown",
    ...otherProps
  } = props;
  return (
    <NavDropdown
      active={isActive}
      data-test-id={testId}
      disabled={isDisabled}
      renderMenuOnMount={shouldRenderMenuOnMount}
      {...otherProps}
    />
  );
};

export default WFNavDropdown;
