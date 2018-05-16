import { types, getParent, applySnapshot, getSnapshot } from 'mobx-state-tree';
import Api from '../Api';

const PatientModel = types
    .model('PatientModel', {
        patientId: types.maybe(types.number),
        first_name: types.maybe(types.string),
        last_name: types.maybe(types.string),
        salute: types.maybe(types.string),
        suffix: types.maybe(types.string),
        maiden_name: types.maybe(types.string),
        nickname: types.maybe(types.string),
        sex: types.maybe(types.string)
    })
    .actions(self => ({
        
        changeField(key,val) {
            self[key] = val;
        },

        saveNewPatient() {
            Api.createPatient(self);
        }

    }))

export default PatientModel;