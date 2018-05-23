import axios from 'axios';
import qs from 'qs';

const apiUrl = 'http://localhost:9009/patients';

class PatientsApi {

  fetchPatients = async () => {
    try {
      let res = await axios.get('http://localhost:9009/patients/5');
      return res.data || [];
    } catch (error) {
      console.log('Error fetching patient:' + error);
    }

  }

  createPatient = async(PatientModel) => {
    const data = {
      "first": PatientModel.first,
      "last": PatientModel.last,
      "salute": PatientModel.prefix,
      "suffix": PatientModel.suffix,
      "maiden": PatientModel.maiden,
      "nickname": PatientModel.nickname
    };
      
    try {
      let res = await axios.post(
          apiUrl,qs.stringify(data))
      return res.data || {};
    } catch(error) {
      console.log('Error creating patient:' + error);
    }
  }
}

const Api = new PatientsApi(apiUrl);
export default Api;