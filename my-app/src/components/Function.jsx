import { useState } from "react";
import React from "react";
import '../pages/pages.css';

function Function({ id, images, setCards, name, url, description, price, setVisibility, time, numCardsAdded }) {

    const [timesDeleted, setTimesDeleted] = useState(0);

    function deleteCurrentCard() {
        let currID;
        if (timesDeleted === 0) {
            currID = id;
        } else {
            console.log(numCardsAdded)
            currID = id - timesDeleted + numCardsAdded;
        }
        setTimesDeleted(timesDeleted + 1);
        let array = images;
        let removed = array.filter((value, index) => {
            return index !== currID;
        });
        console.log(removed)
        setCards(removed);
    }

    return (
        <div className="function-body">
            <div className="Function" id="modal">
                <h1 id="FunctionHeading">{name}</h1>
                <div className="content">
                    <img className="card-image-modal" src={url} alt={"image"}></img>
                    <div id="ItemDescription">
                        <p> {description} </p>
                        {price}
                        {time && <div>Item added on: {time}</div>}
                    </div>
                </div>
                <br />
                <div className="actions">
                    <button className="toggle-button" onClick={(() => setVisibility(false))}>❌ Close</button>
                    <button id="DeleteCardButton" className="toggle-button" onClick={deleteCurrentCard}>🗑️ Delete</button>
                </div>
            </div>
        </div>
    );
}

export default Function;