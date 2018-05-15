import { types, getParent, applySnapshot, getSnapshot } from 'mobx-state-tree';
import Api from '../Api';

const PatientModel = types
    .model('PatientModel', {
        patientId: types.maybe(types.number),
        first_name: types.maybe(types.string),
        last_name: types.maybe(types.string),
        prefix: types.maybe(types.number),
        suffix: types.maybe(types.string),
        maiden_name: types.maybe(types.string),
        nickname: types.maybe(types.number),
        birth_date: types.maybe(types.string),
        sex: types.maybe(types.string)
    })
    .actions(self => ({

        saveNewPatient() {
            Api.createPatient(self);
        }

    }))

export default PatientModel;