const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const https = require('https')

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/joke', (req, res) => {
  https.get('https://api.chucknorris.io/jokes/random', (response) => {
    response.on('data', (data) => {
      console.log(data)
      res.send(JSON.parse(data))
    })
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
});

app.listen(PORT, () => {
  console.log('API listening on port 3000');
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})