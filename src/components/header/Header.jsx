import React from "react";
import { useState } from "react";
import Btn from "../UI/button/Btn";
import Input from "../UI/input/Input";
import Modal from "../UI/modal/Modal";
import styled from "styled-components";
import { createRef } from "react";

export const Header = ({ pushObj }) => {
  const [seeModal, setSeeModal] = useState(false);

  const nameMovieRef = createRef();
  const imgUrlMovieRef = createRef();
  const ratingMovieRef = createRef();

  const closeCancel = () => {
    setSeeModal((prev) => !prev);
  };

  const addInfoHandler = (e) => {
    e.preventDefault();

    const name = nameMovieRef.current.value;
    const img = imgUrlMovieRef.current.value;
    const rating = ratingMovieRef.current.value;
        
    if (name && img && rating) {
      const addInfoModalObj = {
        name,
        img,
        rating,
        id: Math.random().toString(),
      };

      pushObj(addInfoModalObj);
      closeCancel();
      nameMovieRef.current.value = "";
      imgUrlMovieRef.current.value = "";
      ratingMovieRef.current.value = "";
    }
  };

  return (
    <HeaderStyled>
      <Box>
        <HeaderTextStyled>Favorite Movies</HeaderTextStyled>

        <Btn color="orange" onClick={closeCancel}>
          ADD MOVIE
        </Btn>
        {seeModal ? (
          <Modal pushObj={pushObj} onClose={closeCancel}>
            <Input
              labelName="Movie Title"
              id="name"
              inputType="text"
              ref={nameMovieRef}
            />
            <Input
              labelName="img URL"
              id="img"
              inputType="text"
              ref={imgUrlMovieRef}
            />
            <Input
              labelName="Your Rating"
              id="rating"
              inputType="number"
              ref={ratingMovieRef}
            />
            <Btn color="blue" onClick={closeCancel}>
              Cancel
            </Btn>
            <Btn color="blue" onClick={addInfoHandler}>
              ADD
            </Btn>
          </Modal>
        ) : null}
      </Box>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
  width: 100%;
  height: 5rem;
  background-color: rgb(35, 35, 186);
`;

const Box = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const HeaderTextStyled = styled.h2`
  color: #fff;
  font-size: 1.7rem;
  margin-left: 2rem;
`;
