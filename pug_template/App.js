const express=require('express');
const PORT=9900;
const app=express();

app.set('view engine','pug');
app.set('views','./views');

//define routes

app.get("/",(req,res)=>{
    res.render("first_view");
})

app.get("/dynamic",(req,res)=>{
    let courses=["Java","Python","PHP","JS"];
    res.render("dynamic",{name:"rohan",age:"23",mycourses:courses});
})

app.get("/login",(req,res)=>{
    res.render("login");
})

app.get("/task",(req,res)=>{
    res.render("task");
})


app.listen(PORT,(err)=>{
    if (err) throw err;
    else console.log(`Server work on ${PORT}`)
})