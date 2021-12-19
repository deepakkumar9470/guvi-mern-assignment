
import Profile from '../models/Profile.js'



class ProfileController {


  static createProfile = async(req,res) =>{
       
       const {name, email,age,gender,dob,mobile} = req.body
       if(!name || !email || !age || !gender || !dob || !mobile){
         res.status(400).json({msg: "Please fill all fileds.."})
       } 

       try {

          const profile = await new Profile(req.body)
          await profile.save()
          res.status(201).json({msg: "Profile Created",  profile : profile})
         
       } catch (error) {
        res.status(400).json({msg: "Oops profile creation failed.."})
       }
      
  }
  

    static getProfile = async (req,res) => {

          try {
              
              const profile = await Profile.find()
              res.status(200).json({success: true, msg: 'Profile found',profile:profile})
          } catch (error) {
            res.status(400).json({success: false, msg: 'Oops Profile not found'})
          }
          
      }

      
    static getSingleProfile = async (req,res) => {

      try {
          
          const profile = await Profile.findById(req.params.id)
          res.status(200).json({success: true, msg: 'Profile found',profile:profile})
      } catch (error) {
        res.status(400).json({success: false, msg: 'Oops Profile not found'})
      }
      
  }
      static updateProfile = async (req,res) => {

        try {
            
            const profiles = await Profile.findByIdAndUpdate(req.params.id,{$set : req.body},{new : true})
            res.status(200).json({success: true, msg: 'Profile updated successfully',profiles:profiles})
        } catch (error) {
          res.status(400).json({success: false, msg: 'Oops Profile not update'})
        }
        
    }
 

  
  

}

export default ProfileController



