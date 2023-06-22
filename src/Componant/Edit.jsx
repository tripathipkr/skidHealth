import React, { useState } from 'react'
import {Center,Box,Input,FormLabel,Button,HStack,Text} from "@chakra-ui/react"
import { useNavigate, useParams } from 'react-router-dom'
function Edit() {
    const navigate=useNavigate()
   let id=localStorage.getItem("id");
   let dataedit=JSON.parse(localStorage.getItem("data"));
    //console.log(dataedit[id])
   // console.log(id);
    let data=dataedit[id]
   // console.log(data)
   const[user,setuser]=useState({
    name:data.name,
    email:"",
    number:""
    })
   
     //console.log(dataedit)
     
    function updatedata(e){
       e.preventDefault()
       dataedit[id]=user;
       localStorage.setItem("data",JSON.stringify(dataedit))
       let newdata=JSON.parse(localStorage.getItem("data"))
       console.log(newdata)
       navigate("/dashBoard")
    }

    function handle(e){
    setuser({...user,
    [e.target.name]:e.target.value
    })
    }
console.log(user)
  return (
    <>
    
 <Center>

    <Center w="40%"  mt="20px" pt="30px"  boxShadow='dark-lg' p='6' rounded='md' bg='white'>
          
        <Box  w={["95%","85%","80%"]} >

        
            
            <FormLabel>Name</FormLabel>
            <Input type='text' name="name" placeHolder={data.name} onChange={handle}   />
            {user.name.length>2||user.name.length==0?"":<FormLabel color={"red"}>Enter a valid  name</FormLabel>}
            <FormLabel>Email address</FormLabel>
            <Input type='email' name="email"  placeHolder={data.email}   required={true}  onChange={handle}/>
            {user.email.length>7||user.email.length==0?"":<FormLabel color={"red"}>Enter a valid  email</FormLabel>}
            <FormLabel>Mobile No</FormLabel>
            <Input  type='number'  name="number"placeHolder={data.number}   onChange={handle}/>
            {user.number.length!==10&&user.number.length>0?<FormLabel color={"red"}>Enter a valid  number</FormLabel>:""}
            <HStack mt='20px'>
            
            <Button bg='blue' onClick={updatedata}  isDisabled={user.name===""||user.number==""||user.email===""||user.number.length!==10?true:false}>UPDATE</Button>s
            </HStack>
        </Box> 
    </Center>
    </Center>
    
   
  



    
    </>
  )
}

export default Edit