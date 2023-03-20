const express = require('express')
const app = express()
const port = 8000
const path = require('path')
const staticPath = path.join(__dirname, 'build')

console.log(path.join(__dirname, 'build'))
app.use(express.static(staticPath))

app.get('*', (req,res) => {
    res.sendFile(__dirname, 'build', 'index.html' )
})
app.listen(port, () => {
    console.log(`The server is listening to ${port}`)
})