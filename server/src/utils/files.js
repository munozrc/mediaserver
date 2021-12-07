const fs = require('fs')
const path = require('path')

const fileExists = (name) => {
  const pathDir = path.join(__dirname, '../data')
  const pathFile = path.join(pathDir, name)

  if (fs.existsSync(pathFile)) return
  if (!fs.existsSync(pathDir)) fs.mkdirSync(pathDir)
  fs.writeFileSync(pathFile, JSON.stringify([]))
}

const getConfigFile = (file) => {
  const pathFile = path.join(__dirname, file)
  return JSON.parse(fs.readFileSync(pathFile))
}

module.exports = { fileExists, getConfigFile }
