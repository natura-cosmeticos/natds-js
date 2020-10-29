import * as React from "react";

import { createMuiTheme, ThemeOptions } from "@material-ui/core";
import { mount } from "enzyme";
import { themes } from "../Themes";
import { Provider } from "./Provider";

describe("Provider component", () => {
  it("should have the natura theme", () => {
    const provider = mount(<Provider>Mocked</Provider>);
    const muiTheme = createMuiTheme(themes.natura.light as unknown as ThemeOptions);
    const theme = provider.find("ThemeProvider").prop("theme");

    expect(JSON.stringify(theme)).toStrictEqual(JSON.stringify(muiTheme));
  });

  it("should have the provided theme", () => {
    const mockedTheme = themes.natura.dark;

    mockedTheme.palette = {
      ...mockedTheme.palette,
      primary: {
        main: "#000000",
      },
    };

    const provider = mount(<Provider theme={mockedTheme}>Mocked</Provider>);
    const theme = provider.find("ThemeProvider").prop("theme");

    expect(JSON.stringify(theme)).toStrictEqual(JSON.stringify(createMuiTheme(mockedTheme as unknown as ThemeOptions)));

  });
});
