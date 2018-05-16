import axios from 'axios';
import qs from 'qs';

const apiUrl = 'http://localhost:9009/patients';

class PatientsApi {

  fetchPatients = async() => {
    let res = await axios.get(this.url);
    return res.data || [];
  }

  createPatient = async(PatientModel) => {
    const data = {
      "first": PatientModel.first_name,
      "last": PatientModel.last_name,
      "salute": PatientModel.prefix,
      "suffix": PatientModel.suffix,
      "maiden": PatientModel.maiden,
      "nickname": PatientModel.nickname,
      "pop_sex": PatientModel.sex,
    };
    console.log(data);
      
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