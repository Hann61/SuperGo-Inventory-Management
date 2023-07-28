import { useState } from "react";
import moment from "moment";
import api from "../api";

export default function EditFunction({ cardId, callGetAllCardsAPI, setEditVisibility}) {

    const [imageName, setImageName] = useState("");
    const [imageDescription, setImageDescription] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [imagePrice, setImagePrice] = useState("");

    async function callUpdateCardAPI(newName, newDescription, newUrl, newPrice) {
        const time = moment(new Date()).format('MMMM Do YYYY, h:mm:ss a');
        const newCard = {
            name: newName,
            url: newUrl,
            description: newDescription,
            price: newPrice,
            time
        };
        await api.updateCardById(cardId, newCard).then(res => {
            window.alert(`Card updated successfully`);
            callGetAllCardsAPI();
        })
    }

    return (
        <div className="modal-body">
            <div className="modal" id="EditModal">
                <form>
                    <div className="label-spacing">
                        <label>
                            Image Name:
                            <input className="textbox" id="imageName" name="imageName" type="text" value={imageName} onChange={((evt) => setImageName(evt.target.value))} />
                        </label>
                    </div>
                    <div className="label-spacing">
                        <label>
                            Image Description:
                            <input className="textbox" type="text" id="imageDescription" name="imageDescription" value={imageDescription} onChange={((evt) => setImageDescription(evt.target.value))} />
                        </label>
                    </div>
                    <div className="label-spacing">
                        <label className="label-spacing">
                            Image URL:
                            <input className="textbox" type="text" id="imageURL" name="imageURL" value={imageURL} onChange={((evt) => setImageURL(evt.target.value))} />
                        </label>
                    </div>
                    <div className="label-spacing">
                        <label className="label-spacing">
                            Image Price:
                            <input className="textbox" type="text" id="imagePrice" name="imagePrice" value={imagePrice} onChange={((evt) => setImagePrice(evt.target.value))} />
                        </label>
                    </div>
                    <input className="button" type="button" value="Save" onClick={() => callUpdateCardAPI(imageName, imageDescription, imageURL, imagePrice)}/>
                    <input className="button" type="button" value="Close" onClick={(() => setEditVisibility(false))}/>
                </form>
            </div>
        </div>
    );
}