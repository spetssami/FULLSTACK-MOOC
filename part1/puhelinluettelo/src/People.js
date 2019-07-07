import React from 'react'
import peopleService from  './peopleService'

const People = ({list}) => {
  const people = list.map((person) => {
    return <li key={person.id}>{person.name} {person.number} <button onClick={() => {peopleService.deletePerson(person.id).then(alert(`${person.name} has been removed`))}} >Delete this</button></li>
  })
  return(
    <div>
      {people}
    </div>
  )
}

export default People;