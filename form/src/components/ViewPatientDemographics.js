import React from 'react';
import { TextField, Button, FormGroup, FormControl, } from 'material-ui';
import FormFields from '../formmodel/FormFields';
import PatientDemographicFields from '../formmodel/PatientDemographicFields';
import PatientFieldView from '../formmodel/PatientFieldView';
import { observer } from 'mobx-react';

class ViewPatientDemographics extends React.Component {
// ------------------------------------------------------
    render() {
        console.log(this.props.patient);
        // return PatientDemographicFields.map((i, idx) => {
        //     let value = this.props.store[i.name];
            return <PatientFieldView patient={this.props.patient}/>
        // });
    }
}
export default observer(ViewPatientDemographics);