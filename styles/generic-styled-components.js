import styled from "styled-components";

export const ButtonMobile = styled.button`
  width: 100%;
  padding: 20px 40px 20px 0;
  height: auto;
  border: none;
  background-color: transparent;
  text-align: right;
  img {
    width: 40px;
    height: 40px;
  }
`;

export const Button = styled.button`
  width: 180px;
  height: 50px;
  background-color: ${(props) => props.bgColor || 'rgba(0, 0, 128)' };
  color: ${(props) => props.color || 'white' };
  border-radius: 5px;
  border: none;
  margin-top: 40px;
  transition: all 0.3s ease;
  :hover {
    cursor: pointer;
    background-color: rgba(0, 0, 128, 0.4);
    color: rgba(0, 0, 128);
  }
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
    margin-top: 20px;
    color: white;
    background-color: rgba(255,255,255, 0.1);
    line-height: 50px;
    &::before {
      display: none;
    }
  }
`;
