import React from 'react';
import {Button,Box,Image,Text} from '@mantine/core';
import {Link} from 'react-router-dom';
import './Main.css';
import logo from '../assets/logo.png';

function Landing() {
   
  return (
  
        <Box className='containerr'>
            <Image
            src={logo}
            height={180}
            width={180}
            mb={5}/>
            <Text className='Title' mb={5} >Course Management System</Text>
        <Button variant='outline' className='btn' component={Link} to='/login' >Sign In</Button>
        </Box>
  
  )
}

export default Landing