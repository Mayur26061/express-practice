const express = require("express")
const bodyparser = require("body-parser")

const app = express()
const port = 8080

const middleware = (req, res, next) => {
    console.log("Middleware")

    next()
}

// app.use(middleware)
app.use(bodyparser.json())
const calculateSum = (value) => {
    sum = 0;
    for (let i = 0; i <= value; i++) {
        sum += i;
    }
    return sum
}
const calculateMul = (value) => {
    ans = 1;
    for (let i = 1; i <= value; i++) {
        ans *= i;
    }
    return ans
}
// const postCr = (req,res)=>{
//     res.send("This is post")
// }
app.post('/handle', (req, res) => {
    // let a = req.headers.counter using header
    // let a = req.query.counter with query ?counter=1
    let a = req.body.counter

    if (a < 100) {
        const sum = calculateSum(a)
        const mult = calculateMul(a)
        const obj = {
            sum,
            mult
        }
        res.status(201).send(obj)
    } else {
        res.status(411).send("Length Error")
    }
})
// app.post('/posting',postCr)
// app.put('/putt',(req,res)=>{
//     res.json({'a':'Mayur'})
// })
// app.delete('/delete',(res,rep)=>{
//     rep.send("Testing Delete")
// })
app.listen(port, () => {
    console.log("Server connected")
})