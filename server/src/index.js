const app = require('./app')
const { fileExists } = require('./utils/files')

fileExists('movies.json')

// Server is listening
app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`)
})
