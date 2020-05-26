import React from 'react'

const Questions = (props) => {

  console.log('props coming into Questions component from App: ', props)

  const questionsList = props.allQuestions.map(item => {
    return (
      <p onClick={ () => props.showAnswer(item.answer) }>
        { item.question }
      </p>
    )
  })

  return(
    <div>{ questionsList }</div>
  )

}


export default Questions;
