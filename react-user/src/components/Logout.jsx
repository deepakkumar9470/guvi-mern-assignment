import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Logout = () => {

    const navigate = useNavigate()

    const LogoutHandler = async () =>{
          try {

               const res =  axios.get('https://guvi-mern-assignment.herokuapp.com/logout')

               if(res.status === 401 || !res){
                   window.alert('Please logout later')
               }else{

                     navigate('/')
                     window.location.reload()
               }
              
          } catch (error) {
              console.log(error)
              
          }
    }
    useEffect(() => {
        LogoutHandler()
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default Logout
