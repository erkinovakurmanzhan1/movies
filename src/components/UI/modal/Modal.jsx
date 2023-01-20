import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

export const Backdrop = ({onClick}) => {
  return <>
  {createPortal(<BackDropStyle onClick={onClick}/>,document.getElementById('backdrop'))}
  </>;
};

const Modal = ({ onClose, children }) => {
  return (
    <>
      {createPortal(
        <>
          <BackDropStyle onClick={onClose}/>
          <Card>{children}</Card>
        </>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Modal;

const Card = styled.div`
  background-color: white;
  padding: 30px;
  width: 400px;
  box-sizing: border-box;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

const BackDropStyle = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
`;
