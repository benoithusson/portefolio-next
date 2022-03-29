import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 80px;
  background-color: greenyellow;
`;

export const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 100%;
  background-color: ${(props) => props.bgColor || "white"};
  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 20px;
  }
`;

export const NavItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: auto;
  height: 100%;
  background-color: ${(props) => props.bgColor || "white"};
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuMobileIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 20px;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.bgColor || "white"};
  }
`;

export const StyledLink = styled.a`
  margin: 0 20px 0 20px;
`;