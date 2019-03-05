import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import {Provider} from 'react-redux'; 
import {createStore} from 'redux';

function reducer() {
    return {
        
        user: {
            name: 'Dustin'
        },
        movies: [
            'Star Wars',
            'Lord of the Rings',
            'Harry Potter'
        ],
        todoList: [
            { 
            task: 'Learn Redux', 
            id: 0, 
            completed: false 
            }
        ],
        moviesToWatch: 13
    }
}


const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


