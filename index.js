const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.get('/v2/sbc_api/dealer/locator', (req, res) => {
    let file = fs.readFileSync('./response.json');
    res.setHeader("Content-Type","application/json;charset=UTF-8");
    res.send(file);
})

app.listen(port, () => {
  console.log(`Mock app for dealer locator, listening on port ${port}`)
})
