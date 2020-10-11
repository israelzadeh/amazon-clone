import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-feruzjon-amzn.cloudfunctions.net/api",
  // http://localhost:5001/feruzjon-amzn/us-central1/api
});

export default instance;
