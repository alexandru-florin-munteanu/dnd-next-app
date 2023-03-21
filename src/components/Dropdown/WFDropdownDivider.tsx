import * as React from "react";
import classNames from "classnames";

interface WFDropdownDividerProps {
  className?: string;
  testId?: string;
}

const WFDropdownDivider = (
  props: WFDropdownDividerProps
): React.ReactElement => {
  const { className, testId = "dropdownDivider" } = props;
  const classes = classNames(
    {
      "dropdown-divider": true,
    },
    className
  );

  return (
    <div
      data-test-id={testId}
      role="separator"
      {...props}
      className={classes}
    />
  );
};

WFDropdownDivider.defaultProps = {
  className: "",
};

export default WFDropdownDivider;
