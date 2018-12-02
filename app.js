var express = require("express"),
    app     = express();

app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", function(req, res){
    res.render("home");
});

app.get("/projects", function(req, res){
    res.render("projects");
});

app.get("/projects/to-do", function(req, res){
    res.render("apps/To-Do-List-App/to-do");
});

app.get("/projects/circlegame", function(req, res){
    res.render("apps/CircleGame/CircleGame");
});

app.get("/photos", function(req, res){
    res.render("photos");
});

app.get("/about", function(req, res){
    res.render("about");
});

app.get("/chocolate", function(req, res){
    res.render("chocolate");
});

//     process.env.PORT
//          ||
//          \/
app.listen(8000,// process.env.IP,
   function(){
   console.log("MY WEBSITE Server has started");
});
