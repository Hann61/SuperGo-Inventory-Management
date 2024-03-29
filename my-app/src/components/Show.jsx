import { useState } from "react";
import React from "react";
import Function from "./Function";
import '../pages/pages.css';

function Show({_id, url, name, description, price, time, images, callGetAllCardsAPI }) {

    const [visibility, setVisibility] = useState(false);

    return (
        <div className="card-display">
            <div className="card" onClick={(() => setVisibility(true))}>
                <img className="card-image-longer" src={url} alt="item"></img>
                <div className="text-container">
                    <p><b>{name}</b></p>
                    <p>{description}</p>
                    <p>{price}</p>
                    <p>{time}</p>
                </div>
            </div>
            {visibility && <Function setVisibility={setVisibility} name={name}
                                     description={description} price={price} url={url} cardId={_id} images={images}
                                    time={time} callGetAllCardsAPI={callGetAllCardsAPI}/>}
        </div>
    );
}

export default Show;