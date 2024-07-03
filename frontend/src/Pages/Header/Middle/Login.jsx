import { useState,useContext,useEffect } from 'react';
import {Button,Input} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { AuthContext } from '../../../Context/AuthContextProvider';

const Login = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[error,setError]=useState(false);
    const navigate=useNavigate();

const {login,authDetails} = useContext(AuthContext)
    
async function handleClick(){
    if(!email){
        setError(true);
        return;
    }
    setError(false);
    try{
      let res= await axios({
        method:"post",
        url:"https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login",
        data:{
          email,
          password
        }
      })
      login(res?.data?.token)
    }catch(err){
        setError("Invalid Email and Password")
        console.log(err);
    }
    }
    useEffect(()=>{
        if(authDetails.isLoggedIn){
            navigate("/")}},
            [authDetails.isLoggedIn]
    )
  return (
    <div style={{height:"300px",width:"300px"}}>
      <h1>Login</h1>
      <Input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <Input placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <Button onClick={handleClick}>Login</Button>
      {
        error && <p>{error}</p>
      }
    </div>
  )
}

export default Login;