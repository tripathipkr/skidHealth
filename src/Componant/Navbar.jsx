import React from 'react'
import { Stack, HStack, VStack,Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <HStack h="60px" w="100%" bg="blue"spacing='50px' >
        <HStack m="10px" >
          <img src='https://static.wixstatic.com/media/fd2a61_90c4e79aa57b4c97b421a29aa80baed4~mv2.png/v1/fill/w_28,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fd2a61_90c4e79aa57b4c97b421a29aa80baed4~mv2.png'/>
        <Text as="i"  fontSize={["xl","2xl","3xl"]} color="coral" fontWeight="600" >  HEALTH</Text>
        
        </HStack>
     <Link to="/">Home</Link>
     <Link to="dashBoard">
        <Text  >  DashBoard</Text>
      </Link>
     <Link to="aboutUs">About Us</Link>
     <Link to="contactUs">Contact Us</Link>
    </HStack>
  )
}

export default Navbar