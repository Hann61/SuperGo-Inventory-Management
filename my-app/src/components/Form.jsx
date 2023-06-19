import { useEffect, useState } from "react";
import React from "react";
import '../pages/pages.css';

function Form({ callGetAllCardsAPI }) {

    const [imageName, setImageName] = useState("");
    const [imageDescription, setImageDescription] = useState("");
    const [imagePrice, setImagePrice] = useState("");
    const [imageURL, setImageURL] = useState("");
    const dateTime = new Date();

    function callCreateCardAPI(name, description, url, price) {
        const time = dateTime.toLocaleTimeString();
        const newCard = {
            name,
            url,
            description,
            price,
            time
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newCard)
        };
        fetch("http://localhost:3005/users/api/card/create", requestOptions)
            .then(_ => callGetAllCardsAPI());
    }

    function clearFields() {
        setImageName("");
        setImageDescription("");
        setImagePrice("");
        setImageURL("");
    }


    return (
        <form>
            <div className="label-spacing">
                <label>
                    Image Name:
                    <input className="textbox" id="imageName" name="imageName" type="text" value={imageName} onChange={((evt) => setImageName(evt.target.value))} />
                </label>
            </div>
            <div className="label-spacing">
                <label className="label-spacing">
                    Image Description:
                    <input className="textbox" type="text" id="imageDescription" name="imageDescription" value={imageDescription} onChange={((evt) => setImageDescription(evt.target.value))} />
                </label>
            </div>
            <div className="label-spacing">
                <label className="label-spacing">
                    Image Price:
                    <input className="textbox" type="text" id="imagePrice" name="imagePrice" value={imagePrice} onChange={((evt) => setImagePrice(evt.target.value))} />
                </label>
            </div>
            <div className="label-spacing">
                <label className="label-spacing">
                    Image URL:
                    <input className="textbox" type="text" id="imageURL" name="imageURL" value={imageURL} onChange={((evt) => setImageURL(evt.target.value))} />
                </label>
            </div>
            <input className="button" type="button" value="Add Item" onClick={(() => callCreateCardAPI(imageName, imageDescription, imagePrice, imageURL))} />
            <input className="button" type="button" value="Clear Fields" onClick={clearFields} />
        </form>
    );
}

export default Form;