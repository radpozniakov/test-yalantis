import axios from 'axios';


const URL_REQUEST = 'http://localhost:3000/images/';

function getImages() {
  return axios.get(URL_REQUEST)
    .then((res) => res)
    .catch((error) => console.log(error));
}

function deleteCard(id) {
  return axios.delete(URL_REQUEST + id)
    .then((res) => res)
    .catch((error) => console.log(error));
}

function updateCard(data) {
  return axios.put(URL_REQUEST + data.id, {...data})
    .then((res) => res)
    .catch((error) => console.log(error));
}

function publishCard(data) {
  return axios.post(URL_REQUEST,{...data})
    .then((res) => res)
    .catch((error) => console.log(error));
}

export {getImages, deleteCard, updateCard, publishCard};