import axios from 'axios'
// import store from './store'

const createApiInstance = () =>
  axios.create({
    // baseURL: 'https://api.luna.codes',
    baseURL: 'http://localhost:4000'
    // headers: {
    //   Authorization: store.getAccessToken() ? `JWT ${store.getAccessToken()}` : ''
    // }
  })

const handleResponse = response => {
  return Promise.resolve(response)
}

export default {
  get: (path, params) =>
    createApiInstance()
      .request({
        url: path,
        method: 'GET',
        params
      })
      .then(handleResponse),
  post: (path, body = {}, headers = {}) =>
    createApiInstance()
      .request({
        url: path,
        method: 'POST',
        headers,
        data: body
      })
      .then(handleResponse),
  put: (path, body = {}) =>
    createApiInstance()
      .request({
        url: path,
        method: 'PUT',
        data: body
      })
      .then(handleResponse),
  delete: path =>
    createApiInstance()
      .delete(path)
      .then(handleResponse)
}
