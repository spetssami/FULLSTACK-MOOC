import React from 'react';
import Person from './Person';

const People = ({list, deletePerson}) => {

  const people = () => list.map((person) => {
    return <Person person = {person} deletePerson={() => deletePerson(person.name)} />
  })
  //renderöi uuden henkilön
  return(
    <ul>
      {people()}
    </ul>
    
    // list.map((person) => {
    //   return (<li key={person.id}>{person.name} - {person.number} <button onClick={() => {if(window.confirm(`Do you want to delete ${person.name} fromcontact info`)){
    //     peopleService.deletePerson(person.id).then(alert(`${person.name} has been deleted`))}}}>Delete this</button></li>)
    // })
  )

}

export default People;