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

app.get("/photos", function(req, res){
    res.render("photos");
});

app.get("/photos/:image", function(req, res) {
    res.render("show-photo", {image: req.params.image});
});

app.get("/about", function(req, res){
    res.render("about");
});

app.get("/resume", function(req, res){
    res.render("resume");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("MY WEBSITE Server has started");
});
