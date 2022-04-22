

// REDUCER LOGIC for Changing/Manipulating the number

import { createSlice } from "@reduxjs/toolkit";

// const INITIAL_STATE = 0;

// An object with default value is 0


const initialState = {
    value: 0
}

// const changeTheNumber  = (state = INITIAL_STATE, action) => {
//     switch(action.type) {
//         case "INCREMENT":
//             // How to do
//             return state + 1;
//         case "DECREMENT":
//             return state - 1;
//         default:
//             return state;
//     }
// }

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value += 1
      },
      decrement: (state) => {
        state.value -= 1
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload
      },
    },
  })

  export default counterSlice.reducer

export const { increment, decrement } = counterSlice.actions


// export default changeTheNumber;

// Initially we used to make switch statements inside reducer to see which type of action is fired
// In the latest version of Redux toolkit, we make Slices which are like a wrapper to write reducer and actions



// SWITCHES VS IF ELSE BLOCKS

// if (action.type === "INCREMENT") {
//     // PERFORM INCREMENT
// } else if (action.type === "DECREMENT") {
//     // PERFORM DECREMENT
// } else if (action.type === "DIVIDE") {

// }
//  else {
//     // PERFORM DEFAULT
// }

// // eslint-disable-next-line default-case
// switch(action.type) {
//     case "INCREMENT":
//         // PERFORM INCREMENT
//         break;
//     case "DECREMENT":
//         // PERFORM DECREMENT
//     default: 
//         // PERFORM DEFAULT
// }

// // If your conditions are more than 3 then prefer using switch cases instead of if else block