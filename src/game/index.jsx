import React, { useState, useEffect } from 'react'
import Card from '../card'

import data from '../data/cards'

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export default function Game() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    reset()
  }, [])

  function reset() {
    setCards(data.map((card, index) => ({
      ...card,
      id: index+1,
      clicked: false
    })))
  }

  function clickCard(id) {
    if(cards.filter(card => card.clicked).map(card => card.id).includes(id)) {
      alert("game over")
      reset()
      return
    }

    setCards(prevState => shuffle(prevState.map(card => ({
      ...card,
      clicked: card.id === id ? true : card.clicked
    }))))
  }

  return <div>
    <div>points: {cards.reduce((acc, card) => {
      return acc + (card.clicked ? 1 : 0)
    }, 0)}</div>
    {
      cards.map(card => <Card src={card.image} onClick={() => clickCard(card.id)} />)
    }
  </div>
}