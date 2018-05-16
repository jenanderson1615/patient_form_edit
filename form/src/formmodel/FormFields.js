import React from 'react';
import TextField from 'material-ui/TextField';
import InputText from './InputText';
import InputCheckbox from './InputCheckbox';

const FormFields = ({ inputs, data, parentOnChange }) => {

  let onChange = (e) => {
    let key = e.target.name;
    let val = e.target.value;

    if (e.target.type == 'checkbox') {
      val = e.target.checked;  
    }
    parentOnChange(key,val);
  }

  return inputs.map(i => {
    
    let value = data[i.name];

    switch (i.type) {
      case 'checkbox':
        return <InputCheckbox input={i} value={value} parentOnChange={onChange} />
        break;

      case 'text':
        return <InputText input={i} value={value} onChange={onChange} />
        break;
        
    }

  })
}

export default FormFields;