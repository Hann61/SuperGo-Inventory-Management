import { useState } from "react";
import React from "react";
import '../pages/pages.css';
import EditFunction from "./EditFunction";
import api from "../api";

function Function({ cardId, name, url, description, price, setVisibility, time, callGetAllCardsAPI }) {

    const [editVsibility, setEditVisibility] = useState(false);

    async function callDeleteCardAPI() {
        await api.deleteCardById(cardId).then(res => {
            window.alert(`Card deleted successfully`);
            callGetAllCardsAPI();
        });
    }

    return (
        <div className="function-body">
            <div className="Function" id="modal">
                <h1 id="FunctionHeading">{name}</h1>
                <div className="content">
                    <img className="card-image-modal" src={url} alt={"item"}></img>
                    <div id="ItemDescription">
                        <p> {description} </p>
                        {price}
                        {time && <div>Item added on: {time}</div>}
                    </div>
                </div>
                <br />
                <div className="actions">
                    <button className="toggle-button" onClick={(() => setVisibility(false))}>❌ Close</button>
                    <button id="EditCardButton" className="toggle-button" onClick={() => setEditVisibility(true)}>✏️ Edit</button>
                    <button id="DeleteCardButton" className="toggle-button" onClick={callDeleteCardAPI}>🗑️ Delete</button>
                </div>
                {editVsibility && <EditFunction name={name} url={url} description={description} cardId={cardId} callGetAllCardsAPI={callGetAllCardsAPI} setEditVisibility={setEditVisibility}/>}
            </div>
        </div>
    );
}

export default Function;