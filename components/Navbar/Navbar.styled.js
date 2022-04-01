import styled from "styled-components";

// TODO : Convert PX to REM

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 80px;
  background-color: ${(props) => props.bgColor || "white"};
  padding: 0 150px 0 150px;
  @media (max-width: 768px) {
    padding: 0 40px 0 40px;
  }
`;

export const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 40%;
  height: 100%;
  background-color: red;
  span {
    display: none;
  }
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const NavItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: auto;
  height: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuMobileIcon = styled.div`
  display: none;
  background-color: greenyellow;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
  }
`;

export const Contacts = styled.span`
  width: 100%;
  background-color: green;
  display: none;
  transform: scaleX(0);
  transition: all 0.4s ease;
  :hover {
    transform: scaleX(50%);
    display: block;
  }
`;
