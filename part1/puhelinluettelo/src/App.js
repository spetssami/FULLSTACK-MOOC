import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '123-213-000'},
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber] = useState('');
  const [ searchfield, setSearchfield] = useState('');

  function found(name) {
    let isIncluded = false;
    persons.find((person) => {
      if(person.name === name){
        isIncluded = true;
      }
    });
    return isIncluded; 
  }

  const filtered = persons.filter((person) => 
    person.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
  )
  
  const handleNameChange = (event) => {
    setNewName(event.target.value);   
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }
  
  const handleSearchfieldChange = (event) => {
    setSearchfield(event.target.value)
  }

  const formSubmit = (event) => {
    event.preventDefault();
    const name = newName;
    const number = newNumber;
    if(found(name) === true){
      alert(`${name} is already in the contact list`)
    } else {     
      const newPerson = {
        name,
        number
      }
    setPersons(persons.concat(newPerson))
    }
  }

const People = ({list}) => {
  const people = list.map((person) => {
    return <li>{person.name} {person.number}</li>
  })
  return(
    <div>
      {people}
    </div>
  )
}

  return (
    <div>
      <h2>Phonebook</h2>
      <p>Filter: <input onChange={handleSearchfieldChange}/></p>
      <form onSubmit ={formSubmit}>
        <div>
          name: <input onChange={handleNameChange}/>
          <br/>
          number: <input onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <People list={filtered}/>
    </div>
  )

}

export default App