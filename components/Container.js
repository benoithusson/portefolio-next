import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/Modal";

export default function Container(props) {

  return (
    <>
    {/* How to cover the entire screen with the modal ? */}
      {props.stateNavMobile && (
        <Modal
          changeStateNavMobile={props.setStateNavMobile}
          stateNavMobile={props.stateNavMobile}
        ></Modal>
      )}
      <div style={{ position: "relative" }}>
        <Navbar
          changeStateNavMobile={props.setStateNavMobile}
          stateNavMobile={props.stateNavMobile}
        />
        {props.children}
        <Footer />
      </div>
    </>
  );
}
