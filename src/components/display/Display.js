import React from 'react';

function Display(props) {
    
    return (
        <div>
            <h2> Category: {(props.category.title)} </h2> <br />
            <h3> Question: {(props.question)} </h3><br />
            <h4> Point Value: {(props.value)} </h4><br />
            <h4> User's Score: {(props.score)}</h4><br />
            
        </div>
    );
}

export default Display;