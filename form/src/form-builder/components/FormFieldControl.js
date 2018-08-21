/**
 * Iterates over the form fields and returns the input type, label and error message
 */
import React from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react";
import { withStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import InputSwitchStatement from "./InputSwitchStatement";
import { Grid } from "@material-ui/core";

const styles = {
  formLabel: {
    textAlign: "left",
    marginBottom: -8
  }
};

const FormFieldControl = ({ classes, field, data, parentOnChange }) => {
  /**
   * Called when a child input component gets changed.
   *
   * Sets the key, value from the input target and calls the parent change
   *
   * @param {Object} e
   */
  let onChange = e => {
    let key = e.target.name;
    let val = e.target.value;

    // set val to boolean of checked
    if (e.target.type === "checkbox") {
      val = e.target.checked;
    }
    if (e.target.name === "sex" || e.target.name === "phone1Type") {
      val = +val;
    }

    if (field.type === "select" && field.optionKey) {
      if (val === "0" || !val) {
        parentOnChange(field.optionKey, "");
      } else {
        let option = field.options.find(o => o.id === val);
        if (option) parentOnChange(field.optionKey, option.name);
      }
    }
    parentOnChange(key, val);
  };

  let zipOnChange = (fullResult, e) => {
    data.updateAddress(fullResult);
  };

  // Material UI error prop expects a bool
  let error = field.errorMessage ? true : false;
  let value = data[field.name];
  if (value === null || value === undefined) {
    value = "";
  }

  return (
    <Grid item xs={field.gridItemProps.xs} sm={field.gridItemProps.sm}>
      <FormControl
        required={field.required}
        error={error}
        margin="normal"
        fullWidth
        component="fieldset"
        key={field.name}
      >
        {field.type !== "checkbox" && (
          <FormLabel className={classes.formLabel} component="legend">
            {field.label}
          </FormLabel>
        )}

        <InputSwitchStatement
          field={field}
          error={error}
          value={value}
          parentOnBlur={() => field.validate(data)}
          parentOnChange={onChange}
          zipOnChange={zipOnChange}
        />

        {field.errorMessage && (
          <FormHelperText>{field.errorMessage}</FormHelperText>
        )}
      </FormControl>
    </Grid>
  );
};

FormFieldControl.propTypes = {
  classes: PropTypes.object,
  field: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  parentOnChange: PropTypes.func.isRequired
};

export default withStyles(styles)(observer(FormFieldControl));
