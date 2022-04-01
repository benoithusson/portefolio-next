// import Lottie from "react-lottie";
// import burgerMenu from "../../assets/lotties/burger-menu.json";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

import svgMenuIcon from "../../assets/images/icon-menu.svg";
import navBarContent from "../../data/components/nav-content.json";
import {
  ButtonMobile,
  StyledLink,
} from "../../styles/generic-styled-components";
import {
  Nav,
  BrandLogoContainer,
  NavItemsContainer,
  MenuMobileIcon,
} from "./Navbar.styled";

export default function Navbar(props) {
  return (
    <Nav>
      <BrandLogoContainer>Benoît</BrandLogoContainer>
      <NavItemsContainer>
        {navBarContent.content.map((element) => (
          <Link href={element.href} key={uuidv4()} passHref>
            <StyledLink>{element.title}</StyledLink>
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

// Why passHref ? --> https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag
