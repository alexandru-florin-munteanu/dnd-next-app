import * as React from "react";
import { FunctionComponent } from "react";
import Nav from "react-bootstrap/Nav";
import { SelectCallback } from "@restart/ui/types";

export type WFTypeVariants = "tabs" | "pills";

export interface WFNavProps {
  id?: string;
  className?: string;
  variant?: WFTypeVariants;
  activeKey?: string;
  defaultActiveKey?: string | number;
  shouldFill?: boolean;
  isJustify?: boolean;
  onSelect?: SelectCallback;
  role?: string;
  hasNavbar?: boolean;
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
  testId?: string;
  children: React.ReactNode;
}

const WFNav: FunctionComponent<WFNavProps> = (props) => {
  const {
    shouldFill,
    isJustify,
    hasNavbar,
    testId = "nav",
    ...otherProps
  } = props;
  return (
    <Nav
      data-test-id={testId}
      fill={shouldFill}
      justify={isJustify}
      navbar={hasNavbar}
      {...otherProps}
    />
  );
};
export default WFNav;
