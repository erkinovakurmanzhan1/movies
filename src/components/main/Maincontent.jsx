import React from "react";
import { useState } from "react";
import Modal from "../UI/modal/Modal";
import styled from "styled-components";
import Btn from "../UI/button/Btn";

export const Maincontent = ({
  img,
  name,
  rating,
  movie,
  movies,
  deleteMovies,
}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModalHandler = () => {
    setModalVisible((prevState) => !prevState);
  };



  const confirmHandler = () => {
    setModalVisible(false);
    const filteredMovie = movies.filter((item) => movie.id !== item.id);
    deleteMovies(filteredMovie)

  };

  return (
    <>
      {isModalVisible ? (
        <Modal onClose={toggleModalHandler} onConfirm={confirmHandler}>
          <h3>Are you sure wanna delete?</h3>
          <Btn color="blue" onClick={toggleModalHandler}>
            no
          </Btn>
          <Btn color="blue" onClick={confirmHandler} >
            yes
          </Btn>
        </Modal>
      ) : null}
      <CardDivStyled>
        <div>
          <ImgStyle src={img} alt="img" />
        </div>
        <BtnVsRating1>
          <Title>{name}</Title>
          <BtnVsRating>
            <Rating>{rating}/5</Rating>
            <Btn color="red" onClick={toggleModalHandler}>
              DELETE
            </Btn>
          </BtnVsRating>
        </BtnVsRating1>
      </CardDivStyled>
    </>
  );
};

export default Maincontent;



const CardDivStyled = styled.div`
  display: flex;
  margin: 0 auto;
  width: 35rem;
  height: 9rem;
  background-color: #ffff;
  margin-top: 3rem;
  border-radius: 1rem;
  box-shadow: 3px 3px 3px grey;
`;

const ImgStyle = styled.img`
  width: 140px;
  height: 145px;
  border-radius: 1rem;
`;

const BtnVsRating = styled.div`
  margin-top: 5px;
  align-items: center;
  display: flex;
`;

const BtnVsRating1 = styled.div`
  display: flex;
  flex-direction: column;
`;
const Rating = styled.h2`
  width: 8rem;
  height: 2rem;
  background-color: orange;
  border-radius: 1.5rem;
  color: #ffff;
  padding-top: 12px;
  text-align: center;
  margin-left: 1.5rem;
`;
const Title = styled.h2`
  margin-left: 2rem;
`;
