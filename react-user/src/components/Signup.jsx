
import React,{useState,useEffect} from 'react'
import {Form,Button,Container} from 'react-bootstrap'
import axios from 'axios'
import ErrorHandle from './ErrorHandle'
import LoadingScreen from './LoadingScreen'
import { useNavigate } from 'react-router-dom'


const Signup = () => {

    const navigate = useNavigate()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmpassword,setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    const signupHandler = async (e) =>{
        e.preventDefault()

        if(password !== confirmpassword){
            setMessage('password not match')
        }else{

            setMessage(null)
            try {

                const config = {
                    headers : {
                        "Content-type" : "application/json"
                    }
                }
    
                setLoading(true)
                
                const {data} = await axios.post('https://guvi-mern-assignment.herokuapp.com/api/auth/register', 
                {
                     name,
                     email,
                     password,
                    confirmpassword}, 
                config)

                setLoading(false)

                setName('')
                setEmail('')
                setPassword('')
                setConfirmPassword('')
                window.alert('Registered successfully')
                localStorage.setItem('userdata', JSON.stringify(data))  
                navigate('/login')  
                
            } catch (error) {
                setError(error.res.data.msg)
                setLoading(false)
            }

        }
        
       
        
       
    }

    return (
        <Container className="p-5">
            
            {error && <ErrorHandle variant="danger">{error}</ErrorHandle>}
            {message && <ErrorHandle variant="danger">{message}</ErrorHandle>}
            {loading && <LoadingScreen/>}
              <Form>
                  <h2 className="text-center mb-3">Signup here</h2>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      value={name}
                      onChange={(e)=>setName(e.target.value)} 
                      type="text" placeholder="Enter name" />
                    
                </Form.Group>

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

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      value={confirmpassword}
                      onChange={(e)=>setConfirmPassword(e.target.value)} 
                      type="password" placeholder="ConfirmPassword" />
                </Form.Group>
               
                <Button variant="primary" type="submit"
                   onClick={signupHandler}>
                    Signup
                </Button>
                </Form>
        </Container>
    )
}

export default Signup
