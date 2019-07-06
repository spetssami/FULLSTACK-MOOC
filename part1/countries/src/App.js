import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Country from './Country'

const App = () => {
    
    const [countries, setCountries] = useState([]);
    const [searchfield, setSearchfield] = useState('')

    const effectHook = () =>{
            axios.get('https://restcountries.eu/rest/v2/all')
                .then((json) =>{
                setCountries(json.data)
            })
        }
    useEffect(effectHook, [])

    const searchHandler = (event) => {
        setSearchfield(event.target.value)
    }
    const filtered = countries.filter((country) => 
         country.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
    )
    const Filter = ({list}) => {
        let countries;
        if(list.length ===1){
            countries = <Country country = {list[0]} />
        } else{
            countries = (list.length <10) ? 
            list.map((country) => {
                return <li>{country.name}</li>
            }) : <p>Too many countries to be shown currently</p>
        }
        return countries;
    }

    return(
        <div>
            <p>Search for a country <input onChange={searchHandler}/></p>
            <Filter list = {filtered}/>
        </div>
    )
}

export default App;