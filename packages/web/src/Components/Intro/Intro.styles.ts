import createStyles from "../../styles/createStyles";
import { IThemeWeb } from "../../Themes";
import { titleVariants } from "./__fixtures__/titleVariants";
import { IIntroProps } from "./Intro.props";
import { makeStyles } from "../../styles/makeStyles";

const style = ({ palette, sizes }: IThemeWeb) => createStyles({
  root: {
    position: "relative",
  },
  introDetail: {
    display: "block",
    paddingLeft: sizes?.standard,
  },
  introTitle: {
    alignItems: "center",
    display: "flex",

    /**
     * @todo understand why we are using !important here
     */
    marginBottom: `${sizes?.micro}px !important`,
    paddingLeft: sizes?.standard,
    position: "relative",
    "&::before": {
      borderLeft: ({ titleVariant }: IIntroProps) => {

        let width = sizes?.tiny;

        if (typeof titleVariant === "undefined" || !titleVariants.includes(titleVariant)) {
          width = sizes?.micro;
        }

        return `${palette?.primary?.main} ${width}px solid`;
      },
      borderRadius: `${sizes?.none} ${sizes?.micro}px ${sizes?.micro}px ${sizes?.none}`,
      bottom: 0,
      content: "\"\"",
      left: 0,
      position: "absolute",
      top: 0,
    },
    "& > .natds-icons": {
      marginRight: sizes?.tiny,
    },
  },
});

export const useStyles = makeStyles(style, { name: "NatDSIntro" });

export default useStyles;
