import React from 'react';
import JokeItem from './JokeItem';

// I AM USING DESTRUCTURING TO ACCESS DATA VARIABLE FROM PROPS
export default function JokeList( { data }) {
  return (
    <div className='joke-container'>
        {
            data.map((joke) => {
                return  <JokeItem joke={joke} />
            })
        }
    </div>
  )
}
