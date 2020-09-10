import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
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

export const styles: ({ sizes }: IThemeWeb) => ToolbarStyles = ({ sizes }) => ({
  prominent: {
    alignItems: "flex-start",
    minHeight: sizes ? `${sizes.hugeX}px` : null,
    paddingBottom: sizes ? `${sizes.small}px` : null,
    paddingTop: sizes ? `${sizes.tiny}px` : null,
  },
} as ToolbarStyles);

export const useStyles = makeStyles(createStyles(styles), { name: "NatDSToolbar" });
