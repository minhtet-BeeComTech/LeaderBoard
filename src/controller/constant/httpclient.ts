import axios, {AxiosInstance} from 'axios';

import {configKey} from './config';
// import {authStore} from 'service';

const client: AxiosInstance = axios.create();

client.interceptors.request.use(
  async config => {
    config.baseURL = configKey.apiUrl;

    //  let res = await authStore.getAuth();

    //  config.headers['access-token'] = res?.access_token || '';

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

client.interceptors.response.use(
  async response => {
    if (!response.data) {
      return Promise.reject(response);
    }
    return response;
  },
  async error => {
    return Promise.reject(error);
  },
);

export interface HttpClient {
  [key: string]: Function;
}

const httpClient: HttpClient = {
  get: client.get,
  post: client.post,
  put: client.put,
  delete: client.delete,
  // Add other HTTP methods as needed
};

export default httpClient;
