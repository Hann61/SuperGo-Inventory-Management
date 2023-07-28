import { useState } from "react";
import React from "react";
import '../pages/pages.css';
import api from '../api';
import moment from 'moment';

function Form({ callGetAllCardsAPI }) {

    const [imageName, setImageName] = useState("");
    const [imageDescription, setImageDescription] = useState("");
    const [imagePrice, setImagePrice] = useState("");
    const [imageURL, setImageURL] = useState("");

    async function callCreateCardAPI(name, description, url, price) {
        const time = moment(new Date()).format('MMMM Do YYYY, h:mm:ss a');
        const newCard = {
            name,
            description,
            price,
            url,
            time
        }
        await api.insertCard(newCard).then(res => {
            window.alert(`Card inserted successfully`);
            callGetAllCardsAPI();
        })
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