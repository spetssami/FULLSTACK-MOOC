import React from 'react';

const Total = ({parts}) => {
    let sum =0;
    for(var i=0; i<parts.length; i++){
        sum += parts[i].exercises;
    }
    
    return (
        <p><strong>Total of {sum} exercises</strong></p>
    )
}

export default Total;