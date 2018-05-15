import axios from 'axios';
import qs from 'qs';

const apiUrl = 'http://localhost:9009/patients';

class PatientsApi {

  fetchPatients = async() => {
    let res = await axios.get(this.url);
    return res.data || [];
  }

  createPatient = async() => {
    const data = {
      "first": "Fred",
      "last": "test",
      "salute": "Mr.",
      "suffix": "B.",
      "maiden": "Anderson",
      "nickname": "Jen",
      "birthday": "2018-05-15T15:32:27.635Z",
      "pop_sex": "1",
      "phone1": "402-430-3537",
      "email": "cool@gmail.com"
    };
      
    try {
      let res = await axios.post(
          apiUrl,qs.stringify(data))
      return res.data || {};
    } catch(error) {
      alert('Error creating patient:' + error);
    }
  }
}

const Api = new PatientsApi(apiUrl);
export default Api;