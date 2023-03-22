import React from 'react';
import { useState, useEffect } from 'react';
import Country from '../Country/Country';
import './Countries.css';
const Countries = () => {
    return (
        <div>
            <LoadCountries></LoadCountries>
        </div>
    );
};

function LoadCountries() {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => setCountries(data))
    },[])
    
    return (
        <div>
            <h1>Rest Countries: {countries.length}</h1>
            <div className='country-container'>
            {
                countries.map(country => <Country
                    country={country}
                    key={country.cca3}
                    >
                    </Country>)
            }
            </div>
        </div>
    )
}


export default Countries;