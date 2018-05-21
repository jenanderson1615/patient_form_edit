import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import {FormControl, FormControlLabel } from 'material-ui/Form';

const PatientFieldView = ({ label, value }) => {
    return (
        <div>
            <b>{label} </b>{value}
        </div>
    )
}

export default PatientFieldView;