import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/Modal";

export default function Container(props) {
  const [stateNavMobile, setStateNavMobile] = useState(false);
  return (
    <>
    {/* How to cover the entire screen with the modal ? */}
      {stateNavMobile && (
        <Modal
          changeStateNavMobile={setStateNavMobile}
          stateNavMobile={stateNavMobile}
        ></Modal>
      )}
      <div style={{ position: "relative" }}>
        <Navbar
          changeStateNavMobile={setStateNavMobile}
          stateNavMobile={stateNavMobile}
        />
        {props.children}
        <Footer />
      </div>
    </>
  );
}
