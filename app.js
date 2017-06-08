var express = require("express"),
    app     = express();

//APP CONFIG
app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'pug');
app.use(express.static("public"));


//ROUTES
app.get("/", function(req, res){
  res.render("index");
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
