

//multer is a middleware for handling file uploads in Node.js + Express.
import multer from 'multer'

const storage = multer.diskStorage({
    filename:function(req,file,callback){
        callback(null,file.originalname)
    }
})

const upload = multer({storage})

export default upload