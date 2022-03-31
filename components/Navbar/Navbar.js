import React, { createRef, useState } from "react";
import Link from "next/link";
import Lottie from "react-lottie";
import burgerMenu from "../../assets/lotties/burger-menu.json";
import {
  Nav,
  BrandLogoContainer,
  NavItemsContainer,
  StyledLink,
  MenuMobileIcon,
  Contacts,
} from "../../styles/components/Navbar.styled";

export default function Navbar() {

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: burgerMenu,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [animation, setAnimation] = useState(false);

  return (
    <Nav>
      <BrandLogoContainer>
        Benoît
        <span>Mes coordonnées</span>
      </BrandLogoContainer>
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
      <MenuMobileIcon onClick={() => setAnimation(!animation)}>
        <Lottie
          options={defaultOptions}
          width={30}
          height={30}
          isStopped={animation}
          style={{margin: '0'}}
        />
      </MenuMobileIcon>
    </Nav>
  );
}
