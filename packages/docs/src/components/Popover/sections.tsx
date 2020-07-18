/* eslint-disable no-mixed-operators */
import React from "react";
import { Button, Popover } from "@naturacosmeticos/natds-web";

const PopoverWrapper = ({
  direction = "left",
  showActionLink,
  ...props
}: {
  direction?: any;
  showActionLink?: boolean;
}) => {
  const [
    anchor, setAnchor,
  ] = React.useState();

  /**
   * @todo refactor(docs): remove unexpected mixed operators
   * @todo feat(docs): replace alert() call by SnackBar
   */
  const actionLink = showActionLink && {
    text: "Close Popover",
    // eslint-disable-next-line no-alert
    onClick: () => alert("Action link was clicked."),
  } || undefined;

  // @todo fix(docs): TS2769 - No overload matches this call on Button ref and Popover open properties
  return (
    <div
      style={{
        height: "100px",
        width: "280px",
        display: "flex",
        alignItems: direction.includes("top") ? "flex-end" : "flex-start",
        justifyContent: direction.includes("left") ? "flex-end" : "flex-start",
      }}
    >
      <Button
        aria-describedby={direction}
        // @ts-ignore
        ref={setAnchor}
        variant="contained"
        color="primary"
      >
        Open Popover
      </Button>
      <Popover
        id={direction}
        // @ts-ignore
        open={anchor}
        direction={direction}
        anchorEl={anchor}
        actionLink={actionLink}
        {...props}
      >
        Lorem ipsum dolor
      </Popover>
    </div>
  );
};

/**
 * @todo fix(docs): TS2322 - Property 'maxWidth' does not exist on <PopoverWrapper maxWidth={...} />
 */
export const attributes = [
  {
    title: "Direction",
    component: <PopoverWrapper />,
  },
  {
    title: "Action Link",
    component: <PopoverWrapper showActionLink />,
  },
  {
    title: "Max Width - 75px",
    // @ts-ignore
    component: <PopoverWrapper maxWidth={75} />,
  },
];

export const directions = [
  {
    title: "top",
    component: <PopoverWrapper direction="top" />,
  },
  {
    title: "top-start",
    component: <PopoverWrapper direction="top-start" />,
  },
  {
    title: "top-end",
    component: <PopoverWrapper direction="top-end" />,
  },
  {
    title: "bottom",
    component: <PopoverWrapper direction="bottom" />,
  },
  {
    title: "bottom-start",
    component: <PopoverWrapper direction="bottom-start" />,
  },
  {
    title: "bottom-end",
    component: <PopoverWrapper direction="bottom-end" />,
  },
  {
    title: "right",
    component: <PopoverWrapper direction="right" />,
  },
  {
    title: "right-start",
    component: <PopoverWrapper direction="right-start" />,
  },
  {
    title: "right-end",
    component: <PopoverWrapper direction="right-end" />,
  },
  {
    title: "left",
    component: <PopoverWrapper direction="left" />,
  },
  {
    title: "left-start",
    component: <PopoverWrapper direction="left-start" />,
  },
  {
    title: "left-end",
    component: <PopoverWrapper direction="left-end" />,
  },
];
