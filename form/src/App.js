import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewPatientForm from './components/NewPatientForm';

class App extends Component {
  render() {
    return (
      <div>
       <NewPatientForm/>
      </div>
    );
  }
}

export default App;
