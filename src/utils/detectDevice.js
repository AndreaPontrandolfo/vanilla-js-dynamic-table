import UserAgent from "ua-parser-js";

export const detectDevice = () => {
  const userAgent = new UserAgent();
  const device = userAgent.getDevice().type;

  switch (device) {
    case "mobile":
      return { isMobile: true };
    case "tablet":
      return { isTablet: true };

    default:
      return { isDesktop: true };
  }
};
