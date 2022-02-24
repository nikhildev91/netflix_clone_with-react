import axios from 'axios'
import {baseUrl} from './Constants/constancts'

const instance = axios.create({
    baseURL: baseUrl,
  });
  export default instance;