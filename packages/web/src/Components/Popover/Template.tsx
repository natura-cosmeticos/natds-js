import { Story } from "@storybook/react";
import * as React from "react";
import { IPopoverProps } from "./Popover.props";
import { Spacing } from "../Spacing";
import { VeryHugeMargin } from "../Spacing/Spacing.margin.stories";
import { Button } from "../Button";
import { ContainedVariant } from "../Button/Button.stories";
import { Popover } from "./Popover";

export const Template : Story<IPopoverProps> = (args: IPopoverProps) => {

  const [anchor, setAnchor] = React.useState<IPopoverProps["anchorEl"]>();
  const [open, setOpen] = React.useState<IPopoverProps["open"]>(args.open);

  const handleButtonClick = () => {
    setOpen((previousValue) => !previousValue);
  };

  return (
    <Spacing display={"flex"} {...VeryHugeMargin.args}>
      <Button
        {...ContainedVariant.args}
        aria-describedby={args.id}
        onClick={handleButtonClick}
        ref={setAnchor}
      >
        Toggle Popover
      </Button>
      <Popover
        {...args}
        anchorEl={anchor}
        id={args.id}
        open={open}
      >
        {args.children}
      </Popover>
    </Spacing>
  );
};

export default Template;
