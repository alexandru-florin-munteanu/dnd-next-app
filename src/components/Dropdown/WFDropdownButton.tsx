import * as React from "react";

import DropdownButton from "react-bootstrap/DropdownButton";

export interface WFDropdownButtonProps {
  id: any;
  href?: string;
  title: any;
  isDisabled?: boolean;
  className?: string;
  menuRole?: string;
  rootCloseEvent?: "click" | "mousedown";
  variant?: string;
  size?: "sm" | "lg";
  onSelect?: any;
  testId?: string;
  children: React.ReactNode;
}

const WFDropdownButton: React.FunctionComponent<WFDropdownButtonProps> = (
  props
) => {
  const {
    isDisabled,
    className,
    testId = "dropdownButton",
    ...otherProps
  } = props;
  return (
    <DropdownButton
      className={`${!!className || ""} dropdown-button`}
      data-test-id={testId}
      disabled={isDisabled}
      {...otherProps}
    />
  );
};

export default WFDropdownButton;
