const express = require('express');
const exphbs =require('express-handlebars');
const PORT = 9999;
const app =express();
app.engine('handlebars', exphbs.engine());
app.set('view engine','handlebars')
app.set('views','./views')

//define routes

app.get("/",(req,res)=>{
    res.render('first');
})

app.get("/about",(req,res)=>{
    res.render('about');
})

app.listen(PORT,(err)=>{
    if(err){console.log("error occured")}
    else {
        console.log(`work on ${PORT}`)
    }
})