import axios from "axios";

const apiUrl = "https://api.zippopotam.us/us/";

class ZipSearchApi {
  searchZipCode = async (keyword) => {
    try {
      let res = await axios.get(apiUrl + keyword);
      return res.data || {};
    } catch (error) {
      return {};
    }
  };
}

const Api = new ZipSearchApi(apiUrl);
export default Api;
