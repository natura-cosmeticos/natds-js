import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import DrawerMenu from "./DrawerMenu";
import { IDrawerMenuSectionProps } from "./DrawerMenuSection";

const listBasic = [
  {
    icon: "outlined-action-love",
    name: "Menu Item",
  },
];

const listComplete = [
  {
    icon: "outlined-action-love",
    name: "Menu Item",
  },
  {
    badge: "Novo",
    icon: "outlined-action-love",
    name: "Menu Item",
    onSelect: () => null,
  },
  {
    badge: "Novo",
    icon: "outlined-action-love",
    list: [
      {
        name: "Menu Item",
        icon: "outlined-action-love",
      },
      {
        name: "Menu Item",
        icon: "outlined-action-love",
        badge: "New",
      },
    ],
    name: "Menu Item",
    onToggle: () => null,
    opened: false,
  },
  {
    section: "section",
  },
  {
    name: "Menu Item",
    icon: "outlined-action-love",
    badge: "Novo",
  },
];

describe("DrawerMenu component", () => {
  test("should match snapshot - DrawerMenu list", () => {
    const component = TestRenderer.create(<DrawerMenu list={listComplete as unknown as [IDrawerMenuSectionProps]} />).toJSON();

    expect(component).toMatchSnapshot();
  });

  test("should match snapshot - DrawerMenu custom component", () => {
    const component = TestRenderer.create(<DrawerMenu list={listComplete as unknown as [IDrawerMenuSectionProps]} component="section" />).toJSON();

    expect(component).toMatchSnapshot();
  });

  test("should match snapshot - DrawerMenu custom children", () => {
    const children = <div>some custom children</div>,
      component = TestRenderer.create(<DrawerMenu list={listComplete as unknown as [IDrawerMenuSectionProps]}>{children}</DrawerMenu>).toJSON();

    expect(component).toMatchSnapshot();
  });

  test("should render custom children", () => {
    const children = <div className="custom">some custom children</div>,
      component = TestRenderer.create(<DrawerMenu list={listBasic as [IDrawerMenuSectionProps]}>{children}</DrawerMenu>);

    expect(component).toMatchSnapshot();
  });

  test("should render list item", () => {
    const component = TestRenderer.create(<DrawerMenu list={listBasic as [IDrawerMenuSectionProps]} />);

    expect(component).toMatchSnapshot();
  });

  test("should render list item with badge", () => {
    const [listItem] = listBasic,
      list = [
        {
          ...listItem,
          badge: "badge",
        },
      ];
    const component = TestRenderer.create(<DrawerMenu list={list as [IDrawerMenuSectionProps]} />);

    expect(component).toMatchSnapshot();
  });

  test("should render submenu item", () => {
    const component = TestRenderer.create(<DrawerMenu list={listComplete as unknown as [IDrawerMenuSectionProps]} />);

    expect(component).toMatchSnapshot();
  });

  test("should start with submenu opened", () => {
    const INDEX_TWO = 2;
    const listItem = listComplete[INDEX_TWO];
    const list = [
      {
        ...listItem,
        opened: true,
      },
    ];
    const component = TestRenderer.create(<DrawerMenu list={list as unknown as [IDrawerMenuSectionProps]} />);

    expect(component).toMatchSnapshot();
  });

  it.todo("should open submenu and call onToggle");

  it.todo("should select a item and call onSelect");
});
