//required modules
const express = require("express")
const bodyParser = require("body-parser")

const app = express()

//set to use EJS + body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs")
//get the CSS through public folder
app.use(express.static("public"));

/**************** Main Page ****************/
app.get("/", function(request, response) {
    response.render("main");
});

/**************** Unknown Page ****************/


/**************** Port Connection ****************/
app.listen(process.env.PORT || 3000, function() {
    console.log("Server started on Port 3000");
});