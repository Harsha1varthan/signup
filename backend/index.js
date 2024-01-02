const express = require('express')
const zod = require('zod')
const {User} = require('./db')
const port = 3000
const cors = require('cors')
const {UserValidate} = require('./validate')
const app = express()

app.use(cors())
app.use(express.json())

app.post("/signup", async(req, res)=>{
    const payload = req.body

    const parsedData = UserValidate.safeParse(payload)

    if(!parsedData.success){
       return res.status(200).json({
        msg: "you're send me an invalid input"
       })
    }

    await User.create({
        user: payload.user,
        password: payload.password
    })

    

    res.json({
        success: true,
        message: "msg is created"
        
    })
})

app.listen(port, ()=>{
    console.log(`My app is listening at ${port}`)
})
