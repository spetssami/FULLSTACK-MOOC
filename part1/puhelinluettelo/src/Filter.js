import React from 'react'

const Filter = ({handleSearchfieldChange}) => {

    return(
      <p>Filter: <input onChange={handleSearchfieldChange}/></p>
    )
}

export default Filter