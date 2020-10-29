import styled from "styled-components";
import { IThemeWeb } from "../../../Themes";

export const StyledBadge = styled.div<{ theme: IThemeWeb }>`
  margin-left: ${({ theme }) => `${theme.sizes?.micro}px`};
`;

export default StyledBadge;
