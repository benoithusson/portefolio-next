import React from "react";
import Image from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { ModalNavMobile } from "./Modal.styled";
import {
  ButtonMobile,
  StyledLink,
} from "../../styles/generic-styled-components";
import closeIcon from "../../assets/images/close-icon-white.png";
import modaleContent from "../../data/components/nav-content.json";

export default function Modal(props) {
  return (
    <ModalNavMobile stateNavMobile={props.stateNavMobile}>
      <ButtonMobile
        onClick={() => props.changeStateNavMobile(!props.stateNavMobile)}
      >
        <Image
          src={closeIcon}
          width={40}
          height={40}
          layout="fixed"
          alt="Icon to close navigation on mobile"
        />
      </ButtonMobile>
      <ul>
        {modaleContent.content.map((element) => (
          <Link
            href={`/${element.href}`}
            key={uuidv4()}
            passHref
            // How to hide modal when I click on a link ?
            // Resolve bug display modal mobile into dev tools
            onClick={() => props.changeStateNavMobile(!props.stateNavMobile)}
          >
            <StyledLink>{element.title}</StyledLink>
          </Link>
        ))}
      </ul>
    </ModalNavMobile>
  );
}
