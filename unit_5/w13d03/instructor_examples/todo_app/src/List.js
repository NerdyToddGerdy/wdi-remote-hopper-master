import React, { Component } from 'react'


class List extends Component {

  constructor(props) {
    super(props)
    console.log(props);
    this.state = {
      todosArray: props.todosArray
    }
  }

  handleClick() {
    console.log('button was clicked');
    this.setState({
      todosArray: []
    })
  }

  updateUI(event) {
    console.log('updating UI ....');
    event.target.className = 'strikeout';
  }

  render() {
    const listItems = this.state.todosArray.map(item => 
      <li onClick={ this.updateUI.bind(this) }>{ item }</li>
    )
    return (
      <div>
        <button onClick={ this.handleClick.bind(this)  }>CLEAR</button>
        <ul>
          { listItems }
        </ul>
      </div>
    )
  }

}


// const List = (props) => {

//   console.log(props);

//   const listItems = props.todosArray.map(item => <li>{ item }</li>)

//   return (
//     <ul>
//       { listItems }
//     </ul>
//   )

// }



export default List;
