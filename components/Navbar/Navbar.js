import React from "react";
import Link from "next/link";
import Lottie from "react-lottie";
import burgerMenu from "../../assets/lotties/burgerMenu.json";
import {
  Nav,
  BrandLogoContainer,
  NavItemsContainer,
  StyledLink,
  MenuMobileIcon,
} from "../../styles/components/Navbar.styled";

// IDEE SKILLS : Créér API + petit jeu avec random skills
// Ou prendre modéle jeu formation et faire bouger les logos des skills

export default function Navbar() {
  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: burgerMenu,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Nav>
      <BrandLogoContainer>Benoît</BrandLogoContainer>
      <NavItemsContainer>
        <Link href="/home">
          <StyledLink>Home</StyledLink>
        </Link>
        <Link href="/">
          <StyledLink>About</StyledLink>
        </Link>
        <Link href="/">
          <StyledLink>Skills</StyledLink>
        </Link>
        <Link href="/">
          <StyledLink>Portefolio</StyledLink>
        </Link>
        <Link href="/">
          <StyledLink>Contact me</StyledLink>
        </Link>
        <Link href="/">
          <StyledLink>Dark Mode</StyledLink>
        </Link>
      </NavItemsContainer>
      <MenuMobileIcon>
        {/* <Lottie options={defaultOptions} width={50} height={50} /> */}
        Icon
      </MenuMobileIcon>
    </Nav>
  );
}
