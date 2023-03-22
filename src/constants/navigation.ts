const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Dropdown",
    dropdown: true,
    dropdownItems: [
      {
        label: "Item 1",
        href: "/item-1",
      },
      {
        label: "Item 2",
        href: "/item-2",
      },
    ],
  },
];

export default navigation;
