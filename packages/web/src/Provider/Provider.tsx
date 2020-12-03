import { MuiThemeProvider, StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import createMuiTheme, { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import * as React from "react";

import { themes } from "../Themes";
import { IProviderProps } from "./Provider.props";

export { IProviderProps } from "./Provider.props";

export const Provider: React.FunctionComponent<IProviderProps> = (props: IProviderProps) => {

  /**
   * @todo fix(web): TS2322 - Type is not assignable to type 'ThemeOptions'. Types of some properties are incompatible.
   */

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const theme: ThemeOptions = props.theme ? { ...props.theme } : { ...themes.natura.light };
  const newTheme = createMuiTheme(theme);

  const generateClassName = createGenerateClassName({
    productionPrefix: props.cssPrefix || "natds",
  });

  return (
    <StylesProvider generateClassName={generateClassName}>
      <MuiThemeProvider {...props} theme={newTheme}>
        {props.children}
      </MuiThemeProvider>
    </StylesProvider>
  );
};
