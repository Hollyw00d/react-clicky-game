import React, { useState, useEffect } from 'react';
import Card from '../card';
import data from '../data/cards';

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const Game = () => {
  const [cards, setCards] = useState([]); 
  // [ [], (arg0) => {} ]
  //const state = useState([]) // [ [], (arg0) => {} ]
  //const cards = state[0]
  //const setCards = state[1]

  useEffect(() => {
    reset()
  }, []);

  const reset = () => {
    setCards(data.map((card, index) => ({
      ...card,
      id: index+1,
      clicked: false
    })));
  }

  const clickCard = (id) => {
    if(cards.filter(card => card.clicked).map(card => card.id).includes(id)) {
      alert("Game Over!");
      reset();
      return;
    }

    setCards(prevState => shuffle(prevState.map(card => ({
      ...card,
      clicked: card.id === id ? true : card.clicked
    }))));
  };

  return (
    <div>
      <h1>Clicky Game using ReactJS</h1>
      <h2>points: {cards.reduce((acc, card) => {
        return acc + (card.clicked ? 1 : 0)
      }, 0)}</h2>
      {
        cards.map(card => <Card src={card.image} key={card.alt} alt={card.alt} onClick={() => clickCard(card.id)} />)
      }
    </div>
  );
};

export default Game;