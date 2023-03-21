import React, { useState } from "react";
import {
  // WFAvatar,
  WFDropdown,
  WFDropdownItem,
  WFDropdownMenu,
  WFDropdownToggle,
  // WFIcon,
} from "components/Dropdown";
import classnames from "classnames";
import isEmpty from "lodash.isempty";

const ACCOUNT_URL = "https:/www.google.com/";

export interface IUser {
  name?: string;
  picture?: string;
}

export interface WFAccountMenuProps {
  onSignOut?: () => void;
  onSignIn?: () => void;
  user?: IUser;
  children?: React.ReactNode;
  className?: string;
  hasMenuAlways?: boolean;
  testId?: string;
}

const renderToggleButton = (
  isMenuOpen: boolean,
  isUserLoggedIn: boolean,
  user: IUser = {}
) => {
  if (isMenuOpen) {
    return <img src="/github.svg" alt="GitHubIcon" />;
  }

  if (isUserLoggedIn) {
    return <img src="/github.svg" alt="GitHubIcon" />;
  }

  return <img src="/github.svg" alt="GitHubIcon" />;
};

const WFAccountMenu = (props: WFAccountMenuProps): React.ReactElement => {
  const {
    children,
    user,
    onSignIn,
    onSignOut,
    hasMenuAlways,
    className,
    testId = "accountMenu",
  } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isUserLoggedIn = !isEmpty(user);
  const mainClassName = classnames(
    "account-menu d-inline-flex flex-column flex-shrink-0 justify-content-center align-items-center px-2",
    className
  );
  const singleActionClassName = classnames(
    "d-none",
    { "d-lg-inline-flex": !isUserLoggedIn && !hasMenuAlways },
    mainClassName
  );
  const hamburgerClassName = classnames(
    { "d-lg-none": !hasMenuAlways && !isUserLoggedIn },
    mainClassName
  );
  const dropdownToggleClasses = classnames("account-menu-action px-2", {
    "pt-1": !isUserLoggedIn || isMenuOpen,
  });

  return (
    <>
      <div
        className={singleActionClassName}
        data-test-id={`${testId}-signin`}
        onClick={onSignIn}
        role="button"
        tabIndex={0}
      >
        <img className=" d-block mb-1" src="/github.svg" alt="GitHubIcon" />

        <span className="account-menu-label">Sign In</span>
      </div>

      <div className={hamburgerClassName} data-test-id={testId}>
        <WFDropdown
          align="end"
          isOpen={isMenuOpen}
          onToggle={() => setIsMenuOpen(!isMenuOpen)}
          testId={`${testId}-dropdown`}
        >
          <WFDropdownToggle className={dropdownToggleClasses} variant="link">
            {renderToggleButton(isMenuOpen, isUserLoggedIn, user)}
            <span className="account-menu-label">
              {isMenuOpen ? "Close" : "Menu"}
            </span>
          </WFDropdownToggle>

          <WFDropdownMenu>
            {children}

            {isUserLoggedIn && (
              <>
                <WFDropdownItem
                  className="dropdown-item-heading display-4 text-small fw-medium"
                  testId={`${testId}-account`}
                >
                  Account
                </WFDropdownItem>

                <WFDropdownItem href={ACCOUNT_URL} testId={`${testId}-account`}>
                  Settings
                </WFDropdownItem>

                <WFDropdownItem
                  onClick={onSignOut}
                  testId={`${testId}-signout`}
                >
                  Sign Out
                </WFDropdownItem>
              </>
            )}

            {!isUserLoggedIn && (
              <WFDropdownItem onClick={onSignIn} testId={`${testId}-signin`}>
                Sign In
              </WFDropdownItem>
            )}
          </WFDropdownMenu>
        </WFDropdown>
      </div>
    </>
  );
};

WFAccountMenu.displayName = "WFAccountMenu";

export default WFAccountMenu;
