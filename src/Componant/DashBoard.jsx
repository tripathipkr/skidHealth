import React, { useEffect, useState } from 'react'
import {
  Table,
  Thead,
  Tfoot,
  Th,
  Text,
  TableCaption,
  TableContainer,
  HStack,
  Tr ,Tbody,Td, Button
} from '@chakra-ui/react'
import { Link} from 'react-router-dom'

const DashBoard=()=> {
  const[list,setlist]=useState([])
  let l=list.length
  let data=JSON.parse(localStorage.getItem("data"));
  console.log(list.length)
  useEffect(()=>{
     
     if(data.length>0){
          setlist(data)
     }
    },[])
  
function deletedata(index){
  console.log(list)
  let fildata=list.filter((e,i)=>{
        return i!=index;

  })
  console.log(index);
  console.log(fildata)
   setlist(fildata)
  localStorage.setItem("data",JSON.stringify(fildata))
}
  return (
    <TableContainer>
    <Table variant='simple'>
      <TableCaption>User List</TableCaption>
      <Thead>
        <Tr>
          <Th>SERIAL NO</Th>
          <Th>NAME</Th>
          <Th>EMAIL</Th>
          <Th >NUMBER</Th>
          <Th>VIEW DETAILS</Th>
          <Th>DElETE</Th>
        </Tr>
      </Thead>
      <Tbody>
       {data.length>0&&data.map((e,i)=>{
        return <>
          <Tr>
              <Td>{i+1}</Td>
              <Td>{e.name}</Td>
              <Td>{e.email}</Td>
              <Td >{e.number}</Td>
              <Td><Link to={`/details/${i}`}><Button bg="blue">Details</Button></Link></Td> 
               <Td><Button bg="blue"  onClick={()=>{deletedata(i)}}>DELETE</Button></Td>
          </Tr>
      
        </>
       })}
      </Tbody>
    </Table>
  </TableContainer>
  
  )
}

export default DashBoard