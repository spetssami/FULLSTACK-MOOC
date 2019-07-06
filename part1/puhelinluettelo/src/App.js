import React, { useState } from 'react'
import People from './People'
import Form from './Form'
import Filter from './Filter'

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



  const filtered = persons.filter((person) => 
    person.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
  )
  
  const handleSearchfieldChange = (event) => {
    setSearchfield(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);   
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }
  
  function found(name) {
    let isIncluded = false;
    persons.find((person) => {
      if(person.name === name){
        isIncluded = true;
      }
    });
    return isIncluded; 
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


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearchfieldChange={handleSearchfieldChange}/>
      <h3>Add new number</h3>
      <Form handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} formSubmit={formSubmit}/>
      <h3>Numbers</h3>
      <People list={filtered}/>
    </div>
  )

}

export default App