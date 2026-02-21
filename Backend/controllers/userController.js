import validator from "validator";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from "../models/userModel.js";

// first API to register user
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.json({ success: false, message: "missing deatils" })
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "invalid email" })
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "password must be at least 6 characters" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // create object to store user in db
        const userData = {
            name,
            email,
            password: hashedPassword
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        res.json({ success: true, token })

    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: error.message,

        })
    }
}

//api for login user 

const loginUser = async (req, res) => {
    try {
        const { email, password} = req.body
        const user = await userModel.findOne({ email })

        if (!user){
            res.json({ success:false, message:"user does not exist"})
        }

    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: error.message,

        })
    }
}
export { registerUser }