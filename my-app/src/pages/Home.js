import { useState, useEffect } from "react";
import Form from "../components/Form";
import Cards from "../components/Cards";
import apis from "../api";

function Home() {
    const [cards, setCards] = useState([]);

    async function callGetAllCardsAPI() {
        try {
            const response = await apis.getAllCards();
            if (response && response.data && response.data.data) {
                setCards(response.data.data);
            } else {
                setCards([]);
            }
        } catch (error) {
            console.error("Error fetching cards:", error);
            setCards([]);
        }
    }

    async function callDeleteAllCardsAPI() {
        await apis.deleteAllCards().then(res => {
            window.alert(`Cards deleted successfully`);
            setCards([]);
        })
    }

    useEffect(() => {
        callGetAllCardsAPI()
    }, []);

    return (
        <div className="container">
            <div className="intro">
                <div id="left-content">
                    <p id="Title">SuperGo Inventory Management</p>
                </div>
                <p>Manage the Inventory Here!</p>
                <hr></hr>
                <h2 className="heading">Add Items Here</h2>
                <div id="AddCard">
                    <Form callGetAllCardsAPI={callGetAllCardsAPI} ></Form>
                </div>
                <hr></hr>
                <div className="flex-container">
                    <div id="ItemHeader">
                        <h2 className="heading">ItemList</h2>
                    </div>
                    <div id="DeleteAllCardsButton">
                        <button id="DeleteAllButton" className="button" onClick={() => callDeleteAllCardsAPI()}>Delete All Items</button>
                    </div>
                </div>
                <div id="picture-container" className="highlights-grid">
                    <Cards images={cards} setCards={setCards} callGetAllCardsAPI={callGetAllCardsAPI} />
                </div>
            </div>
        </div >
    );
}

export default Home;