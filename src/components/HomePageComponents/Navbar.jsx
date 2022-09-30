import {  Box, Button, HStack, Input } from "@chakra-ui/react";
import { SiAppletv } from "react-icons/si";
import { BiUserPlus } from "react-icons/bi";
import { FaGripLines } from "react-icons/fa";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import { useNavigate } from 'react-router-dom'

import React from "react";
import Login from "../Signup/Login";

const Navbar = () => {
  const navigate=useNavigate()
  const handleInput=(e)=>{
    
  }
  

  return (
    <Box 
     display={'flex'}
     justifyContent={'space-between'}
     alignItems={'center'}
     position={'relative'}
     bg={'black'}
     minW={['320px','480px','740px']}
     p={'1rem'}>

        <Box  display={['flex','none']} color={'#0a85ff'} >
           <FaGripLines />    
        </Box>

        <Box 
        display={'flex'} 
        justifyContent={'space-between'} 
        alignItems={'center'} 
        fontSize={['30px','40px','40px']} 
        color={'white'}
        position={['absolute','static']}
        left={['50%','default']}
        transform={['translate(-50%)','translate(50%)']}
        >
            <SiAppletv cursor={'pointer'} onClick={()=>navigate('/')}/>
            <AddIcon w={[3,4,4]} h={[3,4,4]}/>
        </Box>

        <Box display={'flex'}> 
            
            <HStack
                display={["none", "inline", "inline"]}
                h={["6", "7", "8"]}
                border='1px solid white'
                borderRadius={"5"}
                justifyContent={"space-around"}
                alignItems={"center"}
                spacing={0}
                mr={1}
                onClick={()=>{navigate('/search')}}
            >
                <SearchIcon
                color={"white"}
                display={["none", "inline", "inline"]}
                w={["4", "4", "5"]}
                h={["3", "4", "5"]}
                ml="2"
                mb="1.5"
                />
                <Input
                htmlSize={8}
                width="auto"
                color={"white"}
                h={["6", "7", "8"]}
                borderStyle={"none"}
                focusBorderColor="transparent"
                onChange={handleInput}
                />
            </HStack>

            {/* <Button
            size='xs'
            color={['#0a85ff',"white"]}
            display={["flex", "flex", "flex"]}
            h={["6", "7", "8"]}
            bg={['transparent',"#0a84fe"]}
            pl={[1]}
            pr={[1]}
            _hover={"none"}
            _active={"none"}
            // onClick={handleLogin}
            ><BiUserPlus fontSize={'20px'}/>
            Sign In
            </Button> */}
            <Login/>
            

        </Box>

    </Box>
  );
};

export default Navbar;


