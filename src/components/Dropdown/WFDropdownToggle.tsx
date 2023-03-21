import * as React from "react";
import DropdownToggle from "react-bootstrap/DropdownToggle";
// import { WFButtonVariant } from "components/Button";

export interface WFDropdownToggleProps {
  id?: string;
  shouldSplit?: boolean;
  as?: "a" | "button";
  variant?: string;
  title?: string;
  className?: string;
  style?: React.CSSProperties;
  testId?: string;
  children?: React.ReactNode;
}

const WFDropdownToggle: React.FunctionComponent<WFDropdownToggleProps> = (
  props
) => {
  const { shouldSplit, testId = "dropdownToggle", ...otherProps } = props;
  return (
    <DropdownToggle data-test-id={testId} split={shouldSplit} {...otherProps} />
  );
};

export default WFDropdownToggle;
