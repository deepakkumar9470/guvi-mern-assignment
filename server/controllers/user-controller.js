
import User from '../models/Users.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

  class UserController {

      static register = async (req,res) => {
           
             

            try {

              const {name, email,password,confirmpassword} = req.body

            //  if(!name || !email || !password || !dob || !mobile){
            //   res.status(400).json('Please fill all fields')
              
            //  }
              const userCheck = await User.findOne({name})
              if(userCheck){
                res.status(400).json({success: false, msg: 'User already exist'})
              }

              const salt = await bcrypt.genSalt(10)
              const hashPassword = await bcrypt.hashSync(password, salt) 
              const user = await new User({
                name : name,
                email : email,
                password : hashPassword,
                confirmpassword : hashPassword,
               
              });

              await user.save()
              return res.status(200).json({success: true, msg: 'Registration successfull'})
              
            } catch (error) {
              res.status(400).json({success: false, msg: 'Oops registration failed'})
            }
          

          
            
        };
  


      static loginUser = async  (req,res) =>{
             
            

          try {
            const user = await User.findOne({
              email: req.body.email,
            })

            if (!user) {
              return { status: 'error', error: 'Invalid login' }
            }

            const isMatch= await bcrypt.compare(req.body.password,user.password)

            if (isMatch) {

               const token = await jwt.sign({_id: user._id}, process.env.JWT_SECRET)
                   res.cookie("jwt", token,{
                     expires : new Date(Date.now() + 86400000),
                     httpOnly: true
                   })

               res.json({ status: 'ok',msg:  'Login successfully'})
            } else {
               res.json({ status: false, msg : 'Invalid credentials'  })
            }
            
          } catch (error) {
            
          }
           
      }
      

      static logout = async (req,res) => {

          req.clearCookie('jwt', {path: '/login'} )
          res.status(200).json({ msg : 'Logout successfully'  })
        
      };
    

  }

  export default UserController



