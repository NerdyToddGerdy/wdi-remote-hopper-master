import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// child components go here
import List from './List'

const App = () => {  // methods go here

    const todosArray = ['chew', 'relax', 'drink coffee', 'abseiling']

    return (
      <div>
        <h1>My Todo List</h1>
        <List todosArray={ todosArray }/>
      </div>
    );

}

export default App;
