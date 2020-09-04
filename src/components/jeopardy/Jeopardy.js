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
        if (this.state.data.answer === this.state.formData) {
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
        return (
            <Display
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
        );
    }
}
export default Jeopardy;