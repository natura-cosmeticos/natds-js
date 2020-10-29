import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { IThemeWeb } from "../../Themes";
import { ILinkProps } from "./Link.props";

const style = ({ palette }: IThemeWeb) => createStyles({
  default: ({ color }: ILinkProps) => {
    if (color !== "default") {
      return {};
    }

    return {
      color: palette?.complementary?.link,
    };
  },
});

export const useStyles: (props: ILinkProps) => Record<"default", string> = makeStyles(style, { name: "NatDSLink" });
