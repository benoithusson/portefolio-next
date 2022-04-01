import React from "react";
import Image from "next/image";
import { ModalNavMobile } from "./Modal.styled";
import { ButtonMobile } from "../../styles/generic-styled-components";
import svgCloseMenuIcon from "../../assets/images/icon-close.svg";

export default function Modal(props) {
  return (
    <ModalNavMobile stateNavMobile={props.stateNavMobile}>
      <ButtonMobile
        onClick={() => props.changeStateNavMobile(!props.stateNavMobile)}
      >
        <Image
          src={svgCloseMenuIcon}
          width={40}
          height={40}
          layout="fixed"
          alt="Icon to close navigation on mobile"
        />
      </ButtonMobile>
    </ModalNavMobile>
  );
}
