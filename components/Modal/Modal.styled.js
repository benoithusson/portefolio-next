import styled from "styled-components";

export const ModalNavMobile = styled.div`
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 5;
    opacity: 1;
    background-color: orange;
    transform: ${(props) =>
      props.stateNavMobile ? "translateX(0)" : "translateX(100%)"};
    transition: transform 200ms ease-in-out;
  }
`;
