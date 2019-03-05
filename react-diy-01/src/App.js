import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    persons : 
    [
      {id:'1', name: "Alhuck", age: '26'},
      {id:'2', name: "Suresh", age: '30'},
      {id:'3', name: "Viswa", age: '27'}
    ],
    showPersons: false
  }

  togglePersonHandler = () => {

    let personState = this.state.showPersons;
    personState = !personState;
    this.setState({showPersons: personState});
  }

  deleteClickHandler = (personId) => {
    const delPerson = this.state.persons.findIndex((person) => {
      return person.id === personId
    });
    let personArr = this.state.persons;
    personArr.splice(delPerson, 1);
    this.setState({persons: personArr});
  }

  changeNameHandler = (personId, event) => {
    let personIndex = this.state.persons.findIndex((person) => {
        return person.id === personId
    });

    let personArr = this.state.persons;
    personArr[personIndex].name = event.target.value;
    this.setState({persons: personArr});
  } 

  render() {

    let persons = null;
    
    if(this.state.showPersons) {
      persons = this.state.persons.map(
        person => 
         <Person person = {person} click={() => this.deleteClickHandler(person.id)} change={(event) => this.changeNameHandler(person.id, event)}/>
      )
    }

    return (
      <div className="App">
        <button onClick={this.togglePersonHandler}>Click to toggle!</button>
          {persons}
      </div>
    );
  }
}

export default App;
