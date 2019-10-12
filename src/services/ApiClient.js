const axios = require('axios')

// TODO to develop dotenv dep
const baseURL = 'localhost:3001'

module.exports = function (service = false) {
  this.baseURL = baseURL
  this.url = service || ''
  this.headers = {}

  this.get = (params = {}) => {
    return this.request({
      method: 'GET',
      params
    })
  }

  this.post = (data, params) => {
    return this.request({
      method: 'POST',
      data,
      params
    })
  }

  this.put = (data, params) => {
    return this.request({
      method: 'PUT',
      data,
      params
    })
  }

  this.delete = (data, params) => {
    return this.request({
      method: 'DELETE',
      data,
      params
    })
  }

  this.request = (opts = {}) => {
    return new Promise((resolve, reject) => {
      opts = Object.assign({
        baseURL: this.baseURL,
        url: this.url,
        headers: this.headers || {}
      }, opts)

      return axios(opts)
        .then(({ data }) => {
          return resolve(data)
        })
        .catch(err => reject(err))
    })
  }

  this.service = (service = '') => {
    this.url += `/${service}`

    return this
  }

  this.setHeaders = (headers = {}) => {
    this.headers = Object.assign(headers, this.headers)

    return this
  }

  return this
}
