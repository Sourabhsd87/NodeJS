const http = require('http')
const url = require('url')
const fs = require("fs")
const m1 = require("./formModule")

const server = http.createServer(function(req,resp){
    var q = url.parse(req.url,true)
    resp.writeHeader(200,{"content-type":"text/html"})
    switch(q.pathname){
        case "/form":
            var rs=fs.createReadStream("./public/form.html")
            rs.pipe(resp)
            break;
        case "/submit-data":
            if(q.query.btn==="add"){
                var n11 = parseInt(q.query.n1)
                var n21 = parseInt(q.query.n2)

                var ans = m1.addition(n11,n21)
            resp.write("aaaaaaa")
                resp.write("<h3>Addition :"+ans+"</h3>")
            }
            else{
                var a = parseInt(q.query.n1);
                var ans = m1.factorial(a)
                resp.write("<h3>Factorial:"+ans+"<h3>")
            }
            resp.end()
            break;
        default:
            resp.write("some other function")
            resp.end()       
    }
})

server.listen(3002,function(){
    console.log("server is running")
})