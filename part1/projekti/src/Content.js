import React from 'react';
import Part from './Part';


const Content = (props) => {
    const {parts} = props
    const createParts = parts.map((part) => {
        console.log(part)
        return <Part data = {part} />
    })
    return(
        <div>
            {createParts}
        </div>
    )
}

export default Content;