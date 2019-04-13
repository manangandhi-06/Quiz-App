import React,{ Component } from 'react';
import './Result.css'

class Result extends Component {
  render() {
    return (
      <div className="Result">
        <h2>Congratulations!</h2>
        <h3>You got {this.props.score} out of {this.props.questions.length}</h3>
      </div>
    );
  }
}

export default Result;