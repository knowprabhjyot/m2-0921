

// REDUCER LOGIC for Changing/Manipulating the number

const INITIAL_STATE = 0;

const changeTheNumber  = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "INCREMENT":
            // How to do
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}

export default changeTheNumber;



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