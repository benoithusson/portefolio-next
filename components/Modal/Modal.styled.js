import styled from "styled-components";
import { keyframes } from "styled-components"


// How to cover the entire screen with the modal ?
// 100vh is not enough
// 200vh ? is it a good practise to add an other figure than 100vh ?
// How to add transition and animation with styled component ?
export const ModalNavMobile = styled.div`
@media (max-width: 768px) {
  display: block;
  opacity: 1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
  background-color: orange;
  transform: ${(props) => props.stateNavMobile ? 'translateX(0)': 'translateX(100%)'};
  transition: transform 200ms ease-in-out;
}
`;