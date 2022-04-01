// import Lottie from "react-lottie";
// import burgerMenu from "../../assets/lotties/burger-menu.json";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import svgMenuIcon from "../../assets/images/icon-menu.svg";
import navBar from "../../data/navbar-content.json";
import { ButtonMobile } from "../../styles/generic-styled-components";
import {
  Nav,
  BrandLogoContainer,
  NavItemsContainer,
  StyledLink,
  MenuMobileIcon,
} from "./Navbar.styled";

export default function Navbar(props) {
  return (
    <Nav>
      <BrandLogoContainer>Benoît</BrandLogoContainer>
      <NavItemsContainer>
        {navBar.navbarContent.map((content) => (
          <Link href={content.href} passHref>
            <StyledLink>{content.title}</StyledLink>
          </Link>
        ))}
      </NavItemsContainer>
      <MenuMobileIcon>
        <ButtonMobile
          onClick={() => props.changeStateNavMobile(!props.stateNavMobile)}
        >
          <Image
            src={svgMenuIcon}
            width={40}
            height={40}
            layout="fixed"
            alt="Icon to open menu navigation on mobile"
          />
        </ButtonMobile>
      </MenuMobileIcon>
    </Nav>
  );
}
