import Button from "components/Button";
import * as React from "react";
import Dropdown from "react-bootstrap/Dropdown";

export interface WFDropdownProps {
  as?: "div";
  align?: "start" | "end";
  isOpen?: boolean;
  isFlipped?: boolean;
  onToggle?: (
    isOpen?: boolean,
    event?: any,
    metadata?: { source: "select" | "click" | "rootClose" | "keydown" }
  ) => void;
  onSelect?: (eventKey?: any, event?: any) => any;
  focusFirstItemOnShow?: false | true | "keyboard";
  className?: string;
  testId?: string;
  menuClassName?: string;
  children: React.ReactNode;
}
//todo v5 align right
const WFDropdown: React.FunctionComponent<WFDropdownProps> = (props) => {
  const {
    isOpen,
    isFlipped,
    testId = "dropdown",
    menuClassName,
    children,
    ...otherProps
  } = props;

  return (
    <Dropdown data-test-id={testId} show={isOpen} {...otherProps}>
      <Dropdown.Toggle />
      <Dropdown.Menu className={menuClassName}>{children}</Dropdown.Menu>
    </Dropdown>
  );
};

WFDropdown.defaultProps = {
  as: "div",
};

export default WFDropdown;
