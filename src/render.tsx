import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateProps} from './Components/Redax/State';
import {addPost} from './Components/Redax/State';


export function rerenderReactTree(state:StateProps){

    ReactDOM.render(

        <React.StrictMode>
            <App dateProfile={state.postDate} dateDialogs={state.dialogsPage} addPost={addPost} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

