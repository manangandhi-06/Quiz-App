import React,{Component} from 'react';
import "./Question.css"

class Question extends Component {
  handleChange(e) {
    const {setCurrent, setScore, question} = this.props;
    e.preventDefault();
    const selected = e.target.value;
    setCurrent(this.props.current + 1);
    if (selected === question.correct) {
      setScore(this.props.score + 1);
    }
  }
  render() {
    const {question} = this.props;
    return (
      <div className="Question">
        <h3>{question.id}. {question.text}</h3>
        <ul className="list-group">
          {
            question.choices.map(choice => {
              return (
                <li className="list-group-item" key={choice.id}>
                  <input onChange={this.handleChange.bind(this)} type="radio" name={question.id} value={choice.id}/> {choice.text}
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default Question;