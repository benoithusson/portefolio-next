import styled from "styled-components";

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
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
  }
  background-color: green;
`;

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0 20px 0 20px;
  text-decoration: none;
  color: black;
  border-radius: 0;
  transition: all 0.4s ease;
  &:hover {
    color: white;
    background-color: rgba(0, 0, 128, 0.7);
    border-radius: 50%;
    cursor: pointer;
  }
`;
