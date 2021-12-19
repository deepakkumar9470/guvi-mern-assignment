import jwt from 'jsonwebtoken'
import User from '../models/Users.js'




const tokenAuthentication = async (req,res,next) =>{


 
        try {
            const token = await req.cookies.jwt;

            if(!token){
                res.status(400).json({msg : 'Invalid token'})
            }else{
                const decode = await jwt.verify(token,process.env.JWT_SECRET)
                const rootUser = await User.findOne({_id : decode._id, "tokens : token" :token})

                if(!rootUser){
                    res.status(400).json({msg : 'User not found'})
                }else{
                    res.status(200).json({msg : 'Authorized user'})

                }
            }
            
            next()
        } catch (error) {
            res.status(400).json({msg : 'No token accessed, authorization denied'})
        }

}
export default tokenAuthentication