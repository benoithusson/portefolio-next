import React from "react";
import Image from "next/image";
import { ModalNavMobile } from "./Modal.styled";
import svgCloseMenu from '../../assets/images/icon-close.svg';

export default function Modal(props) {
  return (
    <ModalNavMobile>
      <button onClick={() => props.changeStateNavMobile(!props.stateNavMobile)}>
        <Image src={svgCloseMenu} width={20} height={20} layout="fixed" alt="Icon to close navigation on mobile" />
      </button>
    </ModalNavMobile>
  );
}

{/* <a target="_blank" href="https://icons8.com/icon/46/close">Close</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}