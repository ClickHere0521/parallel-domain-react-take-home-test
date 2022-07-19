import axios from "axios";

export default axios.create({
  baseURL: "https://api.lever.co/v0/",
  headers: {
    "Content-type": "application/json",
  },
});
