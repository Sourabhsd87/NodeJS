exports.addition=(a,b)=>{
    return a+b;
}

exports.factorial=(x)=>{
    var f=1;
    for(var i=1;i<=x;i++)
    {
        f=f*i
    }
    return f;
}