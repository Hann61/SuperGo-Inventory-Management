import { useState } from "react";
import Form from "../components/Form";
import Cards from "../components/Cards";
import potato from "../images/potatoes.jpeg";
import tomato from "../images/tomato.jpeg";
import bread from "../images/bread.jpeg";
import rice from "../images/rice.jpeg";

function Home() {
    const preloadedCards = [{ name: "Potato", url: potato, description: "Fresh Potato", price:"$2.99/lb",id: 0 },
        { name: "Tomato", url: tomato, description: "Fresh Tomato", price:"$3.99/lb",id: 1 },
        { name: "Bread", url: bread, description: "Sliced Bread", price:"$3.99/bag",id: 2 },
        { name: "Rice", url: rice, description: "Rice from China", price:"$15.99/bag",id: 3 }]

    const [cards, setCards] = useState(preloadedCards);
    const [deleteAllState, setDeleteAllState] = useState(false);
    const [numCardsAdded, setNumCardsAdded] = useState(0);

    function deleteAllCards() {
        setCards([]);
        setDeleteAllState(true);
    }

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
                    <Form cards={cards} setCards={setCards} deleteAllState={deleteAllState} setDeleteAllState={setDeleteAllState} setNumCardsAdded={setNumCardsAdded} numCardsAdded={numCardsAdded}></Form>
                </div>
                <hr></hr>
                <div className="flex-container">
                    <div id="ItemHeader">
                        <h2 className="heading">ItemList</h2>
                    </div>
                    <div id="DeleteAllCardsButton">
                        <button id="DeleteAllButton" className="button" onClick={deleteAllCards}>Delete All Items</button>
                    </div>
                </div>
                <div id="picture-container" className="highlights-grid">
                    <Cards images={cards} setCards={setCards} numCardsAdded={numCardsAdded} />
                </div>
            </div>
        </div >
    );
}

export default Home;