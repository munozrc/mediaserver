const { createConnection } = require('./database.js')
const app = require('./app.js')

// Create connection Lowdb
createConnection()

// Server is listening
app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`)
})
