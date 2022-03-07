
const express =require("express");
const app = express();

app.use(logger);
app.use(checkPermission);

app.get("/books",(req,res)=>{
    return res.send({ route: "/books"})
});

app.get("/libraries",(req,res)=>{
    return res.send({ route: "/libraries", permission: req.true}
    
    )
})

app.get("/authors",(req,res)=>{
    return res.send({ route: "/authors", permission: req.true}

    )
});

function checkPermission(permission){
return function logger(req,res,next){
    if(permission=="libraries"){
        return next();
        
    }
    else if(permission=="authors"){
        return next();
    }
    return res.send("Not allowed");
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