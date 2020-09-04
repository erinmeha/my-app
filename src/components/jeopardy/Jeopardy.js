import React, { Component } from 'react';
import JeopardyService from "../../jeopardyService";
import Display from "../display/Display";

class Jeopardy extends Component {
    constructor(props) {
        super(props);
        this.client = new JeopardyService();
        this.state = {
            data: {
                "id": null,
                "answer": "",
                "question": "",
                "value": null,
                "airdate": "",
                "created_at": "",
                "updated_at": "",
                "category_id": null,
                "game_id": null,
                "invaild-count": null,
                "category": {
                    "id": null,
                    "title": "",
                    "created_at": "",
                    "updated_at": "",
                    "clues_count": null
                }
            },
            score: 0,
            formData: {
                "answer": ""
            }
        }
    }
    getNewQuestion() {
        return this.client.getQuestion().then(result => {
            this.setState({
                data: result.data[0]
            })
            console.log(this.state.data.answer)
        })
    }
    componentDidMount() {
        this.getNewQuestion();
    }
    checkAnswer = (event) => {
        event.preventDefault()
        let score = this.state.score
        if (this.state.data.answer === document.getElementById('userinput').value) {
            this.setState({
                score: score += this.state.data.value
            })
        } else {
            this.setState({
                score: score -= this.state.data.value
            })
        }
        this.getNewQuestion()
    }
    handleChange = (event) => {
        let formData = this.state.formData;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            submitted: true
        })
    }
    render() {
        if (this.state.data.category === undefined)
            return (
                <div>
                    <h1>Loading ...</h1>
                </div>
            )
        return (
            <div>
            <Display
                category={this.state.data.category}
                question={this.state.data.question}
                answer={this.state.data.answer}
                value={this.state.data.value}
                score={this.state.score}
                checkAnswer={this.checkAnswer}
            />
                <label>Answer:</label>
                <input id="userinput" type="text" name="answer" />
                <button onClick={this.checkAnswer}>Enter</button>
            </div>
        );
    }
}
export default Jeopardy;