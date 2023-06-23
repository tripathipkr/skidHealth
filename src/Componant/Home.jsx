import React, { useState } from 'react'

import {Center,Box,Input,FormLabel,Button,HStack, FormControl} from "@chakra-ui/react"
import { useEffect } from 'react'
import axios from "axios"
import TableList from './Details'

import {  json, useNavigate } from "react-router-dom";
function Home() {
  const[user,setuser]=useState({
    name:"",
    email:"",
    number:0
  })
  let empty=[]
  localStorage.setItem("data",JSON.stringify(empty))
  let username=JSON.parse(localStorage.getItem("data")) ||[]
  const [massage,setmassage]=useState(false)
  const navigate= useNavigate()
  function handledata(e){
    setuser({
        ...user,
        [e.target.name]:e.target.value,
    })
    
  }
    const submitdata=(e)=>{
        e.preventDefault()
       console.log(user);
      username.push(user);
      console.log(username)
      localStorage.setItem("data",JSON.stringify(username))
      navigate("/dashBoard")
    
    }
      
    const getUserData=()=>{
    
      navigate("/dashBoard")
    }
  return (
    <>
    <Center>
    <Center w={["95%","60%","40%"]}  mt="20px" pt="30px"  boxShadow='dark-lg' p='6' rounded='md' bg='white'>
        <Box   >
          <FormControl isRequired="true"> <FormLabel>Name</FormLabel>
            <Input type='text' name="name" placeHolder="Name" onChange={handledata}   />
            {user.name.length>2||user.name.length==0?"":<FormLabel color={"red"}>Enter a valid  name</FormLabel>}
          </FormControl>
           <FormControl isRequired="true"  >
           <FormLabel>Email address</FormLabel>
            <Input type='email' name="email"  placeHolder="Email"   required={true}  onChange={handledata}/>
             {user.email.length>7||user.email.length==0?"":<FormLabel color={"red"}>Enter a valid  email</FormLabel>}
           </FormControl>
            <FormControl isRequired="true">
            <FormLabel>Mobile No</FormLabel>
            <Input  type='number'  name="number"placeHolder="Mobile No"   onChange={handledata}/>
            {user.number.length!==10&&user.number.length>0?<FormLabel color={"red"}>Enter a valid  number</FormLabel>:""}
            </FormControl>
           
            <HStack mt='20px'>
            <Button bg='blue' onClick={submitdata}  isDisabled={user.name===""||user.number==""||user.email===""||user.number.length!==10?true:false}>ADD USER</Button>
            
            </HStack>
           
        </Box> 
    
    </Center>
    </Center>
    
   
  
    </>
  )
}

export default Home