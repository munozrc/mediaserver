const low = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')
const { dbName } = require('../config.json')

let db = null

async function createConnection () {
  const adapter = new FileAsync(dbName)
  db = await low(adapter)
  db.defaults({ movies: [], series: [] }).write()
}

const getConnection = () => db

module.exports = { createConnection, getConnection }
