import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 8e7116188b069cf3cc502d517d14d2801340340b7b940f91b22208f086894ee4"
  }
});
