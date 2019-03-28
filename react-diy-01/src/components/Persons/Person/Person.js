import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {

    constructor(props) {
        super(props);
        console.log('[Person.js] inside constructor');
    }

    componentWillMount(nextProps) {
        console.log('[Person.js] inside componentWillMount', nextProps);
    }

    componentDidMount(nextProps) {
        console.log('[Person.js] inside componentDidMount', nextProps);
    }
    render() {
        console.log('[App.js] inside render');
        return (

            <div className={classes.Person}>
                <p
                    key={this.props.pers.id}
                    onClick={this.props.click}>
                    Name : {this.props.pers.name}, Age: {this.props.pers.age}
                </p>
                <input value={this.props.pers.name} onChange={this.props.change} />
            </div>
        )
    }
}

export default Person;