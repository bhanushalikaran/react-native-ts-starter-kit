"use strict";
import axios from "axios";
import store from "../redux";

const BaseUrlLocale = "";

const AxiosInstance = axios.create({
  baseURL: BaseUrlLocale,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

AxiosInstance.interceptors.request.use((request) => {
  const user = store.getState()?.auth?.user || {};

  //   if (user) {
  //     request.headers.Authorization = `Bearer ${user?.access_token}`;
  //   }
  return request;
});

AxiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    let errorObj;
    if (error.response) {
      errorObj = JSON.parse(JSON.stringify(error.response));
    } else {
      errorObj = JSON.parse(JSON.stringify(error));
    }

    if (errorObj.status == 401) {
      ///logout user
      throw errorObj;
    } else {
      throw errorObj;
    }
  }
);

export default AxiosInstance;
