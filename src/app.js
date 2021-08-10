const express = require("express");
const path = require("path");
require("./db/conn");
const User = require("./models/usermessage")
const hbs = require("hbs");
const { request } = require("http");

const app = express();
const port = process.env.PORT  || 2000;

//setting path
const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/views");
const partialspath = path.join(__dirname, "../templates/partials");

//mmiddl4eware
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")))
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")))
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")))

app.use(express.urlencoded({extended:false}))
app.use(express.static(staticpath))
app.set('view engine', 'hbs');
app.set("views", templatepath);
hbs.registerPartials(partialspath);

//routing
app.get('/',(req,res) => {
    res.render("index");
})



app.post('/contact', async() => {
    try{
          //  res.send(req.body);
          const userData = new User(req.body);
          await User.save();
          res.status(201).render("/");
    }catch(error) {
        res.status(500).send(error);
    }

})

//server
app.listen(port, () => {
    console.log('server at 2000');
})