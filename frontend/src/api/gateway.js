import axios from "axios";

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error?.response?.status === 401) {
      sessionStorage.removeItem("ara-app-token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// const URL = import.meta.env.VITE_API_URL;
const URL = "http://localhost:9000";

function get_headers() {
  const headers = {
    "Content-Type": "application/json",
  };

  const token = JSON.parse(sessionStorage.getItem("ara-app-token"));

  if (token) {
    headers["Authorization"] = "Bearer " + token;
  }

  return headers;
}

export async function _getAll(path) {
  const headers = get_headers();
  console.log(URL);
  const response = await axios.get(URL + path, { headers });
  console.log(response);
  return response;
}

export async function _get(path) {
  const headers = get_headers();
  const response = await axios.get(URL + path, { headers });
  return response;
}

export function _post(path, body) {
  const headers = get_headers();
  return axios.post(URL + path, body, { headers });
}

export function _patch(path, body) {
  const headers = get_headers();
  return axios.patch(URL + path, body, { headers });
}

export function _delete(path) {
  const headers = get_headers();
  return axios.delete(URL + path, { headers });
}
