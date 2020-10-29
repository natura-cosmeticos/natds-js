import { AppBarProps } from "@material-ui/core/AppBar";

export type AppBarPosition = "fixed" | "absolute" | "sticky" | "static" | "relative";

export type IAppBarProps = Omit<AppBarProps, "translate">;
