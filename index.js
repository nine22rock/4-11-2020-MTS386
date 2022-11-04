var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.get("/", function(req, res) {
    res.redirect("index.html")
})
app.post("/", function(req, res) {
    var user_name = req.body.name;
    var result = "<h1> Hello " + user_name + "</h1>"
    res.send(result)
})
app.listen(3000, function() {
    console.log('Express running on port 3000')
})
