import React from 'react';
import { TextField, Button, FormGroup, FormControl, } from 'material-ui';
import FormFields from '../formmodel/FormFields';
import PatientDemographicFields from '../formmodel/PatientDemographicFields';

class CreatePatientDemographics extends React.Component {

    save = (e) => {
        e.preventDefault();
        this.props.store.patient.saveNewPatient();
    }

    onChange = (key,val) => {
        this.props.store.patient.changeField(key,val);
    }

    // ------------------------------------------------------
    render() {
        return (
            <form onSubmit={this.save}>
                <FormFields
                    inputs={PatientDemographicFields}
                    data={this.props.store}
                    parentOnChange={this.onChange} 
                    canEdit={true}/>

                <FormControl style={{display:'block'}}>
                    <Button
                        type="cancel"
                        variant="raised"
                        color="primary"
                        style={{width:500}}>Cancel
                    </Button>
                    <Button
                        type="submit"
                        variant="raised"
                        color="primary"
                        style={{width:500}}>Save
                    </Button>
                </FormControl>
            </form>
        )
    }

}
export default CreatePatientDemographics;