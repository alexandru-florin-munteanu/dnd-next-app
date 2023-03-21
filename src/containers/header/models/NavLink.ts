import { WFNavLinkProps } from "components/Navs";

export interface NavLink extends WFNavLinkProps {
  text: string;
  href?: string;
  isActive?: boolean;
  isHeading?: boolean;
  childrenLinks?: Array<NavLink>;
}
