import { types } from 'mobx-state-tree';
import FormInputModel from './FormInputModel';

const FormStore = types

  .model('FormStore',{
    inputs: types.array(FormInputModel),
    isErrors: types.maybe(types.boolean,false)
  })

  .actions(self => ({
    
    validate(data) {
      self.inputs.map((i,idx) => {
        let value = data[i.name].trim();
        let error = (i.required && !value) ? true:false;
        i.hasError = error;
      });

      self.setError();
    },

    setError() {
      let numErrors = self.inputs.filter(i => i.hasError === true);
      self.isErrors = (numErrors.length) ? true:false;
    }

  }))

export default FormStore;