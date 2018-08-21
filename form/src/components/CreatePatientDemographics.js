import React, { Component } from "react";
import FormBuilder from "../form-builder/FormBuilder";
import DemographicFormModel from "../store/DemographicFormModel";
import { applySnapshot } from "mobx-state-tree";
import UIProgress from "../ui/UIProgress";

class PatientCreatePage extends Component {
  state = { loading: true };

  onChange = (key, val) => {
    this.props.patient.update(key, val);
  };

  onSubmit = async (event) => {
    if (event.target.name == "PatientCreate")
    {
      let newPatientId = await this.props.patient.saveNewPatient();
      applySnapshot(this.props.patient, {});
      this.closeForm();
      this.props.parentCallBack(newPatientId.patientId);
    }
  };

  onCancel = () => {
    this.closeForm();
  };

  closeForm = () => {
    this.props.uiStore.toggleFormDialog();
  };

  render() {
    let { patient } = this.props;
    let { loading } = this.state;

    return (
      <div>
        {loading && <UIProgress />}
        {!loading && (
          <FormBuilder
            data={patient}
            formModel={DemographicFormModel}
            parentOnChange={this.onChange}
            parentOnSubmit={this.onSubmit}
            parentOnCancel={this.onCancel}
            formName={"PatientCreate"}
          />
        )}
      </div>
    );
  }
}

export default PatientCreatePage;
