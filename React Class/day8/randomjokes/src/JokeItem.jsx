import React from 'react'

export default function JokeItem({ joke }) {

  return (
    <div className="joke-item">
        <h1>{joke.text}</h1>
        <cite>- {joke.author}</cite>
    </div>
  )
}
