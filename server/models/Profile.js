import mongoose from 'mongoose'


const ProfileSchema = new mongoose.Schema({
    name  : {
        type: String,
        required: true ,
    },
    email : {
        type: String,
        required: true

    },
   age : {
       type : Number,
       

   },
   gender : {
       type: String,
       enum:"male"||"female"

   },
   dob: {
        type : String,
   },
   mobile : {
     type : Number,
     required :true
   }

    
},{timestamps : true})

const Product = mongoose.model('Profile', ProfileSchema)
export default Product;