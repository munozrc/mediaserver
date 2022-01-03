import app from './app.js'
import { createConnection } from './database.js'

// Create connection Lowdb
createConnection()

// Server is listening
app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`)
})
