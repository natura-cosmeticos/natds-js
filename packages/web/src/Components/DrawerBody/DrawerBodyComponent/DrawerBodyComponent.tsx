import styled from "styled-components";
import { IDrawerBodyProps } from "../DrawerBody.props";
import { IDrawerBodyComponentProps } from "./DrawerBodyComponent.props";

const getDrawerBodyComponentBoxShadow = ({ scrolled }: IDrawerBodyComponentProps) => {

  /**
   * @todo refactor(web): replace string by shadow token
   */
  const SCROLLED_BOX_SHADOW = "rgba(0, 0, 0, .14) inset 0 9px 5px -5px";

  /**
   * @todo refactor(web): replace string by shadow token
   */
  const NOT_SCROLLED_BOX_SHADOW = "none";

  if (scrolled) {
    return SCROLLED_BOX_SHADOW;
  }

  return NOT_SCROLLED_BOX_SHADOW;

};

export const DrawerBodyComponent = styled.div<IDrawerBodyProps>`
  flex: 1 1 auto;
  display: flex;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    box-shadow: ${({ scrolled }: IDrawerBodyComponentProps) => getDrawerBodyComponentBoxShadow({ scrolled })};
    height: 10px;
    pointer-events: none;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    transition: box-shadow ease-in-out .1s;
    z-index: 2;
  }
`;

export default DrawerBodyComponent;
