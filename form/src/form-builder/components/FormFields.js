/**
 * Iterates over the form fields and returns the input type, label and error message
 */
import React from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react";
import FormFieldControl from "./FormFieldControl";

const FormFields = ({ fields, data, parentOnChange }) => {
  return fields.map((field, idx) => {
    if (!field.hidden) {
      return (
        <FormFieldControl
          key={idx}
          field={field}
          data={data}
          parentOnChange={parentOnChange}
        />
      );
    }
  });
};

FormFields.propTypes = {
  fields: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  parentOnChange: PropTypes.func.isRequired
};

export default observer(FormFields);
