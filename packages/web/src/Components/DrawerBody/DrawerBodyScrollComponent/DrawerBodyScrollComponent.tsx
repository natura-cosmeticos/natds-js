import styled from "styled-components";
import { IThemeWeb } from "../../../Themes";

export const DrawerBodyScrollComponent = styled.div<{ theme: IThemeWeb }>`
  flex: 1 1 auto;
  overflow-y: auto;
  padding: ${({ theme }) => `0 ${theme.sizes.tiny}px`};
  position: relative;
`;

export default DrawerBodyScrollComponent;
