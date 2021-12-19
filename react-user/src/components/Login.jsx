import React,{useState,useEffect} from 'react'
import {Form,Button,Container,Alert} from 'react-bootstrap'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'
import LoadingScreen from './LoadingScreen';
import ErrorHandle from './ErrorHandle'


const Login = () => {
     
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)


    const loginHandler = async (e) =>{
        e.preventDefault()
        
        try {

            const config = {
                headers : {
                    "Content-type" : "application/json"
                }
            }

            setLoading(true)
            
            const {data} = await axios.post('https://guvi-mern-assignment.herokuapp.com/api/auth/login', {email,password}, config)
            setLoading(false)
            setEmail('')
            setPassword('')
            if(data.status === 400 || !data){
                window.alert('Invalid credentials')
            }else{
                 
                window.alert('Log in successfully')
                navigate('/profile')
                
            }
            
            localStorage.setItem('userdata', JSON.stringify(data))  
             
            
            
        } catch (error) {
            setError(error.res.data.msg)
            setLoading(false)
        }
        
       
    }

    return (
        <Container className="p-5">
             
             {error && <ErrorHandle variant="danger">{error}</ErrorHandle>}
             {loading && <LoadingScreen/>}
            
              <Form>
                  <h2 className="text-center mb-3">Login here</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                       value={email}
                       onChange={(e)=>setEmail(e.target.value)} 
                       type="email" placeholder="Enter email" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                       value={password}
                       onChange={(e)=>setPassword(e.target.value)} 
                       type="password" placeholder="Password" />
                </Form.Group>
               
                <Button variant="primary"
                 onClick={loginHandler}
                type="submit">
                    Login
                </Button>
                 {/* <Button className="ml-2" variant="info">
                  <Link className="nav-link" to="/signup">Signup</Link>
                 </Button> */}
                </Form>

               
        </Container>
    )
}

export default Login
