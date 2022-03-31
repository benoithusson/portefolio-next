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
  transition: all 0.4s ease;
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0 20px 0 20px;
  text-decoration: none;
  position: relative;
  background-color: none;
  transition: background-color 0.3s ease;
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
// Quand je fais hover sur BrandLogoContainer, je veux activer style hover dans Contacts
// Mais avec stled components, comment cibler un autre composant dans un comppsant?
// Puis je utiliser du SCSS ?
// Déclencher apparaition composant en cliquant sur un autre composant
