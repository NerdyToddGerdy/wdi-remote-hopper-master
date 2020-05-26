import React from 'react';

const Answer = (props) => {

  console.log(props.currentAnswer);

  return(
    <div>
      <h3>This is the answer:</h3>
      <h1>{ props.currentAnswer }</h1>
      <button onClick={ props.showQuestions }>Return to questions</button>
    </div>
  )
}

export default Answer;
