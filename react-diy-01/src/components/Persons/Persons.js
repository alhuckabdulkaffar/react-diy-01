import Person from "./Person/Person";
import React, { Component } from 'react';
class Persons extends Component {

    constructor(props) {
        super(props);
        console.log('[Personsss.js] inside constructor');
    }

    componentWillMount() {
        console.log('[Personsss.js] inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Personsss.js] inside componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('[Personsss.js] inside componentDidMount', nextProps);
    }

    shouldComponentUpdate(nextProps) {
        console.log('[Personsss.js] inside shouldComponentUpdate', nextProps);
        return true;
    }
    render() {
        return this.props.persons.map(
            (person) => {
                return <Person key={person.id} pers={person}
                    click={() => this.props.clicked(person.id)}
                    change={(event) => this.props.changed(person.id, event)}>
                </Person>
            }
        );
    }
}

export default Persons;