import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {FaEdit} from 'react-icons/fa'
import {useParams} from 'react-router-dom'

const UpdateProfile = () => {

    const {id} = useParams()
    console.log(id)
    const [profData, setProfData] = useState([])
                

    useEffect(() => {

        const getProfileData = async() =>{
            try {

                const res = await axios.get(`http://localhost:5000/api/profile/userprofile/${id}`)
                setProfData(res.data.profile)
                
            } catch (error) {
                console.log(error)
                
            }
        }
        getProfileData()
        
    }, [])


     const updateHandler = async (id) =>{
        try {

            const res = await axios.put(`https://guvi-mern-assignment.herokuapp.com/api/profile/userprofile/${id}`)
            setProfData(res.data)
            console.log('Data update success')
            
        } catch (error) {
            console.log(error)
            
        }
     }



    return (
        <div className="profilepage">
                 
                 <div className="image_div">
                 <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                     alt="profpic" />
                 </div>

                 {
                     profData.map((prof)=>{
                         return (
                            <div className="profiletext" key={prof.id}> 
                                <div className="name_div">
                                <h2 className="name">{prof.name}</h2>
                                 <FaEdit 
                                   color='#ff7f50'
                                   fontSize={25}
                                   onClick={()=>updateHandler(prof.id)}/>    
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

export default UpdateProfile
