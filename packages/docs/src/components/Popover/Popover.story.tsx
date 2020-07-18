import React from "react";
import withJest from "@decorators/jest/jest";
import withContainer from "@decorators/container/withContainer";
import { Popover, Button } from "@naturacosmeticos/natds-web";

import { select, text, number } from "@storybook/addon-knobs";
import PopoverDocs from "./Popover.docs.mdx";

export default {
  title: "Components|Popover",
  component: Popover,
  decorators: [
    withJest(), withContainer,
  ],
  parameters: {
    jestImportPath: "web",
    jest: ["Popover"],
    theme: {
      contop: "web",
    },
    docs: {
      page: PopoverDocs,
    },
  },
};

const directions: any = {
  bottomEnd: "bottom-end",
  bottomStart: "bottom-start",
  bottom: "bottom",
  leftEnd: "left-end",
  leftStart: "left-start",
  left: "left",
  rightEnd: "right-end",
  rightStart: "right-start",
  right: "right",
  topEnd: "top-end",
  topStart: "top-start",
  top: "top",
};

/**
 * @todo feat(docs): replace alert() call by Snackbar
 */
const actionsLink: any = {
  with: {
    // eslint-disable-next-line no-alert
    onClick: () => alert("Action link was clicked."),
    text: "Action link",
  },
  without: undefined,
};

export const Interactive = () => {
  const [
    anchorRef, setAnchorRef,
  ] = React.useState();
  const [
    open, setOpen,
  ] = React.useState(false);

  const handleClickButton = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const id = open ? "popover" : undefined;

  // @todo fix(docs): TS2769 - No overload matches this call on Button ref property
  return (
    <div
      style={{
        height: "400px",
        width: "100%",
        marginTop: "150px",
        marginLeft: "400px",
      }}
    >
      <Button
        aria-describedby={id}
        // @ts-ignore
        ref={setAnchorRef}
        variant="contained"
        color="primary"
        onClick={handleClickButton}
      >
        Open Popover
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorRef}
        direction={select("direction", directions, directions.bottom)}
        actionLink={select("actionLink", actionsLink, actionsLink.with)}
        maxWidth={number("maxWidth", 0)}
      >
        {text("children", "Lorem ipsum dolor sit amet")}
      </Popover>
    </div>
  );
};
