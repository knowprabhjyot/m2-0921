import { memo, useEffect } from 'react';

const Child = (props) => {


    // By Default Children components are re-rendered even though props/state are not changed
    console.log("I am being rendered!");


    const updateNumber = () => {
        const random = Math.random();
        props.changeNumber(random);
    }

    return (
        <div>
           <button onClick={updateNumber}>Change Number {props.number}</button>
        </div>
    )
}

// Memo - It is a higher order function (it is a component only which takes in another component as a parameter and returns 
// modilefied version of that component)


// usefEffect where we part dependenceis
export default memo(Child);
