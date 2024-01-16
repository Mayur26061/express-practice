const express = require("express")
const bodyparser = require("body-parser")

const app = express()
const port = 8080

const middleware = (req,res,next)=>{
    console.log("Middleware")

    next()
}

// app.use(middleware)
app.use(bodyparser.json())
const fib = (n)=>{
    let a = 0, b = 1, c, i;
    if( n == 0)
        return a;
    for(i = 2; i <= n; i++)
    {
    c = a + b;
    a = b;
    b = c;
    }
    return b;
}
const postCr = (req,res)=>{
    res.send("This is post")
}
app.post('/handle',(req,res)=>{
    // let a = req.headers.counter using header
    // let a = req.query.counter with query ?counter=10
    console.log(req.body)
    console.log("Gettin")
    let a = req.body.counter 
    res.send("fibs "+fib(a))
})
// app.post('/posting',postCr)
// app.put('/putt',(req,res)=>{
//     res.json({'a':'Mayur'})
// })
// app.delete('/delete',(res,rep)=>{
//     rep.send("Testing Delete")
// })
app.listen(port,()=>{
    console.log("Server connected")
})