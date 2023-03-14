import axios from 'axios';
import Cookies from 'js-cookie';
import { cookiesAuthName } from '../common/auth';

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_SERVER,
  timeout: 5 * 60 * 1000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${Cookies.get(cookiesAuthName.ACCESS_TOKEN)}`,
  },
  withCredentials: false,
});
