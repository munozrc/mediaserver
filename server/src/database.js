import { Low, JSONFile } from 'lowdb'

let db = null

async function createConnection () {
  const adapter = new JSONFile('../db.json')
  db = new Low(adapter)
  await db.read()
  db.data ||= { movies: [], series: [] }
}

const getConnection = () => db

export { createConnection, getConnection }
