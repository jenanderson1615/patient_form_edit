import React from 'react';
import { TextField, Button, FormGroup, FormControl, } from 'material-ui';
import FormFields from '../formmodel/FormFields';
import PatientDemographicFields from '../formmodel/PatientDemographicFields';

class ViewPatientDemographics extends React.Component {
// ------------------------------------------------------
    render() {
       return(
          <div>
               <FormFields
                    inputs={PatientDemographicFields}
                    data={this.props.store}
                    parentOnChange={this.onChange} 
                    canEdit={false}/>
          </div>
       )
    }
}
export default ViewPatientDemographics;