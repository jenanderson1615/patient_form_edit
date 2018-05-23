import React, { Component } from 'react';
import './App.css';
import EditPatientDemographics from './components/EditPatientDemographics';
import PatientModel from './store/PatientModel';
import ViewPatientDemographics from './components/ViewPatientDemographics';
import { Button } from 'material-ui';
import CreatePatientDemographics from './components/CreatePatientDemographics';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    }
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  }

  render() {
    return (
      <div>
        {!this.state.showForm &&
          <div>
            <ViewPatientDemographics patient={this.props}  />
            <Button onClick={this.toggleForm}>Create New Patient</Button>
            <Button onClick={this.toggleForm}>Edit Patient Demographics</Button>
          </div>
        }
      
        {this.state.showForm && <CreatePatientDemographics store={this.props} onFormClose={this.toggleForm}/>}
      </div>
    );
  }
}

export default App;
