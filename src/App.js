import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class ContactList extends Component {
  render()
  {
    const people = this.props.contacts
    
    return <ol>{
        people.map((person)=>{
          return <li key={person.name}>{person.name}</li>
        })
    }</ol>    
  }
}

function App() {
  return (
    <div className="App">
      <ContactList contacts={[
      {name:'Nivaldo'},
      {name:'Waleska'},
      {name:'Cavalcanti'},
    ]} />
    </div>
  );
}

export default App;
