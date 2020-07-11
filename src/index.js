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

const element = React.createElement('ol',null,
  people.map((person) => (
    React.createElement('li',null,person.name)
  ))
)
ReactDOM.render(
  element,
  document.getElementById('root')
);

serviceWorker.unregister();
