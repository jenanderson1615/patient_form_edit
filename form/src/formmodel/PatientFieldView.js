import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import {FormControl, FormControlLabel } from 'material-ui/Form';
import { observer } from 'mobx-react';

const PatientFieldView = ({ patient }) => {
    console.log(patient.patient);
    return (
        <div>
            <div>
                <b>First Name </b>{patient.patient.first}
            </div>
            {/* <div>
                <b>Last Name </b>{patient.last}
            </div>
            <div>
                <b>Maiden Name </b>{patient.maiden}
            </div> */}
        </div>
    )
}

export default observer(PatientFieldView);