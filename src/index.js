import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class ContactList extends React.Component {
  render() {
    const people = [
      { name : "teja" },
      { name : "Suresh" },
      { name : "Gayathri" }
    ]

    return <ol>
      {people.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }
}

ReactDOM.render(
  <ContactList />,
  document.getElementById('root')
);

serviceWorker.unregister();
