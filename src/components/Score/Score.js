import React from 'react';
import './Score.css'

class Score extends React.Component {
  render() {
    return(
      <div>
        <p className="text">Question <bold>{this.props.current}</bold> out of <bold>{this.props.questions.length}</bold></p>
      </div>
    );
  }
}

export default Score