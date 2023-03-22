import React from 'react';
import './Country.css';
const Country = (props) => {
    // console.log(props.country);
    const {area, flags, name, capital} = props.country;  // destructuring
    return (
        <div className='country'>
            <img style={{width:'300px', padding:'5px'}} src={flags.png} alt=""/>
            <h3>{name.common}</h3>
            <p>Capital: {capital}</p>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;