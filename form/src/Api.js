import axios from 'axios';

const apiUrl = 'http://localhost:9009/patients';

class PatientsApi {

  fetchPatients = async() => {
    let res = await axios.get(this.url);
    return res.data || [];
  }

  createPatient = async(order) => {
    try {
      let res = await axios.post(this.url);
      return res.data || {};
    } catch(error) {
      alert('Error creating patient:' + error);
    }
  }
}

const Api = new PatientsApi(apiUrl);
export default Api;