import React, { useState } from "react";

const Person = (props) => {
    const  [currentAge, setCurrentAge ] = useState(props.age);
    
    return (
        <>
            <h2>{props.lastName}, {props.firstName}</h2>
            <p>Age: {currentAge}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={ () => setCurrentAge(parseInt(currentAge) + 1) }>Birthday Button for {props.firstName} {props.lastName}</button>
        </>
    )
}

export default Person;