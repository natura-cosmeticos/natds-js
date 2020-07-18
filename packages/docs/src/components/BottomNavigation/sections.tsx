import React from "react";
import { BottomNavigation, BottomNavigationAction, Icon } from "@naturacosmeticos/natds-web";

export const showLabels = [
  {
    title: "Showing Labels",
    component:
      <BottomNavigation showLabels={true} value="btn2" >
        <BottomNavigationAction label="Button" value="btn1" icon={<Icon name="filled-action-cancel" size="tiny" />} />
        <BottomNavigationAction label="Nicer Button" value="btn2" icon={<Icon name="filled-action-check" size="tiny" />} />
        <BottomNavigationAction label="Much Nicer Button" value="btn3" icon={<Icon name="filled-media-play" size="tiny" />} />
      </BottomNavigation>,

  },
  {
    title: "Not Showing Labels",
    component:
      <BottomNavigation showLabels={false} value="btn2">
        <BottomNavigationAction label="Button" value="btn1" icon={<Icon name="filled-action-cancel" size="tiny" />} />
        <BottomNavigationAction label="Nicer Button" value="btn2" icon={<Icon name="filled-action-check" size="tiny" />} />
        <BottomNavigationAction label="Much Nicer Button" value="btn3" icon={<Icon name="filled-media-play" size="tiny" />} />
      </BottomNavigation>,

  },
];
