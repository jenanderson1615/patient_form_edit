import { types } from 'mobx-state-tree';

const FormInputModel = types
  .model('FormInputModel',{
    name: types.string,
    label: types.string,
    type: types.string,
    required: types.boolean
  })

export default FormInputModel;