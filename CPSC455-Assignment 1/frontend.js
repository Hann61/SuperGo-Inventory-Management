let initArray = [];

let initPictures = [
    '{"name":"Potato","description":"Fresh Potato","price":"$2.99/lb","unit":"300lb","url":"../images/potatoes.jpeg"}',
    '{ "name":"Tomato","description":"Fresh Tomato","price":"$3.99/lb","unit":"100lb","url":"../images/tomato.jpeg"}',
    '{ "name":"Bread", "description":"Sliced Bread", "price":"$3.99/bag", "unit":"50bag","url":"../images/bread.jpeg"}',
    '{"name":"Rice","description":"Rice from China","price":"$15.99/15lb", "unit":"150bag","url":"../images/rice.jpeg"}'];

window.onload = drawInitPictures(initPictures);

function drawInitPictures(JsonArray) {
    JsonArray.map(x => {
        drawInitPicturesHelper(x);
    })
}

//https://stackoverflow.com/questions/54706080/generating-dynamic-html-cards-from-a-javascript-array
function drawInitPicturesHelper(x) {
    let addedPicture = x;
    const container = document.getElementById('picture');
    let parsedPicture = JSON.parse(addedPicture);

    const card = document.createElement('div');
    card.classList = 'card-body';

    const content = `
        <div class="pic">
            <img class="pic-item" src=${parsedPicture.url} alt="Cannot be Shown">
            <div class="pic-description">
                <p><b>${parsedPicture.name}</b></p>
                <p><b>${parsedPicture.description}</b></p>
                <p><b>${parsedPicture.price}</b></p>
                <p><b>${parsedPicture.unit}</b></p>
            </div>
        </div>
    `;

    container.innerHTML += content;
}

function addItem() {
    const itemName = document.getElementById('itemName').value;
    const itemDescription = document.getElementById('itemDescription').value;
    const itemPrice = document.getElementById('itemPrice').value;
    const itemUnit = document.getElementById('itemUnit').value;
    const itemImage = document.getElementById('itemImage').value;
    let jsonImage;
    if (itemName && itemDescription && itemPrice && itemUnit && itemImage) {
        jsonImage = createJSONObject(itemName,itemDescription, itemPrice, itemUnit, itemImage);
        initArray.push(jsonImage);
        createCard(initArray);
    }
}

function clearItem() {
    document.getElementById('itemName').value = "";
    document.getElementById('itemDescription').value = "";
    document.getElementById('itemPrice').value = "";
    document.getElementById('itemUnit').value = "";
    document.getElementById('itemImage').value = "";
}

    function createJSONObject(itemName, itemDescription, itemPrice, itemUnit,itemImage) {
        const imageObject = {
            name: itemName,
            description: itemDescription,
            price: itemPrice,
            unit: itemUnit,
            url: itemImage
        };
        return JSON.stringify(imageObject);
    }

    function createCard(x) {
        let addedPicture;
        const container = document.getElementById('picture');
        addedPicture = x.slice(-1).pop();
        let parsedJSONPicture = JSON.parse(addedPicture);

        const card = document.createElement('div');
        card.classList = 'card-body';

        const content = `
        <div class="pic">
            <img class="pic-item" src=${parsedJSONPicture.url} alt="Cannot be Shown">
            <div class="pic-description">
                <p><b>${parsedJSONPicture.name}</b></p>
                <p><b>${parsedJSONPicture.description}</b></p>
                <p><b>${parsedJSONPicture.price}</b></p>
                <p><b>${parsedJSONPicture.unit}</b></p>
            </div>
        </div>
    `;

        container.innerHTML += content;
    }

// https://stackoverflow.com/questions/6795585/remove-multiple-elements-with-same-name-using-removechild
    function deleteAll() {
        initArray = [];
        removeChildren({parentId: 'picture', childName: 'pic'});
    }


    function removeChildren(params) {
        let parentId = params.parentId;
        let childName = params.childName;

        let childNodesToRemove = document.getElementById(parentId).getElementsByClassName(childName);
        for (let i = childNodesToRemove.length - 1; i >= 0; i--) {
            let childNode = childNodesToRemove[i];
            childNode.parentNode.removeChild(childNode);
        }
}
