const http = require("http");
const url = require("url");

function processrequest(req,resp){
    var q = url.parse(req.url,true)
    resp.writeHeader(200,{"content-type":"text/html"})

    switch(q.pathname)
    {
        case "/home":
            resp.write("<h1>Inside Home</h1>")
            resp.end();
            break;
        case "/aboutus":
            resp.write("<h1>Inside About us</h1>")
            resp.end();
            break;
        default:
            resp.write("In some other page.")
            resp.end()
            break;
    }
}

var server = http.createServer(processrequest)

server.listen(3002,()=>{console.log("server started")});