import React from 'react'
import peopleService from  './peopleService'

const People = ({list}) => {
  return(
    list.map((person) => {
      return <li key={person.id}>{person.name} - {person.number} <button onClick={() => {if(window.confirm(`Do you want to delete ${person.name} fromcontact info`)){
        peopleService.deletePerson(person.id).then(alert(`${person.name} has been removed`))}}}>Delete this</button></li>
    })
  )

}

export default People;