import { useState } from "react";
import React from "react";
import Function from "./Function";
import '../pages/pages.css';

function Show({ url, name, description, price, id, time, images, setCards, numCardsAdded }) {

    const [visibility, setVisibility] = useState(false);

    return (
        <div className="card-display">
            <div className="card" onClick={(() => setVisibility(true))}>
                <img className="card-image-longer" src={url}></img>
                <div className="text-container">
                    <p><b>{name}</b></p>
                    <p>{description}</p>
                    <p>{price}</p>
                    <p>{time}</p>
                </div>
            </div>
            {visibility && <Function setVisibility={setVisibility} name={name} description={description} price={price} url={url} id={id} images={images} setCards={setCards} time={time} numCardsAdded={numCardsAdded} />}
        </div>
    );
}

export default Show;