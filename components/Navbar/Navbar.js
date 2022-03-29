import React from "react";
import Link from "next/link";
import {
  Nav,
  BrandLogoContainer,
  NavItemsContainer,
  StyledLink,
  MenuMobileIcon,
} from "../../styles/components/Navbar.styled";

export default function Navbar() {
  return (
    <Nav>
      <BrandLogoContainer bgColor="orange">Logo</BrandLogoContainer>
      <NavItemsContainer bgColor="salmon">
        <Link href="/">
          <StyledLink>Lien 1</StyledLink>
        </Link>
        <Link href="/">
          <StyledLink>Lien 2</StyledLink>
        </Link>
        <Link href="/">
          <StyledLink>Lien 3</StyledLink>
        </Link>
        <Link href="/">
          <StyledLink>Lien 4</StyledLink>
        </Link>
      </NavItemsContainer>
      <MenuMobileIcon bgColor="greenyellow">Icon Menu</MenuMobileIcon>
    </Nav>
  );
}
