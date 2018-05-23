import React from 'react';
import { TextField, Button, FormGroup, FormControl, } from 'material-ui';
import FormFields from '../formmodel/FormFields';
import PatientDemographicFields from '../formmodel/PatientDemographicFields';
import PatientFieldView from '../formmodel/PatientFieldView';
import { observer } from 'mobx-react';

class ViewPatientDemographics extends React.Component {
    render() {
        return PatientDemographicFields.map((i, idx) => {
            let fieldName = i.name;
            let patient = this.props.patient.patient;
            let fieldVal = patient[fieldName];
            let label = i.label;
            return <PatientFieldView label={label} value={fieldVal} />
        });
    }
}
export default observer(ViewPatientDemographics);