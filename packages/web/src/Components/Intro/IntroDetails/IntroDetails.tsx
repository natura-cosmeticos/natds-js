import styled from "styled-components";

export const IntroDetails = styled.p`
  padding-left: ${({ theme: { sizes } }) => `${sizes.standard}px`};
  display: block;
`;

export default IntroDetails;
