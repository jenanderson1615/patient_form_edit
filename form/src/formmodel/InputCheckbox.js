import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import {FormControl, FormControlLabel } from 'material-ui/Form';

const InputCheckbox = ({ input, value, parentOnChange }) => {
  
  let checkbox = () => {
    return (
      <Checkbox
        name={input.name}
        checked={value}
        onChange={parentOnChange}
        value={value}
      />
    )
  }

  return (
    <FormControl component="fieldset">
      <FormControlLabel
        control={checkbox()}
        label={input.label}
      />
    </FormControl>
  )
}

export default InputCheckbox;