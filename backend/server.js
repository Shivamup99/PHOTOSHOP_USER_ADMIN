import express from 'express'
const PORT = process.env.PORT || 5000
import cors from 'cors'
import fileUpload from 'express-fileupload'
import cookieParser from 'cookie-parser'
import connection from './config/connection.js'
import user from './routes/user.js'
import category from './routes/category.js'
import upload from './routes/uploads.js'
import product from './routes/products.js'
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles:true
}))

connection();

app.use('/api',user);
app.use('/api',category);
app.use('/api',upload);
app.use('/api',product);
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})