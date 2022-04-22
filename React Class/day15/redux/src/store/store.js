// import rootReducer from "../reducer";
// import { createStore } from 'react-redux'; // Deprecated in the new versions of redux toolkit
import { configureStore } from '@reduxjs/toolkit';
// import { counterSlice } from "../reducer/changeTheNumber";
import counterReducer from '../reducer/counterSlice';

const store = configureStore({
   reducer: {
       counter: counterReducer
   }
});

export default store;


// QUICK UPDATE - Earlier Redux and React-redux used to work together
// Redux Toolkit --> Redux with Redux-Toolkit (Merged)