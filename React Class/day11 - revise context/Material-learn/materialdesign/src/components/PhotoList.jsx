import React from 'react'
import { useContext } from 'react'
import PhotoContext from '../context/PhotoContext'
import PhotoCard from './Card';

export default function PhotoList() {

  // We pass the context we created
  const Photos = useContext(PhotoContext);

  return (
    <div className='photo-parent'>
        {
           Photos && Photos.map((data) => {
                return <PhotoCard data={data} />
            })
        }
    </div>
  )
}
