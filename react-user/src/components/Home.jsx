import React,{useState,useEffect} from 'react'
import {useNavigate,Link} from 'react-router-dom'

const Home = () => {
     const navigate = useNavigate()

    //  useEffect(() => {
          
    //        const userInfo = localStorage.getItem('userinfo')

    //        if(userInfo){
    //            navigate('/')
    //        }
         
    //  }, [navigate])
     

    return (
        <div className="landingpage">
                <h1>Welcome to Profile App</h1> 
                <div className="links">
                    <button><Link className="nav-link" to="/login">Login</Link></button>
                    <button><Link className="nav-link" to="/signup">Signup</Link></button>
                </div>
               
        </div>
    )
}

export default Home
