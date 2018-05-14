import React from 'react';
import { TextField, Button, FormGroup } from 'material-ui';
import FormFields from '../formmodel/FormFields';
import FormModel from './FormModel';

class NewPatientForm extends React.Component {

    // ------------------------------------------------------
    render() {
        return (
            <form onSubmit={this.save}>

                <FormFields
                    inputs={FormModel}
                    parentOnChange={this.onChange} />

                <FormGroup>
                    <Button
                        type="submit"
                        variant="raised"
                        color="primary">Save
                    </Button>
                </FormGroup>
            </form>
        )
    }

}
export default NewPatientForm;