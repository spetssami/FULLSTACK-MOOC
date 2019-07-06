import React from 'react';




const Form = ({handleNameChange, handleNumberChange, formSubmit}) => {
    
      
      
    return(
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
    )
}

export default Form;