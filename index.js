
const express =require("express");
const app = express();

app.use(logger);


app.get("/books",(req,res)=>{
    return res.send({ route: "/books"})
});

app.get("/libraries",checkPermission("libraries"),(req,res)=>{
    return res.send({ route: "/libraries", permission: req.permission}
    
    )
})

app.get("/authors",checkPermission("authors"),(req,res)=>{
    return res.send({ route: "/authors", permission: req.permission}

    )
});

function checkPermission(user){
return function logger(req,res,next){
    if(user=="libraries" || user =="authors"){
        req.permission = true;
        
    }
    else {
        req.permission = "Not allowed"
    }
  next();
}
}

function logger(req,res,next){
    if(req.path == "/libraries"){
        req.true ="libraries"
    }
    else if(req.path =="/authors"){
    req.true ='authors'
    }
    
    else{
        req.true = "somebody";  
    }
    console.log("Called");
    next();
}

app.listen(3000, ()=>{
    console.log("listening on port 3000");
})