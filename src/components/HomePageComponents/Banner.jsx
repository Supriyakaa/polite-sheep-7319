import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import {TriangleDownIcon } from "@chakra-ui/icons";
import { Link } from 'react-scroll'
const Banner = () => {
  return (
    <div>
      <Box
        backgroundImage="url('https://is2-ssl.mzstatic.com/image/thumb/Features112/v4/a1/fb/e7/a1fbe76c-a6b8-248b-e19a-63bc94588caf/0ab1a582-f500-4585-a68e-5c5c7c6e1b7c.png/1998x1124sr.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize={'cover'}
        h={'100vh'}
        minW={['320px','480px','740px']}
        position={'relative'}
        borderBottom={'10px solid  #0d0d0d'}
      >
        <Box 
        color={'white'} 
        position={'absolute'}
        bottom={'5%'}
        left={'50%'}
        transform={'translate(-50%)'}
        textAlign={'center'}
        >
            <Text as={'h1'} fontSize={['60px','80px','80px','90px']} w={'100vw'} fontWeight={"700"}>All Apple Originals.</Text>
            <Text as={'h1'} fontSize={['10px','12px','15px','20px']} w={'100vw'} >Exclusively on Apple TV+. Watch here and on the Apple TV app across your devices.</Text>
            <Button color={'#141a10'} bg='#ffffff' mt={'20px'}>Start Free Trial</Button>
            <Text mt={'20px'} as={'p'}>7&nbsp;days free, then $4.99/month.</Text>
            <Text><span >Or 3 months free when you buy an eligible Apple device.&nbsp;Some titles coming later to Apple&nbsp;TV+.</span></Text>
        </Box>
        <Link activeClass="active" to="content" spy={true} smooth={true} offset={50} duration={500} cursor={'pointer'}><TriangleDownIcon position={'absolute'} bottom={'2%'} left={'50%'} color={'white'}/></Link>
      </Box>
    </div>
  );
};

export default Banner;
