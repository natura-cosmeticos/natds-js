import styled from "styled-components";

export const DrawerFooterComponent = styled.div`
  border-top: ${({ theme }) => `${theme.palette.divider} 1px solid`};
  flex: 0 0 auto;
  padding: ${({ theme }) => `0 ${theme.sizes.tiny}px ${theme.sizes.small}px`};
`;

export default DrawerFooterComponent;
