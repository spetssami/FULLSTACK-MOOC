import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

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
    setNewName(event.target.value)   
}

  const formSubmit = (event) => {
    event.preventDefault();
    const name = newName;
    if(found(name) === true){
      alert(`${name} is already in the contact list`)
    } else {     
      const newPerson = {
        name
    }
    setPersons(persons.concat(newPerson))

    }
  }

const addPersons = persons.map((person) => {
  return <p>{person.name}</p>
} )
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit ={formSubmit}>
        <div>
          name: <input onChange={handleNameChange}/>
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