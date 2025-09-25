import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'  //upload images using cloud
import adminRouter from './routes/adminRoute.js'


//app config
const app = express()
const port = process.env.PORT || 40000
connectDB()
connectCloudinary()

//middleware
app.use(express.json())
app.use(cors())

// api endpoints

//admin endpoints
app.use('/api/admin',adminRouter)  //localhost:4000/api/admin/add-doctor


app.get('/',(req,res)=>{
    res.send('API WORKING there')
})

app.listen(port,()=>console.log("Server Started",port))


