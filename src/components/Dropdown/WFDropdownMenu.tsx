import * as React from "react";
import { FunctionComponent } from "react";

import DropdownMenu from "react-bootstrap/DropdownMenu";

export interface WFDropdownMenuProps {
  isOpen?: boolean;
  isFlipped?: boolean;
  as?: "div";
  align?: "start" | "end";
  onSelect?: () => void;
  rootCloseEvent?: "click" | "mousedown";
  popperConfig?: any;
  children?: any;
  className?: string;
  testId?: string;
}

const WFDropdownMenu: FunctionComponent<WFDropdownMenuProps> = (props) => {
  const { isOpen, isFlipped, testId = "dropdownMenu", ...otherProps } = props;
  return (
    <DropdownMenu
      data-test-id={testId}
      flip={isFlipped}
      show={isOpen}
      {...otherProps}
    />
  );
};

WFDropdownMenu.defaultProps = {
  as: "div",
};

export default WFDropdownMenu;
