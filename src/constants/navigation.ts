export const DEFAULT_MENU_NAV = [
  {
    text: "Home",
    href: process.env.MAIN_URL || "http://localhost:3000/",
    isActive: true,
  },
  {
    text: "About",
    href: process.env.MAIN_URL || "http://localhost:3000/",
    isActive: false,
  },
  {
    text: "Contact us",
    href: process.env.MAIN_URL || "http://localhost:3000/",
    isActive: false,
  },
  {
    text: "Join",
    href: process.env.MAIN_URL || "http://localhost:3000/",
    isActive: false,
  },
];
