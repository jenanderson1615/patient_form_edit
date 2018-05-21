import React from 'react';
import { TextField, Button, FormGroup, FormControl, } from 'material-ui';
import FormFields from '../formmodel/FormFields';
import PatientDemographicFields from '../formmodel/PatientDemographicFields';

class NewPatientForm extends React.Component {

    save = (e) => {
        this.props.store.saveNewPatient();
    }

    onChange = (key,val) => {
        this.props.store.changeField(key,val);
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
export default NewPatientForm;