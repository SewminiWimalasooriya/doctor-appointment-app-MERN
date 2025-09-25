// import mongoose packages
import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, require:true, unique:true}, //unique use to create unique email id
    password:{type:String, required:true},
    image:{type:String, required:true},
    speciality:{type:String, required:true},
    degree:{type:String, required:true},
    experience:{type:String, required:true},
    about:{type:String, required:true},
    available:{type:Boolean, default:true},
    fees:{type:Number, required:true},
    address:{type:Object, required:true},
    date:{type:Number, required:true},
    slots_booked:{type:Object, default:{}}
},{minimize:false})  

//important: by default Mongoose removes empty objects when saving. minimize:false prevents that removal, so empty objects (e.g., {}) are preserved in the DB


//Checks if the "doctor" model already exists in Mongoose’s cache.If it exists, this value is truthy,If the left side is truthy, it returns the left side.

const doctorModel = mongoose.models.doctor || mongoose.model('doctor',doctorSchema);

export default doctorModel