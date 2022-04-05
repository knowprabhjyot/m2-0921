import React from 'react'
import JokeItem from './JokeItem'

export default function RandomJoke({ randomJoke }) {

    return (
        <div className='random-joke-container'>
            <h1>RANDOM JOKE FOR THE DAY!</h1>
            <JokeItem joke={randomJoke} /></div>
    )
}
