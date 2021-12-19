import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'

const UserSchema = new mongoose.Schema({
    name  : {
        type: String,
        required: true ,
        trim : true,

    },
    email : {
        type: String,
        required: true

    },
    password : {
        type: String,
        required: true
    },
    confirmpassword : {
        type: String,
        required: true
    },
    tokens : [
        {
            token : {
                type : String,
                required : true
    
            }
        }
    ]
    
    
},{timestamps : true})



// UserSchema.methods.generateToken = async function(){
//     try {
        
//          let generatedToken =  jwt.sign({_id: this._id}, process.env.JWT_SECRET)
//          this.tokens = this.tokens.concat({token : generatedToken});
//          await this.save();
//          return generatedToken;
//     } catch (error) {
//         console.log(error)
        
//     }
// };

const User = mongoose.model('User', UserSchema)
export default User;