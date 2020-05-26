import React, { Component } from 'react';
import './App.css';

// child components here
import Questions from './Questions'
import Answer from './Answer'


class App extends Component {

  constructor() {
    super()
    this.state = {
      allQuestions: [],
      currentAnswer: null
    }
  }

  showAnswer(answer) {
    console.log(answer);
    this.setState({
      currentAnswer: answer
    })
  }

  showQuestions() {
    this.setState({
      currentAnswer: null
    })
  }
  
  componentDidMount() {
    fetch('http://jservice.io/api/random?count=10')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({ allQuestions: json })
    })
  }

  render() {
    if (this.state.currentAnswer) {
      return (
        <Answer 
          currentAnswer={ this.state.currentAnswer } 
          showQuestions={ this.showQuestions.bind(this) }
        />
      )
    } else {
      return (
        <Questions 
          allQuestions={ this.state.allQuestions } 
          showAnswer={ this.showAnswer.bind(this) }
        />
      )
    }
  }
}

export default App;
