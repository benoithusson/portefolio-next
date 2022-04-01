import styled from "styled-components";

export const ButtonMobile = styled.button`
  border: none;
  background-color: transparent;
`;

export const StyledLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 20px 0 20px;
  background-color: none;
  color: black;
  text-decoration: none;
  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 3px;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 128);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  &:hover::before {
    transform: scaleX(1);
  }
  @media (max-width: 768px) {
    &::before {
      display: none;
    }
  }
`;