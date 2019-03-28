import classes from './Cockpit.css';
import React from 'react';

const Cockpit = (props) => {
    let btnClass = classes.Green;
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    return (
        <div className={classes.Cockpit}>
            <button
                className={btnClass}
                onClick={props.clicked}>Click to toggle!</button>
        </div>
    )
}

export default Cockpit;