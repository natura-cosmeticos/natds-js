import styled from "styled-components";
import { IThemeWeb } from "../../../Themes";

// @todo rewrite to remove dependency from StyledComponents
export const DrawerHeaderComponent = styled.div<{ theme: IThemeWeb }>`
  border-bottom: ${({ theme }) => `${theme.palette.divider} 1px solid`};
  flex: 0 0 auto;
  padding: ${({ theme }) => `${theme.sizes.semi}px ${theme.sizes.small}px ${theme.sizes.small}px`};
`;

export default DrawerHeaderComponent;
