import React from 'react'

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

export default People;