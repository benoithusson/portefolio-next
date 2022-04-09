import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

import hamburgerIcon from "../../assets/images/hamburger-icon-white.png";
import navBarContent from "../../data/components/nav-content.json";
import { NavMobileContext } from "../../helper/Context";

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

export default function Navbar() {
  const { stateNavMobile, setStateNavMobile } = useContext(NavMobileContext);
  console.log("Navbar", stateNavMobile);

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
        <ButtonMobile onClick={() => setStateNavMobile(!stateNavMobile)}>
          {/*
          Essayer cette solution
          https://github.com/vercel/next.js/discussions/20993

          */}
          <Image
            src={hamburgerIcon}
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
