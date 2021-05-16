import reportWebVitals from './reportWebVitals';
import {rerenderReactTree} from './render';
import state from './Components/Redax/State';


rerenderReactTree(state)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
