import React, { Component } from 'react';
import './App.css';
import { Filters } from './components'



class App extends Component {
  
  render() {
    const filterList = [
      'Filter by Country',
      'Filter by Capital',
      'Filter by By Region',
      'Filter by Subregion'
    ]

    return (
      <div className="App">   
        <h1>Country/Capital Data Multi-Search Service</h1>
        <Filters filterList={filterList}  />
      </div>
    );
  }
}

export default App;
