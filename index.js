
const express =require("express");
const app = express();

app.use(logger);


app.get("/books",(req,res)=>{
    return res.send({ route: "/books",permission: req.true})
});

app.get("/libraries",checkPermission("libraries"),(req,res)=>{
    return res.send({ route: "/libraries", permission: req.true}
    
    )
})

app.get("/authors",checkPermission("authors"),(req,res)=>{
    return res.send({ route: "/authors", permission: req.true}

    )
});

function checkPermission(user){
return function logger(req,res,next){
    if(user=="libraries"){
        return next();
        
    }
    else if(user=="authors"){
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