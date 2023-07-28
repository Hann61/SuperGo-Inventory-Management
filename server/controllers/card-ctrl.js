const Card = require('../models/card-model')

createCard = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a card'
        })
    }

    const card = new Card(body)

    if (!card) {
        return res.status(400).json({ success: false, error: err })
    }

    return card
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: card._id,
                message: 'Card created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Card not created!',
            })
        })
}

updateCard = async (req, res) => {
    try {
        const body = req.body;
        if (!body) {
            return res.status(400).json({
                success: false,
                error: 'You must provide a body to update',
            });
        }

        const card = await Card.findOne({ _id: req.params.id });
        if (!card) {
            return res.status(404).json({
                message: 'Card not found!',
            });
        }

        card.name = body.name;
        card.description = body.description;
        card.price = body.price;
        card.url = body.url;
        card.time = body.time;

        await card.save();

        return res.status(200).json({
            success: true,
            id: card._id,
            message: 'Card updated!',
        });
    } catch (error) {
        return res.status(404).json({
            error,
            message: 'Card not updated!',
        });
    }
};


deleteCard = async (req, res) => {
    try {
        const card = await Card.findOneAndDelete({ _id: req.params.id });
        if (!card) {
            return res.status(404).json({ success: false, error: "Card not found" });
        }
        return res.status(200).json({ success: true, data: card });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};

deleteAllCards = async (req, res) => {
    try {
        const deletedCards = await Card.deleteMany({});
        return res.status(200).json({ success: true, data: deletedCards });
    } catch (err) {
        return res.status(400).json({ success: false, error: err });
    }
}

getCardById = async (req, res) => {
    try {
        const card = await Card.findOne({ _id: req.params.id });
        if (!card) {
            return res.status(404).json({ success: false, error: 'Card not found' });
        }
        return res.status(200).json({ success: true, data: card });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, error: 'Server error' });
    }
};

getCards = async (req, res) => {
    try {
        const cards = await Card.find({});
        if (!cards.length) {
            return res.status(404).json({ success: false, error: 'Card not found' });
        }
        return res.status(200).json({ success: true, data: cards });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, error });
    }
}
module.exports = {
    createCard,
    updateCard,
    deleteCard,
    deleteAllCards,
    getCards,
    getCardById,
}