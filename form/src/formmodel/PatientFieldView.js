import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import {FormControl, FormControlLabel } from 'material-ui/Form';
import { observer } from 'mobx-react';

const PatientFieldView = ({ label, value }) => {
    return (
        <div>
            <div>
                <b>{label} </b>{value}
            </div>
        </div>
    )
}

export default observer(PatientFieldView);