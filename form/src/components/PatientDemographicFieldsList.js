import React from "react";
import { Button, List } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import DemographicFormModel from "../store/DemographicFormModel";

const styles = {
  root: {
    position: "relative",
    width: "100%",
    paddingBottom: 40
  },
  editBtn: {
    position: "absolute",
    bottom: 12,
    left: "50%",
    marginLeft: -38,
    zoom: 0.7
  }
};

/**
 * Render the fields list and the edit button
 * @prop classes is a css class
 * @prop toggleEditPatient is the method that determines whether the edit patient dialog is open
 * @prop patient is the patient to display in the demographics
 */
const PatientDemographicFieldsList = ({
  classes,
  toggleEditPatient,
  patient
}) => {
  return (
    <div className={classes.root}>
      <List>{fields(patient)}</List>
      <Button
        className={classes.editBtn}
        variant="fab"
        color="primary"
        onClick={toggleEditPatient}
      >
        <EditIcon />
      </Button>
    </div>
  );
};

/**
 * Loops through all the PatientDemographicFields entries for the fieldName and gets the values
 *  from the patient model
 */
let fields = patient => {
  return DemographicFormModel.map(i => {
    let fieldName = i.name;
    let label = i.label;
    var fieldVal = patient[fieldName];

    //These fields are not in the demographics view, they're in a different list
    if (
      fieldName == "accountProviderId" ||
      fieldName == "patientProviderId" ||
      fieldName == "officeId" ||
      fieldName == "feeScheduleId"
    )
      return;
  });
};

export default withStyles(styles)(PatientDemographicFieldsList);
