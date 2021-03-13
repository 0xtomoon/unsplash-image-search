import apiClient from "./axios";

export function getData(keyword) {
  return apiClient
    .get(`/images/${keyword}`)
    .then(response => {
      if (response) {
        return response.data;
      }
      return false;
    })
    .catch(error => {
      console.log("API: getData() Error: ", error);
      return false;
    });
}

export function testFunction() {}
