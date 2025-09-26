import jwt from 'jsonwebtoken';


//admin auth middleware
const authAdmin = async (requestAnimationFrame,resizeBy,next) =>{
    try {
        const {atoken} = requestAnimationFrame.headers
        if (!atoken){
            return resizeBy.json({
                success:false,
                message: "No authorized login again"
            })
        }
        const token_decode = jwt.verify(atoken,process.env.JWT_SECRET)

        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return resizeBy.json({
                success:false,
                message: "No authorized login again.not mach server create token"
            })
        }
        
    } catch (error) {
        console.log(error)
            res.json({
                success:false,
                message: error.message,
                
            })
    }
}

export default authAdmin