
import './App.css'
import React,{Fragment,useState,useEffect} from 'react'
import NavBar from './components/NavBar'
import Login from './components/Login'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Signup from './components/Signup';
import Home from './components/Home';
import Profile from './components/Profile';
import UpdateProfile from './components/UpdateProfile';
import Logout from './components/Logout';
import ProtectedRoute from './ProtectedRoute'
import axios from 'axios'

const App = () => {

    // Checking  if is user logged in
    const [auth, setAuth] = useState(false)
    const [auth1, setAuth1] = useState(true)
     
    const isLoogedInUser =  async () =>{
      try {

        const res =  axios.get('http://localhost:5000/api/auth')

        if(res.status === 200){
            setAuth(true)
            setAuth1(false)
        }
        if(res.status === 401){
          setAuth(false)
          setAuth1(true)
      }
   } catch (error) {
       console.log(error)
       
   }

    }

    useEffect(() =>{
      isLoogedInUser()

    },[])

  return (
        <div>
        <Router>
            <Fragment>
              <NavBar auth={auth1}/>
              <Routes>

                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/profile" element={<Profile/>}/>
                <Route exact path="/profile/:id" element={<UpdateProfile/>}/>
                
                <Route exact path='/login' element={<Login/>}/>
                <Route exact path='/signup' element={<Signup/>}/>
              
                
                  {/* Protected Routes bot working.. */}

                 {/* <Route  element={<ProtectedRoute auth={auth}/>}>
                  <Route exact path='/profile' element={<Profile/>}/>
                  <Route exact path='/logout' element={<Logout/>}/>
                  <Route exact path='/profile/:id' element={<UpdateProfile/>}/>
                </Route> */}

                {/* <Route element={<ProtectedRoute auth={auth1}/>}>
                  <Route exact path='/login' element={<Login/>}/>
                  <Route exact path='/signup' element={<Signup/>}/>
                </Route> */}

                {/* <Route  element={<ProtectedRoute auth={auth1}/>}>
                  <Route exact path='/signup' element={<Signup/>}/>
                </Route> */}

                {/* <Route  element={<ProtectedRoute auth={auth}/>}>
                  <Route exact path='/profile/:id' element={<UpdateProfile/>}/>
                </Route>


                <Route  element={<ProtectedRoute auth={auth}/>}>
                  <Route exact path='/logout' element={<Logout/>}/>
                </Route> */}
                 
                  
              </Routes>
            </Fragment>
            
        </Router>
        </div>
            
      
  )
}

export default App
