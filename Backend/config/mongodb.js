import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected',() => console.log("Database Connected"))


    await mongoose.connect(`${process.env.MONGODB_URL}prescripto`)//create auto database name 'prescripto'

}
export default connectDB