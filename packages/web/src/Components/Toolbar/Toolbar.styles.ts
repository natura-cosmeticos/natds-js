import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { StyleRules } from "@material-ui/core";
import { IThemeWeb } from "../../Themes";

type ToolbarProminentStyles = {
  alignItems: string,
  minHeight?: string,
  paddingBottom?: string,
  paddingTop?: string
}

type ToolbarStyles = {
  prominent: ToolbarProminentStyles
}

export const styles : ({ sizes }: IThemeWeb) => StyleRules<"prominent"> = ({ sizes }) => createStyles({
  prominent: {
    alignItems: "flex-start",
    minHeight: sizes ? `${sizes.hugeX}px` : null,
    paddingBottom: sizes ? `${sizes.small}px` : null,
    paddingTop: sizes ? `${sizes.tiny}px` : null,
  } as ToolbarProminentStyles,
} as ToolbarStyles);

export const useStyles = makeStyles(styles, { name: "NatDSToolbar" });
