import React from 'react';
import TextField from 'material-ui/TextField';

const InputText = ({ input, value, onChange }) => {
  return (
    <div>
      <TextField
        onChange={onChange}
        error={input.hasError}
        key={input.name}
        margin="normal"
        label={input.label}
        name={input.name}
        value={value} />
    </div>
  )
}

export default InputText;