import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EditPatientDemographics from './components/EditPatientDemographics';
import PatientModel from './store/PatientModel';
import ViewPatientDemographics from './components/ViewPatientDemographics';
import { Button } from 'material-ui';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
       <ViewPatientDemographics patient={this.props}/>
       <Button>Edit Patient Demographics</Button>
       <Button>Create New Patient</Button>
      </div>
    );
  }
}

export default App;
