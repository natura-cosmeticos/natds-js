/* eslint-disable indent,@typescript-eslint/no-explicit-any */
import styled from "styled-components";
import { titleVariants } from "../__fixtures__/titleVariants";

export const IntroTitle = styled.h3`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: ${({ theme: { sizes } }) => `${sizes.standard}px`};
  margin-bottom: ${({ theme: { sizes } }) => `${sizes.micro}px!important`};

  &:before {
    content: "";
    border-left: ${({ theme: { palette, sizes }, variant }: { theme: any, variant: any }) => {
      const width = titleVariants.includes(variant) ? sizes.tiny : sizes.micro;

      return `${palette.primary.main} ${width}px solid`;
    }};
    border-radius: ${({ theme: { sizes } }) => `0 ${sizes.micro}px ${sizes.micro}px 0`};
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
  }

  > .natds-icons {
    margin-right: ${({ theme: { sizes } }) => `${sizes.tiny}px`};
  }
`;

export default IntroTitle;
