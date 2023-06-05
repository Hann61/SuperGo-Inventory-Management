import { useEffect, useState } from "react";
import React from "react";
import '../pages/pages.css';

function Form({ cards, setCards, deleteAllState, setDeleteAllState, setNumCardsAdded, numCardsAdded }) {

    const [imageName, setImageName] = useState("");
    const [imageDescription, setImageDescription] = useState("");
    const [imagePrice, setImagePrice] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [imageID, setImageID] = useState(cards.length);
    const dateTime = new Date();

    function clearFields() {
        setImageName("");
        setImageDescription("");
        setImagePrice("");
        setImageURL("");
    }

    function createCard(name, description, price, url) {
        setImageID(imageID + 1);
        const id = imageID;
        const time = dateTime.toLocaleTimeString();
        const newCard = {
            name,
            url,
            description,
            price,
            id,
            time
        }

        const newCards = [...cards, newCard];
        setCards(newCards);
        setNumCardsAdded(numCardsAdded + 1);
    }

    useEffect(() => {
        setDeleteAllState(false);
        setImageID(0);
    }, [deleteAllState]);

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
            <input className="button" type="button" value="Add Item" onClick={(() => createCard(imageName, imageDescription, imagePrice, imageURL))} />
            <input className="button" type="button" value="Clear Fields" onClick={clearFields} />
        </form>
    );
}

export default Form;