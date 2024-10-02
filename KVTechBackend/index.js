const express = require('express')
const cors = require('cors')
const AuthRouter = require('./routes/authrouter')
const ProductRouter = require('./routes/productrouter')

const app = express()  // express ko intialize kiya

const PORT = process.env.PORT || 8080;

const dotenv = require('dotenv');
dotenv.config({path:'./.env'})

require('./models/db') // database connected 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use('/auth', AuthRouter)
app.use('/products', ProductRouter)


app.get('/ping',(req,res) => {
    res.send('PONG')
})


app.listen(PORT,()=> {
    console.log(`Haan Bhai chal raha h tera server is ${PORT} par`);
})
