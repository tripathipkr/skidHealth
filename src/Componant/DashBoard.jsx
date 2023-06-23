import React, { useEffect, useState } from 'react'
import {
  Table,
  Thead,
  Tfoot,
  Th,
  TableCaption,
  TableContainer,
  HStack,
  Tr ,Tbody,Td, Button
} from '@chakra-ui/react'
import TableList from './Details'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Details from './Details'

function DashBoard() {
  const[list,setlist]=useState([])
  let navigate=useNavigate()
  useEffect(()=>{
     let data=JSON.parse(localStorage.getItem("data"));
          setlist(data)
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
       {list.map((e,i)=>{
        return <>
          <Tr>
            <Td>{i+1}</Td>
        <Td>{e.name}</Td>
        <Td>{e.email}</Td>
        <Td >{e.number}</Td>
        {/* <Td><Button onClick={(e,i)=>{<Details   name={e.name} email={e.email} number={e.number}/>
                navigate("/Details")
      }}>DETAILS</Button></Td> */}
          <Link to={`/details/${i}`}><Td><Button bg="blue">Details</Button></Td></Link> 
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