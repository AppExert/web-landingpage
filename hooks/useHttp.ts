//create a hook to handle network requests

import axios from "axios";

const useHttp = () => {

  axios.interceptors.response.use(
    (res) => {
      // Add configurations here
      if (res.status === 201) {
        console.log("Posted Successfully");
      }
      return res;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  return null;
};

export default useHttp;
