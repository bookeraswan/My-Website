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

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("MY WEBSITE Server has started");
});