const { createConnection } = require('./database.js')
const { readMetadataMovies } = require('./utils/media.js')
const app = require('./app.js')

// Create connection Lowdb
createConnection().then(() => {
  // Read Metadata all Media
  readMetadataMovies()
})

// Server is listening
app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`)
})
