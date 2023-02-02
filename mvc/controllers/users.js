const fs=require('fs');
const registration=((req,res)=>{
    let {name,email,password,age,city}=req.body;
    if(fs.existsSync(`./users/${email}.txt`))
    {
        res.render('regis',{errMsg:'Email already registerd'})
    }
    else {
        fs.writeFile(`./users/${email}.txt`,`${name}\n${email}\n${password}\n${age}\n${city}`,(err)=>{
            if(err){
                res.render('regis',{errMsg:'Something went wrong'})
                
            }
            else{
                //res.render('regis',{succMsg:'Registered Successfully'})
      res.redirect("/users/welcome/"+email)
            }
        })
    }
    
})
const login=((req,res)=>{
    res.send("Login Done")
})
module.exports={
    registration,
    login
}