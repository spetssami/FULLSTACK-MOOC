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
  const [searchfield, setSearchfield] = useState('');

  function found(name) {
    let isIncluded = false;
    persons.find((person) => {
      if(person.name === name){
        isIncluded = true;
      }
    });
    return isIncluded; 
  }
  
  const handleNameChange = (event) => {
    setNewName(event.target.value);   
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleSearchfield = (event) => {
    setSearchfield(event.target.value);
    filteredPeople;
  }

  const filteredPeople = persons.filter(person =>{
    return person.name.toLowerCase().includes(searchfield.toLowerCase())
  })

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

const addPersons = persons.map((person) => {
  return <p>{person.name} {person.number}</p>
})

  return (
    <div>
      <h2>Phonebook</h2>
      <p>Searchfield <input onChange={handleSearchfield}/></p>
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
      {addPersons}
    </div>
  )

}

export default App