import styled from "styled-components";

// TODO : Convert PX to REM

export const FooterContainer = styled.footer`
  position: absolute;
  botton: 0;
  padding: ${(props) => props.padding || "100px 150px 100px 150px"};
  width: 100%;
  height: 2.5rem;
`;
