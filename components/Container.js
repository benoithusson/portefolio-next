import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/Modal";

export default function Container(props) {
  return (
    <>
      <Modal />
      <div style={{ position: "relative" }}>
        <Navbar />
        {props.children}
        <Footer />
      </div>
    </>
  );
}
