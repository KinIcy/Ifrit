'use strict'
console.log(process.env.API_HOST, process.env.API_PORT)
module.exports = {
  NODE_ENV: '"production"',
  API_HOST: process.env.API_HOST || 'localhost',
  API_PORT: process.env.API_PORT || '4500'
}
