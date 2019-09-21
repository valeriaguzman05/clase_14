const express = require("express")
const app = express()
const port = 9000 

/*const handleRoute = function(req, res) { 
    res.send("Hello World!")
}
app.get("/", handleRoute)*/

// segunda opcion //
app.get("/", function(req, res) { 
    res.send("Hello World!")
})

app.post("/post-route", function(req, res) { 
    res.send("Hello Other World!")
})

app.put("/put-route", function(req, res) {
    res.send("This is a put route")
})

app.delete("/delete-route", function(req, res) {
    res.send("This is a delete route")
})

app.listen(port, function(){
    console.log(`Example app listening on port ${port}!"`)
})