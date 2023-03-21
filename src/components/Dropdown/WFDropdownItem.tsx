import * as React from "react";
import { ElementType } from "react";
import DropdownItem from "react-bootstrap/DropdownItem";

export interface WFDropdownItemProps {
  isActive?: boolean;
  isDisabled?: boolean;
  as?: ElementType<any>;
  eventKey?: any;
  href?: string;
  className?: string;
  onClick?: (selectedValue?: any) => void;
  onSelect?: React.ReactEventHandler<HTMLElement>;
  testId?: string;
  children?: React.ReactNode;
}

const WFDropdownItem: React.FunctionComponent<WFDropdownItemProps> = (
  props
): React.ReactElement => {
  const {
    isActive,
    isDisabled,
    testId = "dropdownItem",
    ...otherProps
  } = props;
  return (
    <DropdownItem
      active={isActive}
      data-test-id={testId}
      disabled={isDisabled}
      {...otherProps}
    />
  );
};

WFDropdownItem.defaultProps = {
  as: "a",
};

export default WFDropdownItem;
