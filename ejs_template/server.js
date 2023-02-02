const express = require ('express');
const PORT= 8888;
const app= express();
//setting view engine
app.set("view engine", "ejs");
app.engine('.html', require('ejs').renderFile);

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", (req,res)=>{
    res.render("index",{
        heading: 'Hello ejs',
        category:["Mens", "Womens", "Kids"]
    });
})

app.get("/product", (req,res)=>{
    res.render("product");

})

app.get("/login", (req,res)=>{
    res.render("login");

})

app.get("/register", (req,res)=>{
    res.render("register");

})

app.post("/reg-data",(req,res)=>{
    let name= req.body.name;
    let email= req.body.email;
    let pass= req.body.pass;
    let age= req.body.age;
    // let city= req.body.city;

    console.log(name + " " + email + " "  + pass  + " " + age );
    res.send(`<h1>Name: ${name} <br> Email:${email} <br> ${pass} <br> ${age} </h1>`)
    
    
})
app.listen(PORT,(err)=>{
    if(err) throw err;
    else console.log(`Server works on ${PORT}`)

})