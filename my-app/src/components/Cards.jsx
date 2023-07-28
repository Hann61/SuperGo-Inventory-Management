import Show from "./Show";
import React from "react";
import '../pages/pages.css';

function Cards({ images, setCards, numCardsAdded, callGetAllCardsAPI }) {
    return images.map((image, i) => {
        return (
        <Show key={i}
              images={images}
              setCards={setCards}
              numCardsAdded={numCardsAdded}
              callGetAllCardsAPI={callGetAllCardsAPI}{...image} /> ) });
}

export default Cards;