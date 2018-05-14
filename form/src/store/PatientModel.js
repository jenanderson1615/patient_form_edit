import { types, getParent, applySnapshot, getSnapshot } from 'mobx-state-tree';
import Api from '../Api';

const PatientModel = types
    .model('PatientModel', {
        patientId: types.maybe(types.number),
        first_name: types.maybe(types.string),
        last_name: types.maybe(types.string)
    })
    .actions(self => ({

        saveNewPatient() {
            Api.createPatient(self);
        }

    }))

export default PatientModel;