import React, { useState, useEffect } from 'react'
import People from './People'
import Form from './Form'
import Filter from './Filter'
import peopleService from './peopleService' 
import Notification from './Notification'
import './App.css'

const App = () => {

  const [ persons, setPersons] = useState([]), 
        [ newName, setNewName ] = useState(''),
        [ newNumber, setNewNumber] = useState(''),
        [ searchfield, setSearchfield] = useState(''),
        [ errorMessage, setErrorMessage] = useState(null),
        [ boolMessage, setBoolMessage ] = useState(null);
 
  const effectHook = () => {
    peopleService.getPeople()
      .then((json) =>{
      setPersons(json.data)
    })
  }

  useEffect(effectHook, [])

  const filtered = persons.filter((dude) => {
    return dude.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
  })
  

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
    let isIncluded = null
    persons.find((person) => {
      if(person.name === name){
        isIncluded = person
      }
    });
    return isIncluded; 
  }


  const formSubmit = (event) => {
    event.preventDefault();
    const name = newName.trim()
    const number = newNumber;
    if(name.length === 0){
      setErrorMessage('Enter a name please'); setTimeout(() => {setErrorMessage(null)}, 5000);
      return null;
    }
    if(found(name) === null){
      
        const newPerson = {
          name,
          number
        }
        peopleService.addPerson(newPerson).then(res  => {
          setPersons(persons.concat(res.data))
          setNewName('');
          setNewNumber('');
          setErrorMessage(`Added ${name} succesfully`);
          setBoolMessage(true);
          setTimeout(() => {setErrorMessage(null); setBoolMessage(null)}, 5000);
        }).catch(err => {
          console.log(err)
          setErrorMessage('Error: Check that inputs are valid');
          setBoolMessage(false);
          setTimeout(() => {setErrorMessage(null); setBoolMessage(null)}, 6000);
        })
    } else {
      const id = found(name).id
      if(window.confirm(`Do you want to update ${name} contact info`)){

        peopleService.updatePerson(id, name, number)
          .then(res => {
          setErrorMessage(`${name} successfully updated`);
          setBoolMessage(true);
          setTimeout(() => {setErrorMessage(null); setBoolMessage(null)}, 5000);

          let list =[];
          for(var i=0; i<persons.length; i++){
            list.push(persons[i])
            if(persons[i].id === id){
              list[i] = res;
            }
          }
          setPersons(list)
        })
      } else {
        setNewName(null);
        setBoolMessage(false);
        setTimeout(() => {setErrorMessage(null); setBoolMessage(null)}, 5000);
    }//else
  }
}



const deletePerson = (name) => {
  const person = found(name);
  if(window.confirm(`Confirm to remove ${person.name}`)){
    peopleService.deletePerson(person.id)
      .then(res => {
        setErrorMessage(`${person.name} was succesfully removed`)
        setBoolMessage(true)
        setTimeout(() => {setErrorMessage(null); setBoolMessage(null)}, 5000)
        setPersons(persons.filter(dude => dude.id !== person.id))
      })
      .catch(err => {
        setErrorMessage(`ERROR: ${person.name} is already removed`)
        setBoolMessage(false);
        setTimeout(() => {setErrorMessage(null); setBoolMessage(null)}, 5000)
      })
  }
}

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} bool = {boolMessage} />
      <Filter handleSearchfieldChange={handleSearchfieldChange} />
      <h3>Add new number</h3>
      <Form handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} formSubmit={formSubmit} />
      <h3>Numbers</h3>
      <People list={filtered} deletePerson={deletePerson} />
    </div>
  )

}

export default App