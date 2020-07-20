import * as React from "react";
import * as renderer from "react-test-renderer";

import { expect } from "chai";
import { assert, spy } from "sinon";
import { mount } from "enzyme";

import DrawerMenu, { DrawerMenuItem, DrawerMenuSection, IDrawerMenuSectionProps } from "../Components/DrawerMenu";
import ContextualBadge from "../Components/ContextualBadge";
import Collapse from "../Components/Collapse";

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
    const component = renderer.create(<DrawerMenu list={listComplete as unknown as [IDrawerMenuSectionProps]} />).toJSON();

    expect(component).matchSnapshot("DrawerMenu list snapshot");
  });

  test("should match snapshot - DrawerMenu custom component", () => {
    const component = renderer.create(<DrawerMenu list={listComplete as unknown as [IDrawerMenuSectionProps]} component="section" />).toJSON();

    expect(component).matchSnapshot("DrawerMenu custom component snapshot");
  });

  test("should match snapshot - DrawerMenu custom children", () => {
    const children = <div>some custom children</div>,
      component = renderer.create(<DrawerMenu list={listComplete as unknown as [IDrawerMenuSectionProps]}>{children}</DrawerMenu>).toJSON();

    expect(component).matchSnapshot("DrawerMenu custom children snapshot");
  });

  test("should render custom children", () => {
    const children = <div className="custom">some custom children</div>,
      component = mount(<DrawerMenu list={listBasic as [IDrawerMenuSectionProps]}>{children}</DrawerMenu>);

    expect(component).to.have.descendants(".custom");
    expect(component).to.not.have.descendants(DrawerMenuItem);
    expect(component).to.not.have.descendants(DrawerMenuSection);
  });

  test("should render list item", () => {
    const component = mount(<DrawerMenu list={listBasic as [IDrawerMenuSectionProps]} />);

    expect(component).to.have.descendants(DrawerMenuItem);
    expect(component).to.not.have.descendants(ContextualBadge);
    expect(component).to.not.have.descendants(DrawerMenuSection);
  });

  test("should render list item with badge", () => {
    const [listItem] = listBasic,
      list = [
        {
          ...listItem,
          badge: "badge",
        },
      ],
      component = mount(<DrawerMenu list={list as [IDrawerMenuSectionProps]} />);

    expect(component).to.have.descendants(ContextualBadge);
    expect(component).to.not.have.descendants(DrawerMenuSection);
  });

  test("should render submenu item", () => {
    const component = mount(<DrawerMenu list={listComplete as unknown as [IDrawerMenuSectionProps]} />);

    expect(component).to.have.descendants(DrawerMenuSection);
  });

  const INDEX_ONE = 1,
    INDEX_TWO = 2;

  test("should start with submenu opened", () => {
    const listItem = listComplete[INDEX_TWO],
      list = [
        {
          ...listItem,
          opened: true,
        },
      ],
      component = mount(<DrawerMenu list={list as unknown as [IDrawerMenuSectionProps]} />);

    expect(component.find(Collapse).prop("in")).to.equal(true);
  });

  test("should open submenu and call onToggle", () => {
    const onToggle = spy(listComplete[INDEX_TWO], "onToggle"),
      component = mount(<DrawerMenu list={listComplete as unknown as [IDrawerMenuSectionProps]} />);

    expect(component.find(Collapse).prop("in")).to.equal(false);

    component.find("li").at(INDEX_TWO)
      .simulate("click");

    expect(component.find(Collapse).prop("in")).to.equal(true);

    assert.calledOnce(onToggle);
  });

  test("should select a item and call onSelect", () => {
    const onSelect = spy(listComplete[INDEX_ONE], "onSelect"),
      component = mount(<DrawerMenu list={listComplete as unknown as [IDrawerMenuSectionProps]} />);

    component.find("li").at(INDEX_ONE)
      .simulate("click");

    assert.calledOnce(onSelect);
  });
});
