const fs = require("fs")

fs.readFile("canvasdemo.html",function(err,data){
    if(err){
        console.log("error occured",err);
    }
    else{
        console.log(data.toString());
    }
})

fs.readFile("arraydetails.html",function(err,data){
    if(err){
        console.log("error occured",err)
    }

})