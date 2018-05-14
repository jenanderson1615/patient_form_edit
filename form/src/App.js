import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewPatientForm from './components/NewPatientForm';
import PatientModel from './store/PatientModel'

class App extends Component {
  constructor(props) {
    super(props);
    this.store = PatientModel.create();
  }

  render() {
    return (
      <div>
       <NewPatientForm store={this.store}/>
      </div>
    );
  }
}

export default App;
