import React from "react";
import classnames from "classnames";
import { WFDropdownDivider, WFDropdownItem } from "components/Dropdown";
import { WFNav, WFNavbar, WFNavLink } from "components/Navs";
import WFAccountMenu from "containers/account_menu";
import WFLockup from "containers/lockup";
import { NavLink } from "./models";
import { DEFAULT_MENU_NAV } from "./constants/navigation";

export interface WFHeaderProps {
  className?: string;
  logoSrc?: string;
  logoLink?: string;
  lockupLink?: string;
  lockupText?: string;
  isLockupResponsive?: boolean;
  isLockupActive?: boolean;
  isNavigationCondensed?: boolean;
  isRightAligned?: boolean;
  navlinks?: NavLink[];
  login?: () => void;
  logout?: () => void;
  user?: any;
}

const renderNavLinks = (links: NavLink[], isRightAligned: boolean) => {
  return links.map((link, index) => {
    const navLinkClasses = classnames("position-relative mx-3", {
      "center-aligned text-uppercase fw-medium": !isRightAligned,
      "fw-bold": isRightAligned && link?.isActive,
    });

    return (
      <WFNavLink
        className={navLinkClasses}
        href={link.href}
        isActive={link.isActive}
        key={`nav-item-${index}}`}
        testId={`nav-item-${index}`}
      >
        {link.text}
      </WFNavLink>
    );
  });
};

const renderDropdownChildrenLinks = (navLinks: NavLink[] = []) => {
  if (navLinks?.length === 0) {
    return null;
  }
  return navLinks.map((link, index) => {
    const dropdownItemClasses = classnames("d-lg-none dropdown-item-child ", {
      active: link.isActive,
    });

    return (
      <WFDropdownItem
        className={dropdownItemClasses}
        href={link.href}
        key={`nav-child-dropdown-item-${index}}`}
        testId={`nav-child-dropdown-item-${index}`}
      >
        {link.text}
      </WFDropdownItem>
    );
  });
};

const renderDropdownNavLinks = (
  links: NavLink[],
  isNavigationCondensed: boolean
) => {
  const dropdownDividerClasses = classnames("d-block", {
    "d-lg-none": !isNavigationCondensed,
  });

  return (
    <>
      {links.map((link, index) => {
        if (link.isHeading) {
          const dropdownItemHeaderClasses = classnames(
            dropdownDividerClasses,
            "dropdown-item-heading display-4 text-small fw-medium"
          );

          return (
            <WFDropdownItem
              className={dropdownItemHeaderClasses}
              key={`nav-dropdown-item-${index}`}
              testId={`nav-dropdown-item-${index}`}
            >
              {link.text}
            </WFDropdownItem>
          );
        }

        const dropdownItemClasses = classnames(dropdownDividerClasses, {
          active: link.isActive,
        });

        return (
          <div key={`nav-dropdown-divider-${index}}`}>
            <WFDropdownItem
              className={dropdownItemClasses}
              href={link.href}
              key={`nav-dropdown-item-${index}`}
              testId={`nav-dropdown-item-${index}`}
            >
              {link.text}
            </WFDropdownItem>

            {renderDropdownChildrenLinks(link.childrenLinks)}

            {index < links.length - 1 && link.childrenLinks && (
              <WFDropdownDivider
                className={classnames("d-lg-none ms-4", dropdownDividerClasses)}
              />
            )}
          </div>
        );
      })}

      <WFDropdownDivider className={dropdownDividerClasses} />
    </>
  );
};

const WFHeader: React.FC<WFHeaderProps> = (props) => {
  const {
    logoLink,
    lockupLink,
    lockupText,
    isLockupResponsive,
    isLockupActive,
    className,
    navlinks = DEFAULT_MENU_NAV,
    isRightAligned = true,
    isNavigationCondensed = false,
    login,
    logout,
    user,
  } = props;

  const headerClasses = classnames("justify-content-between p-1", className);
  const navClasses = classnames(
    "d-none d-lg-flex header-hav align-items-center",
    {
      "flex-grow-1 justify-content-end me-2": isRightAligned,
    }
  );

  const secondaryNavClasses = classnames(
    "d-none d-lg-flex header-hav align-items-center flex-grow-1 justify-content-end me-2"
  );

  // Get all children links from parent links
  const childrenLinks = navlinks.flatMap(
    (link: NavLink) => link.childrenLinks ?? []
  );

  return (
    <WFNavbar className={headerClasses} data-test-id="header">
      <WFLockup
        className="ps-2"
        isActive={isLockupActive}
        isResponsive={isLockupResponsive}
        isStacked={!isLockupResponsive}
        lockupLink={lockupLink}
        logoLink={logoLink}
        testId="header-lockup"
        text={lockupText}
      />

      {!isNavigationCondensed && navlinks && (
        <WFNav className={navClasses}>
          {renderNavLinks(navlinks, isRightAligned)}
        </WFNav>
      )}

      {childrenLinks.length > 0 && (
        <WFNav className={secondaryNavClasses}>
          {renderNavLinks(childrenLinks, isRightAligned)}
        </WFNav>
      )}

      <WFAccountMenu
        hasMenuAlways={isNavigationCondensed}
        onSignIn={() => login && login()}
        onSignOut={() => logout && logout()}
        user={user}
      >
        {navlinks.length > 0 &&
          renderDropdownNavLinks(navlinks, isNavigationCondensed)}
      </WFAccountMenu>
    </WFNavbar>
  );
};

WFHeader.displayName = "WFHeader";
WFHeader.defaultProps = {
  isLockupResponsive: true,
  isNavigationCondensed: false,
  isRightAligned: false,
  logoLink: "https://www.wolf-forge.org",
  navlinks: DEFAULT_MENU_NAV,
};

export default WFHeader;
