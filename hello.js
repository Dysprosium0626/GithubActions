const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.json({
    message: 'Hello CICD!'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;