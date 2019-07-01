import React from 'react';

const Part = ({data}) => {
    return (
        <div>
            <p>
                {data.name} {data.exercises}
            </p>
        </div>
    )
}

export default Part;