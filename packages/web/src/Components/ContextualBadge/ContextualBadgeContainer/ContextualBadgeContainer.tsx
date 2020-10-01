import styled from "styled-components";
import { IContextualBadgeContainerProps } from "./ContextualBadgeContainer.props";

// @todo rewrite ContextualBadgeContainer to remove dependency of `styled-components`
export const ContextualBadgeContainer = styled.span<IContextualBadgeContainerProps>`
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius}px;
  color: ${(props) => props.textColor};
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight}px;
  padding: ${(props) => props.padding};
`;

export default ContextualBadgeContainer;
