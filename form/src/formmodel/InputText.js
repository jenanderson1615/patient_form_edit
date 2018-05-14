import React from 'react';
import TextField from 'material-ui/TextField';

const InputText = ({ input, value, onChange }) => {
  return (
    <TextField
        onChange={onChange}
        error={input.hasError}
        key={input.name}
        margin="normal"
        fullWidth
        label={input.label}
        name={input.name}
        value={value} />
  )
}

export default InputText;