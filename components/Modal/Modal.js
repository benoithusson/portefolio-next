import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { ModalNavMobile } from "./Modal.styled";
import { ButtonMobile, StyledLink} from "../../styles/generic-styled-components";
import closeIcon from "../../assets/images/close-icon-white.png";
import modaleContent from "../../data/components/nav-content.json";
import { NavMobileContext } from "../../helper/Context";

export default function Modal() {

  // Step 4) Into the child component...
  // import useContext hook
  // pass the context in order to access the state and setState function
  // Use the state and setState function into our component
  const {stateNavMobile, setStateNavMobile} = useContext(NavMobileContext);

  return (
    <ModalNavMobile>
      <ButtonMobile
        onClick={() => setStateNavMobile(!stateNavMobile)}
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
            // TODO : Resolve bug display modal mobile into dev tools
          >
            <StyledLink
              onClick={() => setStateNavMobile(!stateNavMobile)}
            >
              {element.title}
            </StyledLink>
          </Link>
        ))}
      </ul>
    </ModalNavMobile>
  );
}
