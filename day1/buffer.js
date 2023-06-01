var buf1=Buffer.alloc(400)
var l = buf1.write("hello world")
console.log("length :",l)
console.log(buf1.toString())
buf2= new Buffer("testing")

target = Buffer.alloc(buf2.length)
buf2.copy(target);
console.log(target.toString())