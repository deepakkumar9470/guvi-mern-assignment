import React,{useState,useEffect} from 'react'


import axios from 'axios'
import { FaArrowCircleRight, FaArrowsAlt } from 'react-icons/fa'
import {Link} from 'react-router-dom'
const Profile = () => {
  
    const [profData, setProfData] = useState([])


    useEffect(() => {

        const getProfileData = async() =>{
            try {

                const res = await axios.get(`https://guvi-mern-assignment.herokuapp.com/api/profile/userprofile`)
                setProfData(res.data.profile)
                
            } catch (error) {
                console.log(error)
                
            }
        }
        getProfileData()
        
    }, [])

    return (
        <div className="profilepage">
                 
                 <div className="image_div">
                     <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                     alt="profpic" />
                 </div>

                 {
                     profData?.map((prof)=>{
                         return (
                            <div className="profiletext" key={prof.id}>
                               <div className="name_div">
                                <h2 className="name">{prof.name}</h2>
                                <Link className="nav-link" 
                                
                                  to={`/profile/${prof._id}`}>

                                    <FaArrowCircleRight 
                                    color='#7ed6df'
                                    style={{marginLeft : 20}}
                                    fontSize={15}
                                    /> 
                                    
                                </Link>   
                                </div> 

                                <p className="email">Email : {prof.email}</p>
                                <p className="gender">Gender : {prof.gender}</p>
                                <p className="mobile">Mobile : {prof.mobile}</p>
                                <p className="dob">D.O.B : {prof.dob}</p>
                           </div>
                         )
                     })
                 }


               
        </div>
    )
}

export default Profile
