import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgermaker-9e38e.firebaseio.com/"
});

export default instance;
