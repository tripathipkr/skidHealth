import { Box, Center ,HStack,Text} from '@chakra-ui/react'
import React from 'react'

function AboutUs() {
  return (
    <Center>
      <Box p="30px">
        <Text fontSize={["xl","2xl","3xl"]}>Healthy Kids, Healthy Nation</Text>
        <p>We are a team of experienced senior pediatricians, research scientists and serial entrepreneurs in health-tech space with multiple patents and successful exits.</p>
        <Text> 

       Most importantly,
       we are parents who understand the value of timely screening of children's health parameters - 
       physical and mental health to ensure that all kids live their full lives without any complications - now and 
       later.
       </Text>
       <Center>
       <HStack gap={["10px","20px","22px"]} m="30px">
        
        <img src="https://static.wixstatic.com/media/fd2a61_edca4d17c06c478380b68b475829cc02~mv2.jpg/v1/crop/x_35,y_0,w_336,h_418/fill/w_298,h_371,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/SatishRath.jpg" alt="" />
       <img src="https://static.wixstatic.com/media/fd2a61_42c54e294d5d4eba8c15c8e03e6950e2~mv2.jpg/v1/crop/x_59,y_0,w_482,h_600/fill/w_298,h_371,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/JS.jpg" alt="" />
       <img src="https://static.wixstatic.com/media/fd2a61_97403597f42b44809bb2b230d951666a~mv2.jpg/v1/crop/x_98,y_0,w_1325,h_1650/fill/w_298,h_371,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Founderpic_closeup_edited.jpg" alt="" />
       </HStack>
       </Center>
      
      </Box>
      
    </Center>
  )
}

export default AboutUs