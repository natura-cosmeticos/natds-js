/* eslint-disable indent */
import React, { FunctionComponent, forwardRef } from "react";
import { withTheme } from "@material-ui/styles";
import styled from "styled-components";
import { Typography, TypographyColor, TypographyVariant } from "./Typography";
import { IThemeWeb } from "Themes";

export interface IIntroProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  theme: IThemeWeb | unknown;

  /**
   * Node or text to apply to the Title
   */
  title: React.ReactNode;

  /**
   * Node or text to apply to the Detail
   */
  detail?: React.ReactNode;

  /**
   * Variant of the Title
   */
  titleVariant?: TypographyVariant;

  /**
   * Variant of the Detail
   */
  detailVariant?: TypographyVariant;

  /**
   * Color of the Title
   */
  titleColor?: TypographyColor;

  /**
   * Variant of the Detail
   */
  detailColor?: TypographyColor;

  /**
   * The component used for the title node. Either a string to use a DOM element or a component.
   */
  titleComponent?: React.ElementType<React.HTMLAttributes<HTMLElement>>;

  /**
   * The component used for the title node. Either a string to use a DOM element or a component.
   */
  detailComponent?: React.ElementType<React.HTMLAttributes<HTMLElement>>;
}

export const Intro: FunctionComponent<IIntroProps> = forwardRef((
  props: IIntroProps,
  ref: any
) => {
  const {
    theme,
    title,
    titleComponent,
    titleVariant = "subtitle1",
    titleColor = "textPrimary",
    detail,
    detailComponent,
    detailVariant = "body2",
    detailColor = "textPrimary",
    ...rest
  } = props;

  return (
    <IntroContainer ref={ref} {...rest}>
      <IntroTitle
        as={Typography}
        theme={theme}
        component={titleComponent}
        variant={titleVariant}
        color={titleColor}
      >{title}</IntroTitle>
      {detail && <IntroDetails
        as={Typography}
        theme={theme}
        component={detailComponent}
        variant={detailVariant}
        color={detailColor}
      >{detail}</IntroDetails>}
    </IntroContainer>
  );
});

export default withTheme(Intro);

const titleVariants = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6"
];

const IntroContainer = styled.section`
  position: relative;
`;

const IntroTitle = styled.h3`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: ${({ "theme": { sizes } }) => `${sizes.standard}px`};
  margin-bottom: ${({ "theme": { sizes } }) => `${sizes.micro}px!important`};

  &:before {
    content: "";
    border-left: ${({ "theme": { palette, sizes }, variant }: { theme: any, variant: any }) => {
      const width = titleVariants.includes(variant) ? sizes.tiny : sizes.micro;


      return `${palette.primary.main} ${width}px solid`;
    }};
    border-radius: ${({ "theme": { sizes } }) => `0 ${sizes.micro}px ${sizes.micro}px 0`};
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
  }

  > .natds-icons {
    margin-right: ${({ "theme": { sizes } }) => `${sizes.tiny}px`};
  }
`;

const IntroDetails = styled.p`
  padding-left: ${({ "theme": { sizes } }) => `${sizes.standard}px`};
  display: block;
`;
