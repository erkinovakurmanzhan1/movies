import React from "react";
import Maincontent from "./main/Maincontent";

const MovieList = ({ modalInfo, deleteMovie }) => {
  return (
    <>
      {modalInfo.map((el) => {
        return (
          <Maincontent
            movies={modalInfo}
            movie={el}
            key={el.id}
            name={el.name}
            img={el.img}
            rating={el.rating}
            deleteMovies={deleteMovie}
          />
        );
      })}
    </>
  );
};

export default MovieList;
