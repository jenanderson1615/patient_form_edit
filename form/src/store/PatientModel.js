import { types, getParent, applySnapshot, getSnapshot, flow } from 'mobx-state-tree';
import Api from '../Api';

const PatientModel = types
    .model('PatientModel', {
        patient_id: types.maybe(types.number),
        first: types.maybe(types.string),
        last: types.maybe(types.string),
        salute: types.maybe(types.string),
        suffix: types.maybe(types.string),
        maiden: types.maybe(types.string),
        nickname: types.maybe(types.string)
    })
    .actions(self => ({
        changeField(key,val) {
            self[key] = val;
        },

        saveNewPatient() {
            Api.createPatient(self);
        },

        loadPatient: flow(function* () {
            try {
                const response = yield Api.fetchPatients()
                applySnapshot(self, response.response[0]);
            }
            catch (error){
                console.log("Failed to fetch patient", error);
            }

        }),

    }))

export default PatientModel;