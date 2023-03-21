import * as React from "react";
import classNames from "classnames";

interface WFDropdownHeaderProps {
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  testId?: string;
}

const WFDropdownHeader = (props: WFDropdownHeaderProps): React.ReactElement => {
  const { className, isActive, onClick, testId = "dropdownHeader" } = props;

  const classes = classNames(
    {
      "dropdown-header": true,
      active: isActive,
      disabled: !onClick,
    },
    className
  );

  return (
    <div {...props} className={classes} data-test-id={testId} role="button" />
  );
};

export default WFDropdownHeader;
