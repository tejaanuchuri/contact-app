import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const people = [
  { name : "teja" },
  { name : "suresh" },
  { name : "gayathri" }
]

const element =<ol>
  people.map((person) => (
    <li key={person.name}>{person.name}</li>
  ))
</ol>
ReactDOM.render(
  element,
  document.getElementById('root')
);

serviceWorker.unregister();
