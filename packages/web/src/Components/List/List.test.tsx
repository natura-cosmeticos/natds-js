import * as React from "react";
import * as TestRenderer from "react-test-renderer";
import { List } from "./List";
import { ListSubheader } from "../ListSubheader";
import { ListItem } from "../ListItem";
import { ListItemAvatar } from "../ListItemAvatar";
import { Avatar } from "../Avatar";
import { Icon } from "../Icon";
import { ListItemIcon } from "../ListItemIcon";
import { ListItemSecondaryAction } from "../ListItemSecondaryAction";
import { IconButton } from "../IconButton";
import { ListItemText } from "../ListItemText";

describe("List components", () => {
  describe("rendering variants", () => {
    test("should match to snapshot - empty list", () => {
      const component = TestRenderer.create(<List />);

      expect(component).toMatchSnapshot("List empty snapshot");
    });

    test("should match to snapshot - with ListSubheader", () => {
      const component = TestRenderer.create(<List
        subheader={<ListSubheader id="subheader">Subheader</ListSubheader>}
      />);

      expect(component).toMatchSnapshot("List with ListSubheader snapshot");
    });

    test("should match to snapshot - with ListItem", () => {
      const component = TestRenderer.create(<List>
        <ListItem>Test</ListItem>
      </List>);

      expect(component).toMatchSnapshot("List with ListItem snapshot");
    });

    test("should match to snapshot - with ListItem button", () => {
      const component = TestRenderer.create(<List>
        <ListItem button>Test</ListItem>
      </List>);

      expect(component).toMatchSnapshot("List with ListItem button snapshot");
    });

    test("should match to snapshot - with ListItemAvatar", () => {
      const component = TestRenderer.create(<List>
        <ListItem>
          <ListItemAvatar>
            <Avatar color="default" size="small">
              <Icon name="outlined-navigation-close" size="tiny" />
            </Avatar>
          </ListItemAvatar>
        </ListItem>
      </List>);

      expect(component).toMatchSnapshot("List with ListItemAvatar snapshot");
    });

    test("should match to snapshot - with ListItemIcon", () => {
      const component = TestRenderer.create(<List>
        <ListItem>
          <ListItemIcon>
            <Icon name="outlined-navigation-close" size="small" />
          </ListItemIcon>
        </ListItem>
      </List>);

      expect(component).toMatchSnapshot("List with ListItemIcon snapshot");
    });

    test("should match to snapshot - with ListItemSecondaryAction", () => {
      const component = TestRenderer.create(<List>
        <ListItem>
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="shopping">
              <Icon name="outlined-navigation-close" size="tiny" />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>);

      expect(component).toMatchSnapshot("List with ListItemSecondaryAction snapshot");
    });

    test("should match to snapshot - with ListItemText", () => {
      const component = TestRenderer.create(<List>
        <ListItem>
          <ListItemText primary="Text only" />
        </ListItem>
      </List>);

      expect(component).toMatchSnapshot("List with ListItemText snapshot");
    });
  });
});
