import React from 'react'

const Country = ({country}) => {
    const {capital, population, languages, name, flag} = country;

    const getLanguages = languages.map((lang) => {
        return <ul>{lang.name}</ul>
    })
    return(
        <div key={country.numericCode}>
            <h1>{name}</h1>
            <li>Capital {capital}</li>
            <li>Population {population}</li>
            <h2>Languages</h2>
            {getLanguages}
            <br/>
            <img width="250px" height="auto" border="1px solid black" src={flag} alt={name}/>
        </div>
    )
}

export default Country