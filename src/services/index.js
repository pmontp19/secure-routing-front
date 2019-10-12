'use strict'

const Request = require('./ApiClient')
const api = new Request('api/v1/directions')

class Directions {
  static async get (params) {
    const res = await api.get(params)
    return res
  }
}

module.exports = Directions