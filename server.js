const express = require('express')
const app = express()
const port = process.env.PORT

const corsHeaders = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
}

app.use(corsHeaders)
app.use(express.static('public'))


app.get('/', (req, res) =>
  res.sendFile(`${__dirname}/views/index.html`))

app.get('/json', (req, res) => {
  let ip = (req.headers['x-forwarded-for'] ||
           req.connection.remoteAddress ||
           req.socket.remoteAddress ||
           req.connection.socket.remoteAddress).split(',').shift()

  res.json({ ip })
})

app.listen(port, () => 
  console.log(`Server listening on port: ${port}`))
