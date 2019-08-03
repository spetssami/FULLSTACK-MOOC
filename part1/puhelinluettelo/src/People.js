import React from 'react';
import Person from './Person';

const People = ({list, deletePerson}) => {

  const people = () => list.map((person) => {
    return <Person person = {person} deletePerson={() => deletePerson(person.name)} />
  })
  return(
    <ul>
      {people()}
    </ul>
  )

}

export default People;