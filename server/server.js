import express from 'express'
import authRoute from './routes/authRoute.js'
import cookieParser from 'cookie-parser'
import productRoute from './routes/product.js'
import userRoute from './routes/user.js'
const app = express()
const port = process.env.PORT || 5000;
app.use(express.json())
app.use(cookieParser())
app.use('/api/auth', authRoute )
app.use('/api/products',productRoute)
app.use('/api/user',userRoute)
app.listen(port, ()=>{
    console.log(`the server is listening on port ${port}`)

})