// import Lottie from "react-lottie";
// import burgerMenu from "../../assets/lotties/burger-menu.json";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import svgMenuIcon from "../../assets/images/icon-menu.svg";
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
        <Link href="/">
          <StyledLink>Home</StyledLink>
        </Link>
        <Link href="/about">
          <StyledLink>About</StyledLink>
        </Link>
        <Link href="/skills">
          <StyledLink>Skills</StyledLink>
        </Link>
        <Link href="/portefolio">
          <StyledLink>Portefolio</StyledLink>
        </Link>
        <Link href="/contact-me">
          <StyledLink>Contact me</StyledLink>
        </Link>
        <Link href="/">
          <StyledLink>Dark Mode</StyledLink>
        </Link>
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
