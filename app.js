const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const port = process.env.PORT || 8080

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(session({
    secret: 'cool',
}))

app.get("/data", function(req, res) {
    console.log("this is some data here : ", req)
})

app.use("*", function(request, response) {
    console.log("IM A GOD")
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/plain')
    response.end('Return you are a FOOL\n')
})

app.listen(port, function() {
    console.log("PHOTO FINISH IS RUNNING ON PORT : ", port)
})