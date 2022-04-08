import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContex'

export default function FunctionComponent1() {

    const photos = useContext(UserContext); // This is simpler as compared to class based components

    return (
        <div>
            {
                photos && photos.map((data) => {
                    return <div>{data.title}</div>
                })
            }
        </div>
    )
}
