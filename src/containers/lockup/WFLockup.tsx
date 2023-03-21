import React from "react";
import classnames from "classnames";

export type WFLockupVariation = "regular" | "bold" | "display";

export interface WFLockupProps {
  className?: string;
  isStacked?: boolean;
  isResponsive?: boolean;
  variation?: WFLockupVariation;
  text?: string;
  logoLink?: string;
  lockupLink?: string;
  testId?: string;
  isActive?: boolean;
}

interface WFWithLink {
  link?: string;
  children: any;
}

const WithLink: React.FC<WFWithLink> = ({ link, children }) => {
  if (link) {
    return <a href={link}>{children}</a>;
  }

  return children;
};

const textClassesMap = {
  regular: "",
  bold: "fw-bold",
  display: "display-4",
};

const WFLockup: React.FC<WFLockupProps> = (props) => {
  const {
    className,
    isStacked,
    isResponsive,
    lockupLink,
    text,
    variation,
    logoLink,
    testId,
    isActive,
  } = props;

  const lockupClasses = classnames("d-flex align-items-center", className);
  const stackedLogoClasses = classnames({
    "d-none": !isStacked,
    "d-block": isStacked,
    "d-lg-block": !isStacked && isResponsive,
  });
  const regularLogoClasses = classnames({
    "d-none": isStacked,
    "d-block": !isStacked,
    "d-lg-none": !isStacked && isResponsive,
  });
  const textClasses = classnames(
    "decorator-index lockup-decorator-index text-decoration-none mb-0 ms-3 lh-sm",
    textClassesMap[variation || "regular"],
    {
      "fw-bold": isActive,
    }
  );

  return (
    <div className={lockupClasses} data-test-id={testId}>
      <WithLink link={logoLink}>
        <div className={stackedLogoClasses}>
          <img src="/github.svg" alt="GitHubIcon" />
        </div>

        <div className={regularLogoClasses}>
          <img src="/vercel.svg" alt="VercelIcon" />
        </div>
      </WithLink>

      {text &&
        (lockupLink ? (
          <a className={textClasses} href={lockupLink}>
            {text}
          </a>
        ) : (
          <p className={textClasses}>{text}</p>
        ))}
    </div>
  );
};

WFLockup.defaultProps = {
  isResponsive: true,
  isStacked: false,
  testId: "lockup",
};

WFLockup.displayName = "WFLockup";

export default WFLockup;
