import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      persons:
        [
          { id: '1', name: "Alhuck", age: '26' },
          { id: '2', name: "Suresh", age: '30' },
          { id: '3', name: "Viswa", age: '27' }
        ],
      showPersons: false
    }
    console.log('[App.js] inside constructor');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[App.js] inside componentWillReceiveProps', nextProps);
  }

  componentWillMount(nextProps) {
    console.log('[App.js] inside componentWillMount', nextProps);
  }

  componentDidMount(nextProps) {
    console.log('[App.js] inside componentDidMount', nextProps);
  }

  togglePersonHandler = () => {

    let personState = this.state.showPersons;
    personState = !personState;
    this.setState({ showPersons: personState });
  }

  deleteClickHandler = (personId) => {
    const delPerson = this.state.persons.findIndex((person) => {
      return person.id === personId
    });
    let personArr = this.state.persons;
    personArr.splice(delPerson, 1);
    this.setState({ persons: personArr });
  }

  changeNameHandler = (personId, event) => {
    let personIndex = this.state.persons.findIndex((person) => {
      return person.id === personId
    });

    let personArr = this.state.persons;
    personArr[personIndex].name = event.target.value;
    this.setState({ persons: personArr });
  }

  render() {

    console.log('[App.js] inside render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deleteClickHandler}
        changed={this.changeNameHandler}
      ></Persons>
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          clicked={this.togglePersonHandler}>
        </Cockpit>
        {persons}
      </div>
    );
  }
}

export default App;
