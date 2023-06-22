import { Box, Button, Center,Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Edit from './Edit'

function Details() {
    
  const {id }= useParams()
  const details=JSON.parse(localStorage.getItem("data"));
  console.log(id);
  localStorage.setItem("id",id);

  return (
    <Center>
    <Center w="40%"  mt="20px" pt="30px"  boxShadow='dark-lg' p='6' rounded='md' bg='white' >
       <Box   >
              <Box m="20px"><Text>Name-{details[id].name}</Text></Box>
              <Box m="20px"> <Text>Email-{details[id].email}</Text></Box>
              <Box m="20px"><Text>Mobile-{details[id].number}</Text> </Box>
              <Link to="/update"><Button bg="blue" >UPDATE USER</Button></Link>
        </Box>
       
             
    </Center>
    </Center>
  )
}

export default Details