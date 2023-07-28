var express = require('express');
var router = express.Router();
const {v4: uuid} = require('uuid');

let users = [
    { id: uuid(), name: 'Han'},
    { id: uuid(), name: 'Cathy' },
    { id: uuid(), name: 'Rosie' }
];

router.get('/', function (req, res) {
  return res.send(users);
});

router.get('/:userId', function (req, res) {
  const foundUser = users.find(user => user.id === req.params.userId);

  if (!foundUser) return res.status(404).send({ message: 'User not found' });

  return res.send(foundUser);
});

router.post('/', function (req, res) {
  if (!req.body.name) {
    return res.status(400).send({ message: 'User must have a name!' })
  }
  const user = { id: uuid(), name: req.body.name };
  users.push(user);
  return res.send(user);
});

router.delete('/:userId', function(req,res) {
  const foundUser = users.find(user => user.id === req.params.userId);
  if (foundUser) {
    users = users.filter(function(value){
      return value !== foundUser;
    });
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }

});

const potatoUrl = "https://thumbs.dreamstime.com/z/raw-potatoes-white-background-61790721.jpg";
const tomatoUrl = "https://thumbs.dreamstime.com/z/red-tomato-23480454.jpg";
const breadUrl = "https://thumbs.dreamstime.com/z/bread-6500594.jpg";
const riceUrl = "https://thumbs.dreamstime.com/z/rice-grain-22274736.jpg";
let state = [
  { cardId: 0, name: "Potato", url: potatoUrl, description: "Fresh Potatoes", price:"2.99/lb"},
  { cardId: 1, name: "Tomato", url: tomatoUrl, description: "Fresh Tomatoes", price:"3.99/lb"},
  { cardId: 2, name: "Bread", url:  breadUrl, description: "Sliced Bread", price:"3.99/bag"},
  { cardId: 3, name: "Rice", url: riceUrl, description: "Rice from China", price:"15.99/bag" }
];

let curId = (Object.keys(state)).length;

router.get('/api/cards', (req, res) => {
  res.send(state);
});

router.get('/api/card/:cardId', (req, res) => {
  const id = req.params.cardId;
  const foundCard = state.find(card => card.cardId === id);

  if (!foundCard) {
    res.sendStatus(404);
  } else {
    res.send(foundCard);
  }
});

router.post('/api/card/create', (req, res) => {
  const newCard = {
    ...req.body,
    cardId: curId
  }
  curId++;
  state.push(newCard);
  res.send(newCard);
})

router.put('/api/card/update/:cardId', (req, res) => {
  const id = JSON.parse(req.params.cardId);
  const newCard = {
    ...req.body,
    cardId: id
  }
  for (let i = 0; i < state.length; i++) {
    if (state[i].cardId == id) {
      state[i] = newCard;
      res.sendStatus(200);
    }
  }
  res.sendStatus(404);
});

router.delete('/api/card/delete/:cardId', (req, res) => {
  const id = req.params.cardId;
  const foundCard = state.find(card => card.cardId == id);
  if (foundCard) {
    state = state.filter(function(value, index, arr){
      return value !== foundCard;
    });
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

router.delete('/api/cards/delete', (req, res) => {
  state = [];
  res.sendStatus(200);
});

module.exports = router;
