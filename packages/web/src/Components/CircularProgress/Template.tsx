import { Story } from "@storybook/react";
// eslint-disable-next-line no-use-before-define
import * as React from "react";
import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import isChromatic from "chromatic/isChromatic";
import { ICircularProgressProps } from "./CircularProgress.props";
import { CircularProgress } from "./CircularProgress";
import { IThemeWeb } from "../../Themes";

const minValue : ICircularProgressProps["value"] = 0;
const maxValue : ICircularProgressProps["value"] = 100;

const useDynamicProgressValue = (initialState: ICircularProgressProps["value"] = minValue) => {

  const [value, setValue] = React.useState<ICircularProgressProps["value"]>(initialState);

  React.useEffect(() => {
    const tick = () => {
      const increment : ICircularProgressProps["value"] = 1;

      setValue((oldValue: ICircularProgressProps["value"]) => (oldValue + increment) % maxValue);
    };
    const timeout = 20;
    const timer = setInterval(tick, timeout);

    return () => {
      clearInterval(timer);
    };
  });

  return [value];

};

export const Template : Story<ICircularProgressProps> = (args: ICircularProgressProps) => (
  <CircularProgress {...args} />
);

export const DynamicTemplate : Story<ICircularProgressProps> = (args: ICircularProgressProps) => {

  const [value] = useDynamicProgressValue(args.value);

  return (
    <CircularProgress {...args} value={isChromatic() ? args.value : value} />
  );

};

const useProgressValueForStatic = (initialState: ICircularProgressProps["value"] = minValue) => {

  const [value, setValue] = React.useState<ICircularProgressProps["value"]>(initialState);

  React.useEffect(() => {
    const tick = () => {
      setValue((oldValue: ICircularProgressProps["value"]) => {
        if (oldValue >= maxValue) {
          return minValue;
        }
        const increment : ICircularProgressProps["value"] = 10;

        return oldValue + increment;
      });
    };
    const timeout = 1000;
    const timer = setInterval(tick, timeout);

    return () => {
      clearInterval(timer);
    };
  });

  return [value];

};

export const TemplateForStatic : Story<ICircularProgressProps> = (args: ICircularProgressProps) => {

  const style = (theme: IThemeWeb) => createStyles({
    root: {
      display: "flex",
      "& > * + *": {
        marginLeft: theme.sizes.small,
      },
    },
  });

  const useStyles = makeStyles(style, { name: "CircularProgressDemo" });

  const { root } = useStyles();

  const [dynamicValue] = useProgressValueForStatic(args.value);

  return (
    <div className={root}>
      <CircularProgress {...args} value={5}/>
      <CircularProgress {...args} value={25}/>
      <CircularProgress {...args} value={50}/>
      <CircularProgress {...args} value={75}/>
      <CircularProgress {...args} value={100}/>
      <CircularProgress {...args} value={isChromatic() ? args.value : dynamicValue}/>
    </div>
  );
};
