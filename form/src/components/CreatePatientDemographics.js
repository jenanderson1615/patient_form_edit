import React from 'react';
import { TextField, Button, FormGroup, FormControl, } from 'material-ui';
import FormFields from '../formmodel/FormFields';
import PatientDemographicFields from '../formmodel/PatientDemographicFields';

class CreatePatientDemographics extends React.Component {

    save = (e) => {
        e.preventDefault();
        this.props.store.patient.saveNewPatient();
        this.props.onFormClose();
    }

    onChange = (key,val) => {
        this.props.store.patient.changeField(key,val);
    }

    toggleForm = () => {
        this.props.onFormClose();
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
                        onClick={this.toggleForm}
                        type="cancel"
                        variant="raised"
                        color="primary"
                        style={{width:300}}>Cancel
                    </Button>
                    <Button
                        type="submit"
                        variant="raised"
                        color="primary"
                        style={{width:300}}>Save
                    </Button>
                </FormControl>
            </form>
        )
    }

}
export default CreatePatientDemographics;