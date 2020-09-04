import React from 'react';

function Display(props) {
    if (props.state.data.category === undefined) {
        return (
            <div>
                <h1>Loading ...</h1>
            </div>
        )
    }
    return (
        <div>
            <h2> Category: {(props.state.data.category.title)} </h2> <br />
            <h3> Question: {(props.state.data.question)} </h3><br />
            <h4> Point Value: {(props.state.data.value)} </h4><br />
            <h4> User's Score: {(props.state.score)}</h4><br />
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label>Answer:</label>
                    <input onChange={props.handleChange} type="text" name="answer" value={props.state.formData.answer} />
                </div>
                <button>Enter</button> <br />
            </form>
        </div>
    );
}

export default Display;