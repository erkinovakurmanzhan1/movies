import React from "react";
import styled from "styled-components";
export const Btn = ({ children, color, onClick }) => {
  return (
    <BtnStyled style={{ background: `${color}` }} onClick={onClick}>
      {children}
    </BtnStyled>
  );
};

export default Btn;

const BtnStyled = styled.button`
  margin: 0 5px;
  width: 7rem;
  height: 2.5rem;
  border-radius: 0.6rem;
  border-style: none;
  color: #fff;
  font-size: 1rem;
  
`;
