import React from 'react';

const style = {
    border: "1px solid black",
    backgroundColor: "green",
    width: "400px",
    height: "100px",
    margin: "10px auto",
    lineHeight: "6.5"

}
const Person = (props) => {
    return (
        <div>
            <p
                style={style}
                key={props.person.id}
                onClick={props.click}>
                Name : {props.person.name}, Age: {props.person.age}
            </p>
            <input value={props.person.name} onChange={props.change}/>
        </div>
    )
}

export default Person;