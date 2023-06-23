import { Box, Center,Text } from '@chakra-ui/react'
import React from 'react'

function ContactUs() {
  return (
    <Center>
    <Center w={["95%","60%","40%"]}  mt="40px" pt="30px"  boxShadow='dark-lg' p='6' rounded='md' bg='white' >
       <Box p="30px">
       <Text  as="i"  fontSize={["xl","2xl","3xl"]} color="coral" fontWeight="600" >Name-Pradeep Kumar Tripathi</Text>
       <Text  as="i"  fontSize={["xl","2xl","3xl"]} color="coral" fontWeight="600" >Email-tripathipkr@gmail.com</Text>
        <Text  as="i"  fontSize={["xl","2xl","3xl"]} color="coral" fontWeight="600" >Mobile Number-8052665896</Text>
      </Box>
    </Center>
    </Center>
  )
}

export default ContactUs